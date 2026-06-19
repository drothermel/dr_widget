import type { ComponentType } from 'react';

export type DrRuntime = {
  defineDrElement: (
    tag: string,
    Component: ComponentType<Record<string, string | undefined>>,
    observedAttributes: string[],
  ) => void;
  version: string;
};

declare global {
  interface Window {
    __drRuntime?: DrRuntime;
    __drRuntimeLoaded?: boolean;
  }
}

export {};
