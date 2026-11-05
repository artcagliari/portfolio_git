const NotFound = () => (
  <main className="flex min-h-screen items-center justify-center px-5">
    <div className="glass rounded-[1.75rem] px-10 py-12 text-center">
      <p className="eyebrow">Erro 404</p>
      <h1 className="mt-4 text-3xl font-medium tracking-[-0.03em] sm:text-4xl">Página não encontrada</h1>
      <a href="/" className="button-light mt-8">
        Voltar para o início
      </a>
    </div>
  </main>
);

export default NotFound;
