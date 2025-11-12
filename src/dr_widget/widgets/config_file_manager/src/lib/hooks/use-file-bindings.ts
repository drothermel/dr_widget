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
  selected_config?: string | null;
};

type UploadHandler = FileDropZoneProps["onUpload"];
type RejectHandler = NonNullable<FileDropZoneProps["onFileRejected"]>;

export function createFileBindingHandlers({
  bindings,
  maxFiles,
}: {
  bindings: FileBinding;
  maxFiles?: number;
}) {
  const maxFileCount = Number.isFinite(maxFiles) ? maxFiles : undefined;

  const normalizeFiles = (files: unknown): BoundFile[] => {
    if (!Array.isArray(files)) return [];

    const validItems = files
      .filter(
        (item) =>
          item &&
          typeof item.name === "string" &&
          typeof item.size === "number" &&
          typeof item.type === "string",
      )
      .map((item) => ({
        name: item.name,
        size: item.size,
        type: item.type,
      }));

    const limit = maxFileCount ?? validItems.length;
    return validItems.slice(0, limit);
  };

  const readBoundFiles = (): BoundFile[] => {
    if (!bindings?.files) return [];
    try {
      const parsed = JSON.parse(bindings.files) as unknown;
      return normalizeFiles(parsed);
    } catch {
      return [];
    }
  };

  const writeBoundFiles = (files: BoundFile[]): void => {
    const normalized = normalizeFiles(files);
    bindings.files = JSON.stringify(normalized);
    bindings.file_count = normalized.length;
  };

  const handleUpload: UploadHandler = async (files) => {
    const nextFiles = files
      .slice(0, maxFileCount ?? files.length)
      .map((file) => ({
        name: file.name,
        size: file.size,
        type: file.type,
      }));

    if (nextFiles.length === 0) return;

    writeBoundFiles(nextFiles);
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

  const writeSelectedConfig = (contents: string | null | undefined): void => {
    bindings.selected_config = contents ?? "";
  };

  return {
    bindings,
    readBoundFiles,
    writeBoundFiles,
    handleUpload,
    handleFileRejected,
    removeFile,
    writeSelectedConfig,
  };
}
