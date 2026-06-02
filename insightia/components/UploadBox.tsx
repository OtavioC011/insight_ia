"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

export default function UploadBox() {
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];

    if (!file) return;

    setFileName(file.name);
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
     const response = await fetch(
  process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL!,
  {
    method: "POST",
    body: formData,
  }
);
      const result = await response.text();

      console.log("Resposta do n8n:", result);

      alert("Arquivo enviado com sucesso!");
    } catch (error) {
      console.error("Erro:", error);

      alert("Erro ao enviar arquivo para o n8n");
    } finally {
      setLoading(false);
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
    multiple: false,
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

        {loading && (
          <div className="text-cyan-400 font-medium">
            Enviando arquivo...
          </div>
        )}
      </div>
    </div>
  );
}