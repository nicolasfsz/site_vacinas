import Link from "next/link";

export default function Home() {
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
          <h2>Bem-vindo ao Portal das Vacinas</h2>
          <p>
            Aqui você encontra informações detalhadas sobre vacinas: sua importância, tipos e os principais mitos.
          </p>
        </section>

        <Link href="/vacina/importancia" className="block no-underline">
          <section className="section cursor-pointer hover:bg-gray-100 transition">
            <h3>Importância das vacinas</h3>
            <p>
              As vacinas salvam milhões de vidas todos os anos, prevenindo doenças graves e ajudando no controle de epidemias.
            </p>
          </section>
        </Link>

        <Link href="/vacina/tipos" className="block">
          <section className="section cursor-pointer hover:bg-gray-100 transition">
            <h3>Calendário</h3>
            <p>
              Veja todas as vacinas recomendadas de acordo com a idade da pessoa.
            </p>
          </section>
        </Link>

        <Link href="/vacina/mitos" className="block">
          <section className="section cursor-pointer hover:bg-gray-100 transition">
            <h3>Mitos e verdades</h3>
            <p>
              Descubra os principais mitos sobre vacinas e a verdade por trás de cada um deles.
            </p>
          </section>
        </Link>
      </main>

      <footer className="site-footer">
        <p>© 2025 Portal das Vacinas. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}
