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
      { nome: "Poliomielite (3ª dose)", protecao: "Previne poliomielite", doses: "3ª dose de 3", observacoes: "Oral ou injetável" }
    ] 
  },
  { 
    idade: "12 meses", 
    vacinas: [
      { nome: "Tríplice viral", protecao: "Previne Sarampo, Caxumba e Rubéola", doses: "1ª dose", observacoes: "Via subcutânea" },
      { nome: "Varicela", protecao: "Previne Catapora", doses: "1ª dose", observacoes: "Via subcutânea" }
    ] 
  },
  { 
    idade: "15 meses", 
    vacinas: [
      { nome: "DTP (reforço)", protecao: "Previne Difteria, Tétano e Coqueluche", doses: "Ref. 1", observacoes: "Via intramuscular" },
      { nome: "Hib (reforço)", protecao: "Previne infecções graves por Hib", doses: "Ref. 1", observacoes: "Via intramuscular" }
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
    idade: "6-10 anos", 
    vacinas: [
      { nome: "Hepatite A", protecao: "Previne Hepatite A", doses: "2 doses", observacoes: "Segunda dose 6 meses após a primeira" },
      { nome: "DTP (reforço)", protecao: "Reforço contra Difteria, Tétano e Coqueluche", doses: "Ref. 3", observacoes: "Via intramuscular" },
      { nome: "Poliomielite (reforço)", protecao: "Previne poliomielite", doses: "Ref. 3", observacoes: "Oral ou injetável" }
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
    idade: "Adultos (19+ anos)", 
    vacinas: [
      { nome: "dT ou Tdap", protecao: "Protege contra Difteria, Tétano e Coqueluche", doses: "Reforço a cada 10 anos", observacoes: "Via intramuscular" },
      { nome: "Influenza", protecao: "Previne gripe sazonal", doses: "1 dose anual", observacoes: "Administrar todo ano" },
      { nome: "Hepatite B", protecao: "Previne Hepatite B", doses: "Conforme esquema não completado na infância", observacoes: "Via intramuscular" }
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
          <p>Confira as vacinas recomendadas de acordo com a idade da criança.</p>
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
        <p>© 2025 Portal das Vacinas. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}