export default function GraciasPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-background">
      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6">
        Mensaje Enviado
      </span>

      <h1 className="font-[var(--font-bebas)] text-6xl md:text-8xl tracking-tight leading-none">
        THANK
        <br />
        <span className="text-accent">YOU</span>
      </h1>

      <p className="mt-8 max-w-md font-mono text-sm text-muted-foreground leading-relaxed">
        Recibí tu mensaje correctamente.  
        Te voy a responder dentro de las próximas 24 hs.
      </p>

      <a
        href="/"
        className="mt-12 border border-border/40 px-8 py-4 font-mono text-xs uppercase tracking-widest hover:border-accent hover:text-accent transition-all duration-200"
      >
        Volver al inicio
      </a>
    </section>
  )
}