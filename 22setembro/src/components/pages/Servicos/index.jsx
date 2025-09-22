// src\components\pages\Servicos\index.jsx
import './style.css';

function Servicos() {
    return (
        <section className='servicos'>
            <h1>Serviços</h1>
            <p>Oferecemos uma ampla gama de serviços contábeis
                 para atender às necessidades de nossos clientes!</p>

            <div className='grid cols-3'>
                    <div className='card'>
                        <h2>Contabilidade Geral</h2>
                        <p>Serviços completos de contabilidade para 
                            empresas de todos os tamanhos.</p>
                    </div>
                    <div className='card'>
                        <h2>Consultoria Fiscal</h2>
                        <p>Orientação especializada para otimizar a carga tributária.</p>
                    </div>
                    <div className='card'>
                        <h2>Folha de Pagamento</h2>
                        <p>Gestão eficiente da folha de pagamento e 
                            obrigações trabalhistas.</p>
                    </div>
                 </div>
                 </section>
    )
}

export default Servicos;