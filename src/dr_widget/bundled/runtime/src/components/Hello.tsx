type HelloProps = {
  name?: string;
};

export function Hello({ name }: HelloProps) {
  const label = name?.trim() || 'World';
  return <span>Hello, {label}!</span>;
}
