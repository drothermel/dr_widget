import type { DataChannel } from './data-channel';

export const DEFAULT_PROPS_ATTRIBUTE = 'data-props';
export const DEFAULT_DATA_REF_ATTRIBUTE = 'data-ref';

export type ParsePropsOptions = {
  observedAttributes?: readonly string[];
  propsAttribute?: string;
  dataRefAttribute?: string;
};

export type ParsedProps = Record<string, unknown>;

function parseJsonAttribute(
  element: HTMLElement,
  attributeName: string,
): ParsedProps | undefined {
  const raw = element.getAttribute(attributeName);
  if (raw === null) {
    return undefined;
  }
  try {
    const parsed: unknown = JSON.parse(raw);
    if (typeof parsed === 'object' && parsed !== null && !Array.isArray(parsed)) {
      return parsed as ParsedProps;
    }
  } catch {
    console.warn(
      `[dr-runtime] Invalid JSON in ${attributeName} on <${element.tagName.toLowerCase()}>`,
    );
  }
  return undefined;
}

function mergeChannelPayload(
  props: ParsedProps,
  payload: unknown,
): ParsedProps {
  if (payload === undefined) {
    return props;
  }
  if (
    typeof payload === 'object' &&
    payload !== null &&
    !Array.isArray(payload)
  ) {
    return { ...props, ...(payload as ParsedProps) };
  }
  return { ...props, data: payload };
}

export function parseElementProps(
  element: HTMLElement,
  dataChannel: DataChannel,
  options: ParsePropsOptions = {},
): ParsedProps {
  const props: ParsedProps = {};
  const observedAttributes = options.observedAttributes ?? [];

  for (const name of observedAttributes) {
    props[name] = element.getAttribute(name) ?? undefined;
  }

  const propsAttribute = options.propsAttribute ?? DEFAULT_PROPS_ATTRIBUTE;
  const jsonProps = parseJsonAttribute(element, propsAttribute);
  if (jsonProps) {
    Object.assign(props, jsonProps);
  }

  const dataRefAttribute = options.dataRefAttribute ?? DEFAULT_DATA_REF_ATTRIBUTE;
  const dataRef = element.getAttribute(dataRefAttribute);
  if (dataRef) {
    props.__dataRef = dataRef;
    return mergeChannelPayload(props, dataChannel.get(dataRef));
  }

  return props;
}

export function readDataRef(
  element: HTMLElement,
  dataRefAttribute: string = DEFAULT_DATA_REF_ATTRIBUTE,
): string | undefined {
  return element.getAttribute(dataRefAttribute) ?? undefined;
}
