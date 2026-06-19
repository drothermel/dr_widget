import {
  createRoot,
  type ComponentType,
  type Root,
} from 'react-dom/client';

import type { DataChannel } from './data-channel';
import {
  DEFAULT_DATA_REF_ATTRIBUTE,
  DEFAULT_PROPS_ATTRIBUTE,
  parseElementProps,
  readDataRef,
  type ParsePropsOptions,
} from './parse-props';

export type DrElementOptions<P extends Record<string, unknown>> =
  ParsePropsOptions & {
    parseProps?: (
      element: HTMLElement,
      dataChannel: DataChannel,
    ) => P;
  };

function isOptions<P extends Record<string, unknown>>(
  value: readonly string[] | DrElementOptions<P>,
): value is DrElementOptions<P> {
  return !Array.isArray(value);
}

function resolveOptions<P extends Record<string, unknown>>(
  observedAttributesOrOptions: readonly string[] | DrElementOptions<P>,
): DrElementOptions<P> {
  if (isOptions(observedAttributesOrOptions)) {
    return observedAttributesOrOptions;
  }
  return { observedAttributes: observedAttributesOrOptions };
}

export function defineDrElement<P extends Record<string, unknown>>(
  tag: string,
  Component: ComponentType<P>,
  observedAttributesOrOptions: readonly string[] | DrElementOptions<P>,
  dataChannel: DataChannel,
): void {
  if (customElements.get(tag)) {
    return;
  }

  const options = resolveOptions(observedAttributesOrOptions);
  const propsAttribute = options.propsAttribute ?? DEFAULT_PROPS_ATTRIBUTE;
  const dataRefAttribute = options.dataRefAttribute ?? DEFAULT_DATA_REF_ATTRIBUTE;

  const readProps = (element: HTMLElement): P => {
    if (options.parseProps) {
      return options.parseProps(element, dataChannel);
    }
    return parseElementProps(element, dataChannel, options) as P;
  };

  class DrElement extends HTMLElement {
    static get observedAttributes() {
      const attrs = new Set<string>(options.observedAttributes ?? []);
      attrs.add(propsAttribute);
      attrs.add(dataRefAttribute);
      return [...attrs];
    }

    #root: Root | null = null;
    #unsubscribeData: (() => void) | null = null;

    connectedCallback() {
      this.#root = createRoot(this);
      this.#bindDataChannel();
      this.#render();
    }

    attributeChangedCallback(
      name: string,
      oldValue: string | null,
      newValue: string | null,
    ) {
      if (oldValue === newValue) {
        return;
      }
      if (!this.isConnected) {
        return;
      }
      if (name === dataRefAttribute) {
        this.#bindDataChannel();
      }
      this.#render();
    }

    disconnectedCallback() {
      this.#unsubscribeData?.();
      this.#unsubscribeData = null;
      this.#root?.unmount();
      this.#root = null;
    }

    #bindDataChannel() {
      this.#unsubscribeData?.();
      this.#unsubscribeData = null;

      const dataRef = readDataRef(this, dataRefAttribute);
      if (!dataRef) {
        return;
      }

      this.#unsubscribeData = dataChannel.subscribe(dataRef, () => {
        this.#render();
      });
    }

    #render() {
      if (!this.#root) {
        return;
      }
      this.#root.render(<Component {...readProps(this)} />);
    }
  }

  customElements.define(tag, DrElement);
}

export { whenLayoutReady } from './layout';
export type { LayoutReadyCallback } from './layout';
