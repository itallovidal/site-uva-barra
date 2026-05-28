function AdminDashboard() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-bold">Painel de Administração</h1>
        <p className="text-muted-foreground mt-1">Bem-vindo ao painel administrativo.</p>
      </div>

      <section>
        <h2 className="text-lg font-semibold mb-4">Últimos Artigos</h2>
        <div className="border rounded-lg p-6">
          <p className="text-muted-foreground">Nenhum artigo publicado recentemente.</p>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-4">Últimos Colaboradores</h2>
        <div className="border rounded-lg p-6">
          <p className="text-muted-foreground">Nenhum colaborador cadastrado recentemente.</p>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-4">Última Newsletter</h2>
        <div className="border rounded-lg p-6">
          <p className="text-muted-foreground">Nenhuma newsletter enviada.</p>
        </div>
      </section>
    </div>
  );
}

export { AdminDashboard };
