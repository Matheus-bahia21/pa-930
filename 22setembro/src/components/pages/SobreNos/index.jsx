// src\components\pages\SobreNos\index.jsx
import './style.css';


function SobreNos() {
    return (
        <section className="sobrenos">
            <h1>Sobre Nós</h1>
            <p>
                <b style={{color:'#d4af37', fontSize:'1.15em'}}>Excelência, confiança e inovação em contabilidade.</b><br/>
                <span style={{color:'#222'}}>Há mais de uma década, transformamos números em oportunidades e resultados para nossos clientes.<br/>
                Nossa equipe une experiência, tecnologia de ponta e atendimento humano para impulsionar o crescimento de empresas de todos os portes.</span>
            </p>
            <ul>
                <li><b>Atendimento personalizado</b> para cada necessidade.</li>
                <li><b>Profissionais certificados</b> e apaixonados pelo que fazem.</li>
                <li><b>Foco total na sua tranquilidade</b> e no sucesso do seu negócio.</li>
                <li><b>Tecnologia e automação</b> para processos ágeis e seguros.</li>
                <li><b>Consultoria estratégica</b> para decisões financeiras inteligentes.</li>
            </ul>
            <div style={{marginTop:'2rem', textAlign:'center'}}>
                <span style={{color:'#bfa133', fontWeight:'bold', fontSize:'1.1em'}}>Conte com a gente para ir além da contabilidade tradicional.</span>
            </div>
        </section>
    );
}

export default SobreNos;