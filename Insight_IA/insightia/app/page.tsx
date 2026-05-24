import UploadBox from "@/components/UploadBox";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-zinc-800 px-8 py-6">
        <h1 className="text-2xl font-bold text-cyan-400">
          InsightIA
        </h1>

        <button className="rounded-xl bg-cyan-500 px-5 py-2 font-medium text-black transition hover:bg-cyan-400">
          Começar
        </button>
      </header>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-6 py-24 text-center">
        <h2 className="max-w-4xl text-5xl font-bold leading-tight">
          Transforme datasets em{" "}
          <span className="text-cyan-400">
            insights automáticos
          </span>{" "}
          com IA
        </h2>

        <p className="mt-6 max-w-2xl text-lg text-zinc-400">
          Faça upload de arquivos CSV ou Excel e deixe a IA analisar,
          estruturar, aplicar ETL e gerar dashboards inteligentes.
        </p>

        {/* Upload */}
        <UploadBox />
      </section>

      {/* Features */}
      <section className="grid gap-6 px-8 pb-24 md:grid-cols-3">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h3 className="text-xl font-semibold text-cyan-400">
            ETL Inteligente
          </h3>

          <p className="mt-4 text-zinc-400">
            Detecta problemas automaticamente e aplica limpeza e
            transformação nos dados.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h3 className="text-xl font-semibold text-cyan-400">
            Insights Automáticos
          </h3>

          <p className="mt-4 text-zinc-400">
            A IA encontra padrões, tendências e oportunidades
            escondidas no dataset.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h3 className="text-xl font-semibold text-cyan-400">
            Dashboard Power BI
          </h3>

          <p className="mt-4 text-zinc-400">
            Gere dashboards modernos automaticamente para análise
            empresarial.
          </p>
        </div>
      </section>
    </main>
  );
}