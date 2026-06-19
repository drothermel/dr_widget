export type LayoutReadyCallback = (element: HTMLElement) => void;

/**
 * Run `callback` once the element has non-zero layout dimensions.
 *
 * Design rule 2: never read geometry in `connectedCallback` — layout may not
 * be ready yet. Prefer this helper (rAF + ResizeObserver) for sizing work.
 */
export function whenLayoutReady(
  element: HTMLElement,
  callback: LayoutReadyCallback,
): () => void {
  let cancelled = false;
  let observer: ResizeObserver | null = null;

  const run = () => {
    if (cancelled) {
      return;
    }
    if (element.clientWidth > 0 || element.clientHeight > 0) {
      callback(element);
      observer?.disconnect();
      observer = null;
      return;
    }
    requestAnimationFrame(run);
  };

  observer = new ResizeObserver(() => {
    run();
  });
  observer.observe(element);
  requestAnimationFrame(run);

  return () => {
    cancelled = true;
    observer?.disconnect();
  };
}
