import Link from "next/link";

export default function MitosVacinas() {
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
          <h2>Mitos e verdades sobre vacinas</h2>
          <p>
            Descubra os principais mitos sobre vacinas e a verdade por trás de cada um deles.
          </p>
        </section>

        <section className="section">
          <h3>Mito: Vacinas causam autismo</h3>
          <p>Mentira: Não há evidências científicas que comprovem qualquer relação entre vacinas e autismo.</p>
        </section>

        <section className="section">
          <h3>Mito: Só crianças precisam se vacinar</h3>
          <p>Mentira: Adultos também necessitam de reforços e vacinas de acordo com a idade e fatores de risco.</p>
        </section>

        <section className="section">
          <h3>Mito: Vacinas enfraquecem o sistema imunológico</h3>
          <p>Menrira: As vacinas fortalecem o sistema imunológico, preparando-o para reconhecer e combater doenças.</p>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2025 Portal das Vacinas. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}