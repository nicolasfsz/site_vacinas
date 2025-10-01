import { useState } from 'react';
import { Shield, Syringe, Calendar, Users, ArrowRight, Heart } from 'lucide-react';
import Link from "next/link";



export default function HomePage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #e0f2fe 0%, #ffffff 50%, #dcfce7 100%)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Header */}
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
            <span style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#1e293b'}}>Vacinas</span>
          </div>
          <div style={{display: 'flex', gap: '2rem'}}>
            <Link href="./calendario/page.tsx" style={{color: '#2563eb', textDecoration: 'none', fontWeight: '600'}}>Home</Link>
            <Link href="/calendario" style={{color: '#64748b', textDecoration: 'none', fontWeight: '500'}}>Calendário</Link>
            <Link href="/vacinas" style={{color: '#64748b', textDecoration: 'none', fontWeight: '500'}}>Vacinas</Link>
            <Link href="/mitos" style={{color: '#64748b', textDecoration: 'none', fontWeight: '500'}}>Mitos</Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={{maxWidth: '1280px', margin: '0 auto', padding: '5rem 2rem'}}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          alignItems: 'center'
        }}>
          <div>
            <h1 style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              color: '#1e293b',
              marginBottom: '1.5rem',
              lineHeight: '1.2'
            }}>
              Proteja sua família com a <span style={{color: '#2563eb'}}>vacinação</span>
            </h1>
            <p style={{
              fontSize: '1.25rem',
              color: '#64748b',
              marginBottom: '2rem',
              lineHeight: '1.6'
            }}>
              As vacinas são uma das formas mais eficazes de prevenção contra doenças graves. Mantenha seu calendário vacinal em dia e proteja quem você ama.
            </p>
            <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
              <button style={{
                backgroundColor: '#2563eb',
                color: '#ffffff',
                padding: '1rem 2rem',
                borderRadius: '0.5rem',
                fontWeight: '600',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                Ver Calendário
                <ArrowRight size={20} />
              </button>
              <button style={{
                backgroundColor: 'transparent',
                color: '#2563eb',
                padding: '1rem 2rem',
                borderRadius: '0.5rem',
                fontWeight: '600',
                border: '2px solid #2563eb',
                cursor: 'pointer'
              }}>
                Saiba Mais
              </button>
            </div>
          </div>
          <div style={{position: 'relative'}}>
            <div style={{
              background: 'linear-gradient(135deg, #60a5fa 0%, #34d399 100%)',
              borderRadius: '1.5rem',
              padding: '2rem',
              boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)',
              transform: 'rotate(3deg)'
            }}>
              <div style={{
                backgroundColor: '#ffffff',
                borderRadius: '1rem',
                padding: '2rem',
                transform: 'rotate(-3deg)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Syringe size={128} color="#2563eb" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{backgroundColor: '#2563eb', color: '#ffffff', padding: '4rem 2rem'}}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          textAlign: 'center'
        }}>
          <div>
            <div style={{fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>150M+</div>
            <div style={{color: '#bfdbfe', fontSize: '0.95rem'}}>Doses aplicadas</div>
          </div>
          <div>
            <div style={{fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>20+</div>
            <div style={{color: '#bfdbfe', fontSize: '0.95rem'}}>Vacinas disponíveis</div>
          </div>
          <div>
            <div style={{fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>98%</div>
            <div style={{color: '#bfdbfe', fontSize: '0.95rem'}}>Taxa de eficácia</div>
          </div>
          <div>
            <div style={{fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>30K+</div>
            <div style={{color: '#bfdbfe', fontSize: '0.95rem'}}>Postos de saúde</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{maxWidth: '1280px', margin: '0 auto', padding: '5rem 2rem'}}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          textAlign: 'center',
          color: '#1e293b',
          marginBottom: '1rem'
        }}>
          Por que vacinar?
        </h2>
        <p style={{
          textAlign: 'center',
          color: '#64748b',
          marginBottom: '4rem',
          maxWidth: '600px',
          margin: '0 auto 4rem'
        }}>
          A vacinação salva milhões de vidas todos os anos e é essencial para a saúde pública
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          <div style={{
            backgroundColor: '#ffffff',
            padding: '2rem',
            borderRadius: '1rem',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
          }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: '#dbeafe',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem'
            }}>
              <Shield size={32} color="#2563eb" />
            </div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#1e293b',
              marginBottom: '1rem'
            }}>
              Proteção Individual
            </h3>
            <p style={{color: '#64748b', lineHeight: '1.6'}}>
              As vacinas protegem você contra doenças graves que podem causar complicações sérias ou até mesmo a morte.
            </p>
          </div>

          <div style={{
            backgroundColor: '#ffffff',
            padding: '2rem',
            borderRadius: '1rem',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
          }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: '#d1fae5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem'
            }}>
              <Users size={32} color="#10b981" />
            </div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#1e293b',
              marginBottom: '1rem'
            }}>
              Imunidade Coletiva
            </h3>
            <p style={{color: '#64748b', lineHeight: '1.6'}}>
              Quando muitas pessoas são vacinadas, protegemos também quem não pode se vacinar, como bebês e imunodeprimidos.
            </p>
          </div>

          <div style={{
            backgroundColor: '#ffffff',
            padding: '2rem',
            borderRadius: '1rem',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
          }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: '#e9d5ff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem'
            }}>
              <Heart size={32} color="#9333ea" />
            </div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#1e293b',
              marginBottom: '1rem'
            }}>
              Saúde Pública
            </h3>
            <p style={{color: '#64748b', lineHeight: '1.6'}}>
              A vacinação já eliminou doenças como a varíola e reduziu drasticamente casos de poliomielite e sarampo.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: 'linear-gradient(90deg, #2563eb 0%, #10b981 100%)',
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{maxWidth: '800px', margin: '0 auto'}}>
          <div style={{margin: '0 auto 1.5rem', display: 'flex', justifyContent: 'center'}}>
            <Calendar size={64} color="#ffffff" />
          </div>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#ffffff',
            marginBottom: '1rem'
          }}>
            Está com a vacinação em dia?
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: '#bfdbfe',
            marginBottom: '2rem'
          }}>
            Consulte o calendário vacinal e veja quais vacinas você precisa tomar
          </p>
          <button style={{
            backgroundColor: '#ffffff',
            color: '#2563eb',
            padding: '1rem 2rem',
            borderRadius: '0.5rem',
            fontWeight: '600',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1rem'
          }}>
            Consultar Calendário Vacinal
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{backgroundColor: '#1e293b', color: '#ffffff', padding: '3rem 2rem'}}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem'
        }}>
          <div>
            <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem'}}>
              <Shield size={24} />
              <span style={{fontSize: '1.25rem', fontWeight: 'bold'}}>nickinvacinas</span>
            </div>
            <p style={{color: '#94a3b8'}}>
              Informações confiáveis sobre vacinação no Brasil
            </p>
          </div>
          <div>
            <h4 style={{fontWeight: 'bold', marginBottom: '1rem'}}>Links Rápidos</h4>
            <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
              <a href="#" style={{color: '#94a3b8', textDecoration: 'none'}}>Calendário</a>
              <a href="#" style={{color: '#94a3b8', textDecoration: 'none'}}>Vacinas</a>
              <a href="#" style={{color: '#94a3b8', textDecoration: 'none'}}>FAQ</a>
            </div>
          </div>
          <div>
            <h4 style={{fontWeight: 'bold', marginBottom: '1rem'}}>Recursos</h4>
            <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
              <a href="#" style={{color: '#94a3b8', textDecoration: 'none'}}>Sobre nós</a>
              <a href="#" style={{color: '#94a3b8', textDecoration: 'none'}}>Contato</a>
              <a href="#" style={{color: '#94a3b8', textDecoration: 'none'}}>Blog</a>
            </div>
          </div>
          <div>
            <h4 style={{fontWeight: 'bold', marginBottom: '1rem'}}>Contato</h4>
            <p style={{color: '#94a3b8'}}>
              Email: contato@nickinvacinas.com.br<br />
              Tel: 0800 123 4567
            </p>
          </div>
        </div>
        <div style={{
          borderTop: '1px solid #334155',
          marginTop: '2rem',
          paddingTop: '2rem',
          textAlign: 'center',
          color: '#94a3b8'
        }}>
          <p></p>
        </div>
      </footer>
    </div>
  );
}