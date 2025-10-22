import Link from "next/link";

const calendario = [
  { 
    idade: "Nascimento", 
    vacinas: [
      { nome: "BCG", protecao: "Previne formas graves de tuberculose", doses: "1 dose", observacoes: "Aplicar logo após o nascimento" },
      { nome: "Hepatite B (1ª dose)", protecao: "Previne Hepatite B", doses: "1 dose", observacoes: "Aplicar nas primeiras 12 horas de vida" }
    ] 
  },
  { 
    idade: "2 meses", 
    vacinas: [
      { nome: "DTP (1ª dose)", protecao: "Previne Difteria, Tétano e Coqueluche", doses: "1ª dose de 3", observacoes: "Aplicar via intramuscular" },
      { nome: "Hib (1ª dose)", protecao: "Previne infecções por Haemophilus influenzae tipo b", doses: "1ª dose de 3", observacoes: "Via intramuscular" },
      { nome: "Poliomielite (1ª dose)", protecao: "Previne poliomielite", doses: "1ª dose de 3", observacoes: "Oral ou injetável conforme protocolo" },
      { nome: "Rotavírus (1ª dose)", protecao: "Previne gastroenterite por rotavírus", doses: "1ª dose de 2 ou 3", observacoes: "Administrar via oral" }
    ] 
  },
  { 
    idade: "4 meses", 
    vacinas: [
      { nome: "DTP (2ª dose)", protecao: "Previne Difteria, Tétano e Coqueluche", doses: "2ª dose de 3", observacoes: "Via intramuscular" },
      { nome: "Hib (2ª dose)", protecao: "Previne infecções por Hib", doses: "2ª dose de 3", observacoes: "Via intramuscular" },
      { nome: "Poliomielite (2ª dose)", protecao: "Previne poliomielite", doses: "2ª dose de 3", observacoes: "Oral ou injetável" },
      { nome: "Rotavírus (2ª dose)", protecao: "Previne gastroenterite por rotavírus", doses: "2ª dose de 2 ou 3", observacoes: "Via oral" }
    ] 
  },
  { 
    idade: "6 meses", 
    vacinas: [
      { nome: "Hepatite B (2ª dose)", protecao: "Previne Hepatite B", doses: "2ª dose de 3", observacoes: "Via intramuscular" },
      { nome: "DTP (3ª dose)", protecao: "Previne Difteria, Tétano e Coqueluche", doses: "3ª dose de 3", observacoes: "Via intramuscular" },
      { nome: "Poliomielite (3ª dose)", protecao: "Previne poliomielite", doses: "3ª dose de 3", observacoes: "Oral ou injetável" },
      { nome: "Influenza", protecao: "Previne gripe sazonal", doses: "1 dose anual", observacoes: "Campanha nacional de vacinação" }
    ] 
  },
  { 
    idade: "12 meses", 
    vacinas: [
      { nome: "Tríplice viral", protecao: "Previne Sarampo, Caxumba e Rubéola", doses: "1ª dose", observacoes: "Via subcutânea" },
      { nome: "Varicela", protecao: "Previne Catapora", doses: "1ª dose", observacoes: "Via subcutânea" },
      { nome: "Pneumocócica 10V", protecao: "Previne pneumonia, otite e meningite pneumocócica", doses: "Ref. 1", observacoes: "Reforço aos 12 meses" }
    ] 
  },
  { 
    idade: "15 meses", 
    vacinas: [
      { nome: "DTP (reforço)", protecao: "Previne Difteria, Tétano e Coqueluche", doses: "Ref. 1", observacoes: "Via intramuscular" },
      { nome: "Hib (reforço)", protecao: "Previne infecções graves por Hib", doses: "Ref. 1", observacoes: "Via intramuscular" },
      { nome: "Hepatite A", protecao: "Previne Hepatite A", doses: "1 dose", observacoes: "Dose única aos 15 meses" }
    ] 
  },
  { 
    idade: "4-5 anos", 
    vacinas: [
      { nome: "DTP (reforço)", protecao: "Previne Difteria, Tétano e Coqueluche", doses: "Ref. 2", observacoes: "Via intramuscular" },
      { nome: "Poliomielite (reforço)", protecao: "Previne poliomielite", doses: "Ref. 2", observacoes: "Oral ou injetável" },
      { nome: "Tríplice viral (reforço)", protecao: "Previne Sarampo, Caxumba e Rubéola", doses: "2ª dose", observacoes: "Via subcutânea" },
      { nome: "Varicela (reforço)", protecao: "Previne Catapora", doses: "2ª dose", observacoes: "Via subcutânea" }
    ] 
  },
  { 
    idade: "Adolescência (11-18 anos)", 
    vacinas: [
      { nome: "HPV", protecao: "Previne câncer de colo de útero e verrugas genitais", doses: "2 doses", observacoes: "Administrar preferencialmente aos 11-12 anos" },
      { nome: "dT (reforço)", protecao: "Reforço contra Difteria e Tétano", doses: "1 dose a cada 10 anos", observacoes: "Via intramuscular" },
      { nome: "Meningocócica ACWY", protecao: "Previne meningite causada por meningococo", doses: "1 dose", observacoes: "Reforço conforme protocolo local" }
    ] 
  },
  { 
    idade: "Gestantes", 
    vacinas: [
      { nome: "dTpa", protecao: "Protege mãe e bebê contra coqueluche, difteria e tétano", doses: "1 dose a cada gestação", observacoes: "Preferencialmente entre 27 e 36 semanas" },
      { nome: "Influenza", protecao: "Previne gripe e complicações respiratórias", doses: "1 dose anual", observacoes: "Importante durante toda a gravidez" }
    ] 
  },
  { 
    idade: "Adultos (19+ anos)", 
    vacinas: [
      { nome: "dT ou Tdap", protecao: "Protege contra Difteria, Tétano e Coqueluche", doses: "Reforço a cada 10 anos", observacoes: "Via intramuscular" },
      { nome: "Influenza", protecao: "Previne gripe sazonal", doses: "1 dose anual", observacoes: "Administrar todo ano" },
      { nome: "Hepatite B", protecao: "Previne Hepatite B", doses: "Esquema de 3 doses", observacoes: "Caso não tenha completado na infância" }
    ] 
  },
  { 
    idade: "Idosos (60+ anos)", 
    vacinas: [
      { nome: "Influenza", protecao: "Previne gripe e complicações graves", doses: "1 dose anual", observacoes: "Campanhas anuais específicas" },
      { nome: "Pneumocócica 23V", protecao: "Previne pneumonia e meningite pneumocócica", doses: "1 dose", observacoes: "Conforme orientação médica" },
      { nome: "Herpes Zóster", protecao: "Previne reativação do vírus da catapora", doses: "2 doses", observacoes: "Disponível em clínicas privadas" }
    ] 
  }
];

export default function CalendarioVacinas() {
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
          <h2>Calendário de Vacinação</h2>
          <p>
            O calendário nacional de vacinação é uma ferramenta essencial para garantir a proteção em todas as fases da vida. 
            Manter as vacinas em dia previne doenças graves e evita o ressurgimento de epidemias já controladas.
          </p>
          <p>
            Confira abaixo as vacinas recomendadas por faixa etária e público-alvo. 
            Sempre verifique sua <strong>caderneta de vacinação</strong> e atualize as doses pendentes em uma unidade de saúde.
          </p>
        </section>

        <section className="calendario">
          {calendario.map((item) => (
            <div key={item.idade} className="calendario-item">
              <h3>{item.idade}</h3>
              <ul>
                {item.vacinas.map((vacina, idx) => (
                  <li key={idx}>
                    <strong>{vacina.nome}</strong> — {vacina.protecao} <br />
                    <em>Doses:</em> {vacina.doses} <br />
                    <em>Observações:</em> {vacina.observacoes}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      

      </main>

      <footer className="site-footer">
        <p>Portal das Vacinas</p>
      </footer>
    </>
  );
}
