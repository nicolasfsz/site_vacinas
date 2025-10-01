import Link from "next/link";

export default function ImportanciaVacinas() {
  return (
    <>
      <header className="topbar">
        <div className="topbar-container">
          <h1 className="logo">Portal das Vacinas</h1>
          <nav className="nav-links">
          <Link href="/">Home</Link>
            <Link href="/vacina/importancia">Importância</Link>
            <Link href="/vacina/tipos">Calendário</Link>
            <Link href="/vacina/mitos">Mitos</Link>
          </nav>
        </div>
      </header>

      <main className="main-content">
        <section className="hero">
          <h2>Por que as vacinas são importantes?</h2>
          <p>
            As vacinas salvam milhões de vidas por ano, prevenindo doenças graves e ajudando no controle de epidemias.
          </p>
        </section>

        <section className="section">
          <h3>Benefícios das vacinas</h3>
          <p>
            Além de proteger cada indivíduo, vacinas ajudam a controlar surtos e a proteger pessoas que não podem ser vacinadas, contribuindo para a imunidade coletiva.
          </p>
        </section>

        <section className="section">
          <h3>Impacto global</h3>
          <p>
            Programas de vacinação em larga escala reduziram drasticamente doenças como poliomielite, sarampo e difteria, salvando milhões de vidas em todo o mundo.
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2025 Portal das Vacinas. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}