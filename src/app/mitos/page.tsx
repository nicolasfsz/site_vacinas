import { Shield, X, Check, AlertCircle, Lightbulb } from 'lucide-react';
import { useState } from 'react';

export default function MitosPage() {
  const [selectedCategoria, setSelectedCategoria] = useState('todos');

  const mitos = [
    {
      categoria: 'seguranca',
      mito: 'Vacinas causam autismo',
      verdade: 'MITO: Não existe nenhuma relação entre vacinas e autismo. Esse mito surgiu de um estudo fraudulento que foi desmentido e retirado da literatura científica. Milhares de estudos comprovam a segurança das vacinas.',
      importancia: 'alto'
    },
    {
      categoria: 'seguranca',
      mito: 'Vacinas contêm substâncias perigosas',
      verdade: 'MITO: As substâncias presentes nas vacinas são seguras e estão em quantidades muito pequenas. Todas são testadas rigorosamente antes de serem aprovadas.',
      importancia: 'alto'
    },
    {
      categoria: 'eficacia',
      mito: 'É melhor ter imunidade natural que pela vacina',
      verdade: 'MITO: Doenças como sarampo, poliomielite e difteria podem causar complicações graves ou morte. A vacina oferece proteção sem esses riscos.',
      importancia: 'alto'
    },
    {
      categoria: 'necessidade',
      mito: 'Não preciso vacinar porque a doença já foi erradicada',
      verdade: 'MITO: Muitas doenças foram controladas graças à vacinação. Se pararmos de vacinar, elas podem voltar. O sarampo, por exemplo, ressurgiu em diversos países.',
      importancia: 'alto'
    },
    {
      categoria: 'efeitos',
      mito: 'Vacinas sobrecarregam o sistema imunológico',
      verdade: 'MITO: O sistema imunológico consegue responder a milhares de antígenos por dia. As vacinas contêm uma quantidade muito pequena de antígenos.',
      importancia: 'medio'
    },
    {
      categoria: 'necessidade',
      mito: 'Se todos ao meu redor estão vacinados, eu não preciso',
      verdade: 'MITO PERIGOSO: Essa atitude coloca você e outras pessoas em risco. A imunidade coletiva só funciona se a maioria da população estiver vacinada.',
      importancia: 'alto'
    },
    {
      categoria: 'efeitos',
      mito: 'Vacinas dão a doença que deveriam prevenir',
      verdade: 'MITO: As vacinas não causam as doenças. Algumas podem causar sintomas leves temporários, mas isso não é a doença. São sinais de que o sistema imunológico está respondendo.',
      importancia: 'medio'
    },
    {
      categoria: 'eficacia',
      mito: 'Imunidade natural é mais duradoura que a da vacina',
      verdade: 'PARCIALMENTE MITO: Para algumas doenças isso pode ser verdade, mas o risco de complicações graves da doença não compensa. Muitas vacinas oferecem proteção duradoura e segura.',
      importancia: 'medio'
    },
    {
      categoria: 'necessidade',
      mito: 'Adultos não precisam se vacinar',
      verdade: 'MITO: Adultos também precisam manter vacinas em dia, incluindo reforços de tétano, difteria, gripe anual, entre outras.',
      importancia: 'medio'
    },
    {
      categoria: 'seguranca',
      mito: 'Vacinas causam efeitos colaterais graves',
      verdade: 'MITO: Efeitos colaterais graves são extremamente raros. A maioria das pessoas tem apenas reações leves como dor no local ou febre baixa.',
      importancia: 'alto'
    },
    {
      categoria: 'eficacia',
      mito: 'Vacinas não funcionam porque pessoas vacinadas ainda pegam a doença',
      verdade: 'MITO: Nenhuma vacina é 100% eficaz, mas elas reduzem drasticamente o risco de doença grave. Pessoas vacinadas que adoecem geralmente têm sintomas muito mais leves.',
      importancia: 'medio'
    },
    {
      categoria: 'necessidade',
      mito: 'Melhor higiene e saneamento eliminaram doenças, não vacinas',
      verdade: 'MITO: Embora higiene seja importante, vacinas foram essenciais para eliminar doenças como varíola e reduzir drasticamente poliomielite.',
      importancia: 'medio'
    }
  ];

  const categorias = [
    { id: 'todos', nome: 'Todos', cor: '#2563eb' },
    { id: 'seguranca', nome: 'Segurança', cor: '#ef4444' },
    { id: 'eficacia', nome: 'Eficácia', cor: '#10b981' },
    { id: 'necessidade', nome: 'Necessidade', cor: '#f59e0b' },
    { id: 'efeitos', nome: 'Efeitos', cor: '#8b5cf6' }
  ];

  const mitosFiltrados = selectedCategoria === 'todos' 
    ? mitos 
    : mitos.filter(m => m.categoria === selectedCategoria);

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
            <a href="#vacinas" style={{color: '#64748b', textDecoration: 'none', fontWeight: '500'}}>Vacinas</a>
            <a href="#faq" style={{color: '#2563eb', textDecoration: 'none', fontWeight: '600'}}>FAQ</a>
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
          <AlertCircle size={64} color="#2563eb" />
        </div>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          color: '#1e293b',
          marginBottom: '1rem'
        }}>
          Mitos e Verdades
        </h1>
        <p style={{
          fontSize: '1.25rem',
          color: '#64748b',
          maxWidth: '700px',
          margin: '0 auto'
        }}>
          Esclarecemos os principais mitos sobre vacinação com base em evidências científicas
        </p>
      </section>

      <section style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 2rem 3rem'
      }}>
        <div style={{
          display: 'flex',
          gap: '1rem',
          marginBottom: '2rem',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          {categorias.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategoria(cat.id)}
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '2rem',
                border: 'none',
                backgroundColor: selectedCategoria === cat.id ? cat.cor : '#ffffff',
                color: selectedCategoria === cat.id ? '#ffffff' : '#64748b',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s',
                boxShadow: selectedCategoria === cat.id 
                  ? '0 4px 6px -1px rgba(0,0,0,0.2)' 
                  : '0 1px 3px rgba(0,0,0,0.1)'
              }}
            >
              {cat.nome}
            </button>
          ))}
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '1.5rem'
        }}>
          {mitosFiltrados.map((item, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '1rem',
                padding: '1.5rem',
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
                border: '2px solid #e2e8f0',
                transition: 'transform 0.2s',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                backgroundColor: item.importancia === 'alto' ? '#ef4444' : '#f59e0b'
              }} />

              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem',
                marginBottom: '1rem'
              }}>
                <div style={{
                  backgroundColor: '#fee2e2',
                  padding: '0.5rem',
                  borderRadius: '0.5rem',
                  flexShrink: 0
                }}>
                  <X size={24} color="#ef4444" />
                </div>
                <div>
                  <div style={{
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    color: '#ef4444',
                    marginBottom: '0.25rem',
                    textTransform: 'uppercase'
                  }}>
                    Mito
                  </div>
                  <h3 style={{
                    fontSize: '1.125rem',
                    fontWeight: 'bold',
                    color: '#1e293b',
                    lineHeight: '1.4'
                  }}>
                    {item.mito}
                  </h3>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem',
                backgroundColor: '#f0fdf4',
                padding: '1rem',
                borderRadius: '0.75rem',
                border: '2px solid #10b981'
              }}>
                <div style={{
                  backgroundColor: '#d1fae5',
                  padding: '0.5rem',
                  borderRadius: '0.5rem',
                  flexShrink: 0
                }}>
                  <Check size={24} color="#10b981" />
                </div>
                <div>
                  <div style={{
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    color: '#10b981',
                    marginBottom: '0.25rem',
                    textTransform: 'uppercase'
                  }}>
                    Verdade
                  </div>
                  <p style={{
                    color: '#166534',
                    lineHeight: '1.6',
                    fontSize: '0.9375rem'
                  }}>
                    {item.verdade}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: '3rem',
          backgroundColor: '#dbeafe',
          border: '2px solid #2563eb',
          borderRadius: '1rem',
          padding: '2rem',
          display: 'flex',
          gap: '1.5rem',
          alignItems: 'flex-start'
        }}>
          <Lightbulb size={48} color="#2563eb" style={{flexShrink: 0}} />
          <div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#1e40af',
              marginBottom: '1rem'
            }}>
              Dica Importante
            </h3>
            <p style={{
              color: '#1e40af',
              lineHeight: '1.6',
              marginBottom: '0.75rem'
            }}>
              Sempre busque informações sobre vacinas em fontes confiáveis como o Ministério da Saúde, Organização Mundial da Saúde (OMS) e profissionais de saúde qualificados.
            </p>
            <p style={{
              color: '#1e40af',
              lineHeight: '1.6',
              fontWeight: '500'
            }}>
              Desconfie de informações sem fonte científica ou que apelem para o medo. A ciência comprova: vacinas salvam vidas!
            </p>
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