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
            A desinformação pode colocar vidas em risco, por isso é fundamental buscar fontes confiáveis e baseadas em evidências científicas.
          </p>
        </section>

        <section className="section">
          <h3>Mito: Vacinas causam autismo</h3>
          <p>
            <strong>Mentira:</strong> Não há nenhuma evidência científica que comprove relação entre vacinas e autismo. 
            Essa crença surgiu de um estudo falso publicado em 1998, que foi posteriormente desmentido e retirado da revista científica. 
            Desde então, dezenas de pesquisas sérias confirmaram que vacinas são seguras e não causam autismo.
          </p>
        </section>

        <section className="section">
          <h3>Mito: Só crianças precisam se vacinar</h3>
          <p>
            <strong>Mentira:</strong> Adultos também precisam manter a vacinação em dia. 
            Algumas vacinas exigem reforços ao longo da vida, e outras são específicas para certas faixas etárias ou situações (como gestantes, idosos e profissionais da saúde).
          </p>
        </section>

        <section className="section">
          <h3>Mito: Vacinas enfraquecem o sistema imunológico</h3>
          <p>
            <strong>Mentira:</strong> Na verdade, ocorre o oposto. 
            As vacinas fortalecem o sistema imunológico, “ensinando” o corpo a reconhecer e combater agentes infecciosos de forma segura, sem causar a doença.
          </p>
        </section>

        <section className="section">
          <h3>Mito: É melhor pegar a doença “de verdade” para criar imunidade</h3>
          <p>
            <strong>Mentira:</strong> Embora algumas infecções gerem imunidade natural, o risco é enorme. 
            Doenças como sarampo, poliomielite e COVID-19 podem causar sequelas graves ou até levar à morte. 
            A vacina proporciona imunidade sem expor o corpo a esses perigos.
          </p>
        </section>

        <section className="section">
          <h3>Mito: Vacinas contêm substâncias perigosas</h3>
          <p>
            <strong>Mentira:</strong> As vacinas passam por rigorosos testes de segurança antes de serem aprovadas. 
            Elas podem conter pequenas quantidades de conservantes ou estabilizantes, todos seguros e em níveis muito abaixo do que seria prejudicial. 
            A composição é constantemente monitorada por órgãos de saúde como a Anvisa e a Organização Mundial da Saúde (OMS).
          </p>
        </section>

        <section className="section">
          <h3>Mito: Quem já pegou a doença não precisa se vacinar</h3>
          <p>
            <strong>Mentira:</strong> Mesmo após contrair uma doença, a vacinação é importante. 
            Em muitos casos, a imunidade natural pode diminuir com o tempo. 
            A vacina ajuda a reforçar a proteção e evita novas infecções.
          </p>
        </section>

        <section className="section">
          <h3>Mito: As vacinas foram desenvolvidas rápido demais e não são seguras</h3>
          <p>
            <strong>Mentira:</strong> No caso de vacinas recentes, como as contra a COVID-19, 
            a rapidez se deveu ao uso de tecnologias já estudadas há anos e à colaboração global entre cientistas. 
            Todos os testes de segurança e eficácia foram cumpridos antes da liberação.
          </p>
        </section>

        <section className="section">
          <h3>Conclusão</h3>
          <p>
            Combater os mitos sobre vacinas é essencial para proteger a saúde coletiva. 
            Informações falsas espalham medo e colocam em risco o controle de doenças que já estavam erradicadas. 
            Sempre consulte profissionais de saúde e busque informações em fontes confiáveis, como o Ministério da Saúde e a OMS.
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <p>Portal das Vacinas</p>
      </footer>
    </>
  );
}
