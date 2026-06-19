import type { ComponentType } from 'react';

import type { DataChannel } from './data-channel';
import type { DrElementOptions } from './define-element';

export type DrRuntime = {
  defineDrElement: <P extends Record<string, unknown>>(
    tag: string,
    Component: ComponentType<P>,
    observedAttributesOrOptions: readonly string[] | DrElementOptions<P>,
  ) => void;
  data: DataChannel;
  version: string;
};

declare global {
  interface Window {
    __drRuntime?: DrRuntime;
    __drRuntimeLoaded?: boolean;
  }
}

export {};
