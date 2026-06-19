export type DataChannelListener = (payload: unknown) => void;

export type DataChannel = {
  set: (id: string, payload: unknown) => void;
  get: (id: string) => unknown;
  delete: (id: string) => void;
  subscribe: (id: string, listener: DataChannelListener) => () => void;
};

export function createDataChannel(): DataChannel {
  const payloads = new Map<string, unknown>();
  const listeners = new Map<string, Set<DataChannelListener>>();

  function notify(id: string, payload: unknown): void {
    const subs = listeners.get(id);
    if (!subs) {
      return;
    }
    for (const listener of subs) {
      listener(payload);
    }
  }

  return {
    set(id, payload) {
      payloads.set(id, payload);
      notify(id, payload);
    },
    get(id) {
      return payloads.get(id);
    },
    delete(id) {
      payloads.delete(id);
      listeners.delete(id);
    },
    subscribe(id, listener) {
      let subs = listeners.get(id);
      if (!subs) {
        subs = new Set();
        listeners.set(id, subs);
      }
      subs.add(listener);
      return () => {
        subs?.delete(listener);
        if (subs && subs.size === 0) {
          listeners.delete(id);
        }
      };
    },
  };
}
