type PropsPanelProps = {
  title?: string;
  items?: string[];
  __dataRef?: string;
};

export function PropsPanel({ title, items }: PropsPanelProps) {
  const heading = title?.trim() || 'Props panel';
  const rows = items ?? [];

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
