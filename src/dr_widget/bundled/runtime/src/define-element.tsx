import {
  createRoot,
  type ComponentType,
  type Root,
} from 'react-dom/client';

function propsFromAttributes(
  el: HTMLElement,
  observedAttributes: string[],
): Record<string, string | undefined> {
  const props: Record<string, string | undefined> = {};
  for (const name of observedAttributes) {
    props[name] = el.getAttribute(name) ?? undefined;
  }
  return props;
}

export function defineDrElement(
  tag: string,
  Component: ComponentType<Record<string, string | undefined>>,
  observedAttributes: string[],
): void {
  if (customElements.get(tag)) {
    return;
  }

  class DrElement extends HTMLElement {
    static get observedAttributes() {
      return observedAttributes;
    }

    #root: Root | null = null;

    connectedCallback() {
      this.#root = createRoot(this);
      this.#render();
    }

    attributeChangedCallback() {
      this.#render();
    }

    disconnectedCallback() {
      this.#root?.unmount();
      this.#root = null;
    }

    #render() {
      if (!this.#root) {
        return;
      }
      this.#root.render(
        <Component {...propsFromAttributes(this, observedAttributes)} />,
      );
    }
  }

  customElements.define(tag, DrElement);
}
