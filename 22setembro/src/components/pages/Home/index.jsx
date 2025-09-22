// src\components\pages\Home\index.jsx
import './style.css';


// eslint-disable-next-line react-refresh/only-export-components
function Home() {
    return (
        <section className='home'>
            <div className='hero_text'>
                <h1 style={{color:'#d4af37'}}>Seu Sucesso, Nossa Especialidade</h1>
                <h2 style={{color:'#222'}}>Contabilidade Premium para Empresas Visionárias</h2>
                <p style={{fontSize:'1.15em'}}>
                    <b style={{color:'#bfa133'}}>Bem-vindo à Contabilidade XYZ</b>, onde tradição e tecnologia se unem para criar oportunidades e resultados reais.<br/>
                    <span style={{color:'#222'}}>Atendemos de startups a grandes empresas com soluções sob medida, consultoria estratégica e atendimento próximo.<br/>
                    <span style={{color:'#d4af37', fontWeight:'bold'}}>Transparência, inovação e confiança para você crescer sem limites.</span></span>
                </p>
                <a href='/servicos' className='btn primary'>Conheça nossos serviços</a>
            </div>
            {/* Imagem removida conforme solicitado */}
            <div className='destaques' style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', textAlign:'center', margin:'2rem 0', width:'100%'}}>
                <h3 style={{color:'#bfa133', textAlign:'center'}}>Por que escolher a XYZ?</h3>
                <ul style={{textAlign:'center', listStylePosition:'inside', padding:0, margin:0}}>
                    <li>✔️ Atendimento consultivo, humano e ágil</li>
                    <li>✔️ Soluções digitais, seguras e inovadoras</li>
                    <li>✔️ Redução de custos, riscos e burocracia</li>
                    <li>✔️ Suporte especializado em todas as etapas</li>
                </ul>
            </div>
            <div className='cta'>
                <p style={{fontWeight:'bold', color:'#222'}}>Pronto para transformar sua empresa?<br/>
                    <a href='/fale-conosco' className='btn secondary'>Fale com um especialista</a>
                </p>
            </div>
        </section>
    );
}
