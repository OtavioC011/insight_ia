"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

export default function UploadBox() {
  const [fileName, setFileName] = useState("");

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];

    if (file) {
      setFileName(file.name);

      console.log("Arquivo enviado:", file);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "text/csv": [".csv"],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
        ".xlsx",
      ],
    },
  });

  return (
    <div
      {...getRootProps()}
      className={`mt-12 w-full max-w-2xl cursor-pointer rounded-3xl border-2 border-dashed p-12 text-center transition ${
        isDragActive
          ? "border-cyan-400 bg-zinc-800"
          : "border-zinc-700 bg-zinc-900"
      }`}
    >
      <input {...getInputProps()} />

      <div className="flex flex-col items-center gap-4">
        <div className="text-5xl">📂</div>

        <h3 className="text-2xl font-semibold">
          Arraste seu dataset aqui
        </h3>

        <p className="text-zinc-400">
          CSV ou XLSX
        </p>

        {fileName && (
          <div className="rounded-lg bg-cyan-500 px-4 py-2 text-black">
            {fileName}
          </div>
        )}
      </div>
    </div>
  );
}