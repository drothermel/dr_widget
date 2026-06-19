import { Hello } from './components/Hello';
import { defineDrElement } from './define-element';

const RUNTIME_VERSION = '0.1.0';

defineDrElement('dr-hello', Hello, ['name']);

window.__drRuntime = {
  defineDrElement,
  version: RUNTIME_VERSION,
};
