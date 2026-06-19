import { Hello } from './components/Hello';
import { PropsPanel } from './components/PropsPanel';
import { createDataChannel } from './data-channel';
import { defineDrElement } from './define-element';

const RUNTIME_VERSION = '0.2.0';
const dataChannel = createDataChannel();

defineDrElement('dr-hello', Hello, ['name'], dataChannel);
defineDrElement('dr-props-panel', PropsPanel, [], dataChannel);

window.__drRuntime = {
  defineDrElement: (tag, Component, observedAttributesOrOptions) =>
    defineDrElement(tag, Component, observedAttributesOrOptions, dataChannel),
  data: dataChannel,
  version: RUNTIME_VERSION,
};
