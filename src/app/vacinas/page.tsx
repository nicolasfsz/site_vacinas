import { Shield, Syringe, Search, Info, AlertCircle, X } from 'lucide-react';
import { useState } from 'react';

export default function VacinasPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalNome, setModalNome] = useState('');
  const [modalDescricao, setModalDescricao] = useState('');
  const [modalQuando, setModalQuando] = useState('');
  const [modalEfeitos, setModalEfeitos] = useState('');
  const [modalCor, setModalCor] = useState('#2563eb');

  const vacinas = [
    {
      nome: 'BCG',
      descricao: 'Protege contra formas graves de tuberculose',
      quando: 'Dose única ao nascer',
      efeitos: 'Vermelhidão local, pequena úlcera que cicatriza em semanas',
      cor: '#3b82f6'
    },
    {
      nome: 'Hepatite B',
      descricao: 'Previne a hepatite B, doença que afeta o fígado',
      quando: 'Ao nascer, 2, 4 e 6 meses',
      efeitos: 'Dor e vermelhidão no local da aplicação',
      cor: '#8b5cf6'
    },
    {
      nome: 'Pentavalente',
      descricao: 'Protege contra difteria, tétano, coqueluche, Haemophilus influenzae tipo b e hepatite B',
      quando: '2, 4 e 6 meses',
      efeitos: 'Febre baixa, dor e inchaço no local',
      cor: '#ec4899'
    },
    {
      nome: 'VIP/VOP (Pólio)',
      descricao: 'Previne a poliomielite (paralisia infantil)',
      quando: '2, 4, 6 meses e reforços',
      efeitos: 'Geralmente bem tolerada, raramente febre',
      cor: '#10b981'
    },
    {
      nome: 'Pneumocócica 10',
      descricao: 'Protege contra pneumonia, meningite e otite causadas pelo pneumococo',
      quando: '2, 4 e 12 meses',
      efeitos: 'Dor local, irritabilidade, febre baixa',
      cor: '#f59e0b'
    },
    {
      nome: 'Rotavírus',
      descricao: 'Previne gastroenterite causada pelo rotavírus',
      quando: '2 e 4 meses (oral)',
      efeitos: 'Raramente diarreia leve e irritabilidade',
      cor: '#06b6d4'
    },
    {
      nome: 'Meningocócica C',
      descricao: 'Protege contra meningite meningocócica tipo C',
      quando: '3, 5 e 12 meses',
      efeitos: 'Dor local, febre, irritabilidade',
      cor: '#ef4444'
    },
    {
      nome: 'Febre Amarela',
      descricao: 'Previne a febre amarela, doença grave transmitida por mosquitos',
      quando: '9 meses e reforço aos 4 anos',
      efeitos: 'Dor local, febre baixa, dor de cabeça',
      cor: '#eab308'
    },
    {
      nome: 'Tríplice Viral',
      descricao: 'Protege contra sarampo, caxumba e rubéola',
      quando: '12 meses e 15 meses',
      efeitos: 'Febre, manchas vermelhas leves',
      cor: '#d946ef'
    },
    {
      nome: 'HPV',
      descricao: 'Previne o papilomavírus humano e câncer de colo do útero',
      quando: 'Meninas e meninos de 9-14 anos (2 doses)',
      efeitos: 'Dor no local, tontura passageira',
      cor: '#84cc16'
    },
    {
      nome: 'Influenza',
      descricao: 'Protege contra a gripe',
      quando: 'Anual para grupos prioritários',
      efeitos: 'Dor local, febre baixa',
      cor: '#14b8a6'
    },
    {
      nome: 'COVID-19',
      descricao: 'Previne formas graves da COVID-19',
      quando: 'Conforme orientação do Ministério da Saúde',
      efeitos: 'Dor local, fadiga, febre baixa',
      cor: '#6366f1'
    }
  ];

  const filteredVacinas = vacinas.filter(v => {
    const searchLower = searchTerm.toLowerCase();
    return v.nome.toLowerCase().includes(searchLower) || v.descricao.toLowerCase().includes(searchLower);
  });

  

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #e0f2fe 0%, #ffffff 50%, #dcfce7 100%)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <header style={{
        backgroundColor: '#ffffff',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 50
      }}>
        <nav style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '1rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
            <Shield size={32} color="#2563eb" />
            <span style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#1e293b'}}>VacinaBrasil</span>
          </div>
          <div style={{display: 'flex', gap: '2rem'}}>
            <a href="#home" style={{color: '#64748b', textDecoration: 'none', fontWeight: '500'}}>Início</a>
            <a href="#calendario" style={{color: '#64748b', textDecoration: 'none', fontWeight: '500'}}>Calendário</a>
            <a href="#vacinas" style={{color: '#2563eb', textDecoration: 'none', fontWeight: '600'}}>Vacinas</a>
            <a href="#faq" style={{color: '#64748b', textDecoration: 'none', fontWeight: '500'}}>FAQ</a>
          </div>
        </nav>
      </header>

      <section style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '3rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{margin: '0 auto 1.5rem', display: 'flex', justifyContent: 'center'}}>
          <Syringe size={64} color="#2563eb" />
        </div>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          color: '#1e293b',
          marginBottom: '1rem'
        }}>
          Conheça as Vacinas
        </h1>
        <p style={{
          fontSize: '1.25rem',
          color: '#64748b',
          maxWidth: '700px',
          margin: '0 auto 2rem'
        }}>
          Informações completas sobre as principais vacinas disponíveis no Brasil
        </p>

        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
          position: 'relative'
        }}>
          <Search style={{
            position: 'absolute',
            left: '1rem',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#64748b',
            pointerEvents: 'none'
          }} size={20} />
          <input
            type="text"
            placeholder="Buscar vacina..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '1rem 1rem 1rem 3rem',
              borderRadius: '0.75rem',
              border: '2px solid #e2e8f0',
              fontSize: '1rem',
              outline: 'none',
              boxSizing: 'border-box'
            }}
          />
        </div>
      </section>

      <section style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 2rem 3rem'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.5rem'
        }}>
          {filteredVacinas.map((vacina, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '1rem',
                padding: '1.5rem',
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s',
                border: '3px solid ' + vacina.cor,
                borderLeft: '8px solid ' + vacina.cor
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.1)';
              }}
            >
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: vacina.cor,
                marginBottom: '0.75rem'
              }}>
                {vacina.nome}
              </h3>
              <p style={{
                color: '#64748b',
                lineHeight: '1.6',
                marginBottom: '1rem'
              }}>
                {vacina.descricao}
              </p>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#2563eb',
                fontSize: '0.875rem',
                fontWeight: '500'
              }}>
                <Info size={16} />
                Clique para mais detalhes
              </div>
            </div>
          ))}
        </div>

        {filteredVacinas.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '3rem',
            color: '#64748b'
          }}>
            <AlertCircle size={48} style={{margin: '0 auto 1rem'}} />
            <p style={{fontSize: '1.25rem'}}>Nenhuma vacina encontrada</p>
          </div>
        )}
      </section>

      {modalOpen && (
        <div
          onClick={closeModal}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            zIndex: 100
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '1.5rem',
              padding: '2.5rem',
              maxWidth: '600px',
              width: '100%',
              maxHeight: '80vh',
              overflow: 'auto',
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
              border: '4px solid ' + modalCor,
              position: 'relative'
            }}
          >
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.5rem',
                borderRadius: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <X size={24} color="#64748b" />
            </button>

            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: modalCor,
              marginBottom: '1.5rem',
              paddingRight: '2rem'
            }}>
              {modalNome}
            </h2>
            
            <div style={{marginBottom: '1.5rem'}}>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: 'bold',
                color: '#1e293b',
                marginBottom: '0.5rem'
              }}>
                O que previne?
              </h3>
              <p style={{color: '#64748b', lineHeight: '1.6'}}>
                {modalDescricao}
              </p>
            </div>

            <div style={{marginBottom: '1.5rem'}}>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: 'bold',
                color: '#1e293b',
                marginBottom: '0.5rem'
              }}>
                Quando tomar?
              </h3>
              <p style={{color: '#64748b', lineHeight: '1.6'}}>
                {modalQuando}
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: 'bold',
                color: '#1e293b',
                marginBottom: '0.5rem'
              }}>
                Possíveis efeitos colaterais
              </h3>
              <p style={{color: '#64748b', lineHeight: '1.6'}}>
                {modalEfeitos}
              </p>
            </div>

            <button
              onClick={closeModal}
              style={{
                width: '100%',
                padding: '1rem',
                backgroundColor: modalCor,
                color: '#ffffff',
                borderRadius: '0.75rem',
                border: 'none',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      <footer style={{backgroundColor: '#1e293b', color: '#ffffff', padding: '3rem 2rem', marginTop: '3rem'}}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem'}}>
            <Shield size={24} />
            <span style={{fontSize: '1.25rem', fontWeight: 'bold'}}>VacinaBrasil</span>
          </div>
          <p style={{color: '#94a3b8'}}>
            &copy; 2025 VacinaBrasil. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}