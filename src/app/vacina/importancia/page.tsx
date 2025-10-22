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
            Elas são uma das ferramentas mais eficazes e seguras da medicina moderna, fortalecendo o sistema imunológico e impedindo que vírus e bactérias se espalhem.
          </p>
        </section>

        <section className="section">
          <h3>Benefícios das vacinas</h3>
          <p>
            Além de proteger cada indivíduo, as vacinas ajudam a controlar surtos e a proteger pessoas que não podem ser vacinadas, 
            contribuindo para a chamada <strong>imunidade coletiva</strong>. Quando a maioria da população está vacinada, a circulação do agente infeccioso diminui drasticamente.
          </p>
          <ul>
            <li><strong>Prevenção de doenças graves:</strong> reduz a ocorrência de enfermidades como sarampo, tétano, poliomielite e HPV.</li>
            <li><strong>Redução de internações e mortes:</strong> menos pessoas precisam de hospitalização e há menos óbitos por doenças evitáveis.</li>
            <li><strong>Proteção indireta:</strong> protege bebês, idosos e pessoas com imunidade baixa que não podem receber certas vacinas.</li>
            <li><strong>Economia para o sistema de saúde:</strong> previne custos com tratamentos e internações, liberando recursos para outras áreas da saúde.</li>
            <li><strong>Melhoria da qualidade de vida:</strong> evita sequelas e complicações de doenças infecciosas, garantindo uma vida mais saudável.</li>
          </ul>
        </section>

        <section className="section">
          <h3>Impacto global</h3>
          <p>
            Programas de vacinação em larga escala reduziram drasticamente doenças como poliomielite, sarampo e difteria, salvando milhões de vidas em todo o mundo.
            Graças à vacinação, algumas doenças foram até erradicadas em várias regiões — como a varíola, que desapareceu globalmente em 1980.
          </p>
          <p>
            A vacinação também tem um papel essencial em situações emergenciais, como surtos e pandemias, 
            ajudando a controlar a disseminação de novos vírus e proteger populações vulneráveis.
          </p>
        </section>

        <section className="section">
          <h3>Vacinação e futuro</h3>
          <p>
            A ciência continua avançando no desenvolvimento de novas vacinas, como as que combatem o câncer e doenças autoimunes. 
            Investir em pesquisa e ampliar o acesso à vacinação são passos fundamentais para garantir um futuro mais saudável e seguro para todos.
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <p>Portal das Vacinas</p>
      </footer>
    </>
  );
}
