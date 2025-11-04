import type { FileDropZoneProps } from "$lib/components/ui/file-drop-zone";

export type BoundFile = {
  name: string;
  size: number;
  type: string;
};

export type FileBinding = {
  file_count: number;
  files: string;
  error: string;
  max_files?: number;
};

type UploadHandler = FileDropZoneProps["onUpload"];
type RejectHandler = NonNullable<FileDropZoneProps["onFileRejected"]>;

export function createFileBindingHandlers({
  bindings,
  maxFilesProp,
}: {
  bindings: FileBinding;
  maxFilesProp?: number;
}) {
  const readBoundFiles = (): BoundFile[] => {
    if (!bindings?.files) return [];
    try {
      const parsed = JSON.parse(bindings.files) as BoundFile[];
      if (!Array.isArray(parsed)) return [];

      return parsed
        .filter(
          (item) =>
            item &&
            typeof item.name === "string" &&
            typeof item.size === "number" &&
            typeof item.type === "string"
        )
        .map((item) => ({
          name: item.name,
          size: item.size,
          type: item.type,
        }));
    } catch {
      return [];
    }
  };

  const writeBoundFiles = (files: BoundFile[]): void => {
    bindings.files = JSON.stringify(files);
    bindings.file_count = files.length;
  };

  const maxFiles = (): number => maxFilesProp ?? bindings?.max_files ?? 5;

  const handleUpload: UploadHandler = async (files) => {
    const existing = readBoundFiles();
    const merged = [...existing];

    for (const file of files) {
      const duplicate = merged.some(
        (item) =>
          item.name === file.name &&
          item.size === file.size &&
          item.type === file.type
      );

      if (!duplicate) {
        merged.push({
          name: file.name,
          size: file.size,
          type: file.type,
        });
      }
    }

    writeBoundFiles(merged);
    bindings.error = "";
  };

  const handleFileRejected: RejectHandler = ({ reason, file }) => {
    bindings.error = `${file.name}: ${reason}`;
  };

  const removeFile = (index: number): void => {
    const current = readBoundFiles();
    current.splice(index, 1);
    writeBoundFiles(current);

    if (current.length === 0) {
      bindings.error = "";
    }
  };

  return {
    bindings,
    readBoundFiles,
    writeBoundFiles,
    maxFiles,
    handleUpload,
    handleFileRejected,
    removeFile,
  };
}
