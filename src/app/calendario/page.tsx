import { Shield, Calendar, Baby, User, Users, Heart, Check } from 'lucide-react';
import { useState } from 'react';

export default function CalendarioPage() {
  const [selectedAge, setSelectedAge] = useState('bebe');

  const bebeData = [
    { idade: 'Ao nascer', vacinas: ['BCG', 'Hepatite B'] },
    { idade: '2 meses', vacinas: ['Pentavalente', 'VIP', 'Pneumocócica 10', 'Rotavírus'] },
    { idade: '3 meses', vacinas: ['Meningocócica C'] },
    { idade: '4 meses', vacinas: ['Pentavalente', 'VIP', 'Pneumocócica 10', 'Rotavírus'] },
    { idade: '5 meses', vacinas: ['Meningocócica C'] },
    { idade: '6 meses', vacinas: ['Pentavalente', 'VIP'] },
    { idade: '9 meses', vacinas: ['Febre Amarela'] },
    { idade: '12 meses', vacinas: ['Tríplice viral', 'Pneumocócica 10', 'Meningocócica C'] }
  ];

  const criancaData = [
    { idade: '15 meses', vacinas: ['DTP', 'VOP', 'Hepatite A', 'Tetra viral'] },
    { idade: '4 anos', vacinas: ['DTP', 'VOP', 'Varicela'] },
    { idade: '9-14 anos', vacinas: ['HPV (2 doses)', 'Meningocócica ACWY'] }
  ];

  const adolescenteData = [
    { idade: '10-19 anos', vacinas: ['Hepatite B', 'Febre Amarela', 'Tríplice viral', 'dT (reforço)'] },
    { idade: 'Meninas 9-14 anos', vacinas: ['HPV'] },
    { idade: 'Meninos 11-14 anos', vacinas: ['HPV'] }
  ];

  const adultoData = [
    { idade: '20-59 anos', vacinas: ['Hepatite B', 'Febre Amarela', 'Tríplice viral', 'dT (a cada 10 anos)'] },
    { idade: 'Gestantes', vacinas: ['dTpa', 'Hepatite B', 'Influenza'] }
  ];

  const idosoData = [
    { idade: '60+ anos', vacinas: ['Influenza (anual)', 'Pneumocócica 23', 'Hepatite B', 'Febre Amarela', 'dT (reforço)'] },
    { idade: '65+ anos', vacinas: ['Herpes Zóster'] }
  ];

  let currentData = bebeData;
  let currentTitle = 'Bebês (0-2 anos)';

  if (selectedAge === 'bebe') {
    currentData = bebeData;
    currentTitle = 'Bebês (0-2 anos)';
  } else if (selectedAge === 'crianca') {
    currentData = criancaData;
    currentTitle = 'Crianças (2-9 anos)';
  } else if (selectedAge === 'adolescente') {
    currentData = adolescenteData;
    currentTitle = 'Adolescentes (10-19 anos)';
  } else if (selectedAge === 'adulto') {
    currentData = adultoData;
    currentTitle = 'Adultos (20-59 anos)';
  } else if (selectedAge === 'idoso') {
    currentData = idosoData;
    currentTitle = 'Idosos (60+ anos)';
  }

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
            <a href="#calendario" style={{color: '#2563eb', textDecoration: 'none', fontWeight: '600'}}>Calendário</a>
            <a href="#vacinas" style={{color: '#64748b', textDecoration: 'none', fontWeight: '500'}}>Vacinas</a>
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
          <Calendar size={64} color="#2563eb" />
        </div>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          color: '#1e293b',
          marginBottom: '1rem'
        }}>
          Calendário Vacinal
        </h1>
        <p style={{
          fontSize: '1.25rem',
          color: '#64748b',
          maxWidth: '700px',
          margin: '0 auto'
        }}>
          Confira o calendário completo de vacinação do Ministério da Saúde e mantenha sua família protegida
        </p>
      </section>

      <section style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '2rem 2rem 3rem'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1rem',
          marginBottom: '3rem'
        }}>
          <button
            onClick={() => setSelectedAge('bebe')}
            style={{
              backgroundColor: selectedAge === 'bebe' ? '#2563eb' : '#ffffff',
              color: selectedAge === 'bebe' ? '#ffffff' : '#1e293b',
              padding: '1.5rem 1rem',
              borderRadius: '1rem',
              border: selectedAge === 'bebe' ? 'none' : '2px solid #e2e8f0',
              cursor: 'pointer',
              transition: 'all 0.3s',
              boxShadow: selectedAge === 'bebe' ? '0 4px 6px -1px rgba(37,99,235,0.3)' : '0 1px 3px rgba(0,0,0,0.1)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Baby size={32} style={{marginBottom: '0.5rem'}} />
            <div style={{fontWeight: 'bold', marginBottom: '0.25rem'}}>Bebês</div>
            <div style={{fontSize: '0.875rem', opacity: 0.8}}>0-2 anos</div>
          </button>

          <button
            onClick={() => setSelectedAge('crianca')}
            style={{
              backgroundColor: selectedAge === 'crianca' ? '#2563eb' : '#ffffff',
              color: selectedAge === 'crianca' ? '#ffffff' : '#1e293b',
              padding: '1.5rem 1rem',
              borderRadius: '1rem',
              border: selectedAge === 'crianca' ? 'none' : '2px solid #e2e8f0',
              cursor: 'pointer',
              transition: 'all 0.3s',
              boxShadow: selectedAge === 'crianca' ? '0 4px 6px -1px rgba(37,99,235,0.3)' : '0 1px 3px rgba(0,0,0,0.1)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Users size={32} style={{marginBottom: '0.5rem'}} />
            <div style={{fontWeight: 'bold', marginBottom: '0.25rem'}}>Crianças</div>
            <div style={{fontSize: '0.875rem', opacity: 0.8}}>2-9 anos</div>
          </button>

          <button
            onClick={() => setSelectedAge('adolescente')}
            style={{
              backgroundColor: selectedAge === 'adolescente' ? '#2563eb' : '#ffffff',
              color: selectedAge === 'adolescente' ? '#ffffff' : '#1e293b',
              padding: '1.5rem 1rem',
              borderRadius: '1rem',
              border: selectedAge === 'adolescente' ? 'none' : '2px solid #e2e8f0',
              cursor: 'pointer',
              transition: 'all 0.3s',
              boxShadow: selectedAge === 'adolescente' ? '0 4px 6px -1px rgba(37,99,235,0.3)' : '0 1px 3px rgba(0,0,0,0.1)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <User size={32} style={{marginBottom: '0.5rem'}} />
            <div style={{fontWeight: 'bold', marginBottom: '0.25rem'}}>Adolescentes</div>
            <div style={{fontSize: '0.875rem', opacity: 0.8}}>10-19 anos</div>
          </button>

          <button
            onClick={() => setSelectedAge('adulto')}
            style={{
              backgroundColor: selectedAge === 'adulto' ? '#2563eb' : '#ffffff',
              color: selectedAge === 'adulto' ? '#ffffff' : '#1e293b',
              padding: '1.5rem 1rem',
              borderRadius: '1rem',
              border: selectedAge === 'adulto' ? 'none' : '2px solid #e2e8f0',
              cursor: 'pointer',
              transition: 'all 0.3s',
              boxShadow: selectedAge === 'adulto' ? '0 4px 6px -1px rgba(37,99,235,0.3)' : '0 1px 3px rgba(0,0,0,0.1)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Heart size={32} style={{marginBottom: '0.5rem'}} />
            <div style={{fontWeight: 'bold', marginBottom: '0.25rem'}}>Adultos</div>
            <div style={{fontSize: '0.875rem', opacity: 0.8}}>20-59 anos</div>
          </button>

          <button
            onClick={() => setSelectedAge('idoso')}
            style={{
              backgroundColor: selectedAge === 'idoso' ? '#2563eb' : '#ffffff',
              color: selectedAge === 'idoso' ? '#ffffff' : '#1e293b',
              padding: '1.5rem 1rem',
              borderRadius: '1rem',
              border: selectedAge === 'idoso' ? 'none' : '2px solid #e2e8f0',
              cursor: 'pointer',
              transition: 'all 0.3s',
              boxShadow: selectedAge === 'idoso' ? '0 4px 6px -1px rgba(37,99,235,0.3)' : '0 1px 3px rgba(0,0,0,0.1)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Shield size={32} style={{marginBottom: '0.5rem'}} />
            <div style={{fontWeight: 'bold', marginBottom: '0.25rem'}}>Idosos</div>
            <div style={{fontSize: '0.875rem', opacity: 0.8}}>60+ anos</div>
          </button>
        </div>

        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '1rem',
          padding: '2rem',
          boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#1e293b',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <Check size={28} color="#10b981" />
            {currentTitle}
          </h2>
          
          <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            {currentData.map((item, idx) => (
              <div key={idx} style={{
                padding: '1.5rem',
                borderRadius: '0.75rem',
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0'
              }}>
                <div style={{
                  fontSize: '1.125rem',
                  fontWeight: 'bold',
                  color: '#2563eb',
                  marginBottom: '0.75rem'
                }}>
                  {item.idade}
                </div>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem'
                }}>
                  {item.vacinas.map((vacina, vIdx) => (
                    <span key={vIdx} style={{
                      backgroundColor: '#dbeafe',
                      color: '#1e40af',
                      padding: '0.5rem 1rem',
                      borderRadius: '2rem',
                      fontSize: '0.875rem',
                      fontWeight: '500'
                    }}>
                      {vacina}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          marginTop: '2rem',
          backgroundColor: '#fef3c7',
          border: '2px solid #fbbf24',
          borderRadius: '1rem',
          padding: '1.5rem',
          display: 'flex',
          gap: '1rem'
        }}>
          <div style={{fontSize: '1.5rem'}}>💡</div>
          <div>
            <div style={{fontWeight: 'bold', color: '#92400e', marginBottom: '0.5rem'}}>
              Importante
            </div>
            <div style={{color: '#78350f', lineHeight: '1.6'}}>
              Este calendário é baseado nas recomendações do Ministério da Saúde. Consulte sempre um profissional de saúde para orientações personalizadas. Leve sempre a caderneta de vacinação nos postos de saúde.
            </div>
          </div>
        </div>
      </section>

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