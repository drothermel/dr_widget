type PropsPanelProps = {
  title?: string;
  items?: string[];
  __dataRef?: string;
};

export function PropsPanel({ title, items }: PropsPanelProps) {
  const heading =
    typeof title === 'string' && title.trim().length > 0
      ? title.trim()
      : 'Props panel';
  const rows = Array.isArray(items)
    ? items.filter((item): item is string => typeof item === 'string')
    : [];

  return (
    <div>
      <strong>{heading}</strong>
      {rows.length > 0 ? (
        <ul>
          {rows.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>No items.</p>
      )}
    </div>
  );
}
