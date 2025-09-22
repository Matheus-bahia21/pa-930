// src\components\pages\FaleConosco\index.jsx

import './style.css';

// eslint-disable-next-line react-refresh/only-export-components
function FaleConosco() {
    function handleSubmit(event) {
        event.preventDefault();
        alert('Mensagem enviada com sucesso!');
    }
    return (
        <section className="faleconosco">
            <h1>Fale Conosco</h1>
            <p>Entre em contato conosco para qualquer dúvida ou solicitação de serviços. Estamos aqui para ajudar!</p>
            <form onSubmit={handleSubmit}>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <label style={{ flex: 1 }}>
                        <span>Nome:</span>
                        <input type="text" name="nome" placeholder="Seu nome completo" required />
                    </label>
                    <label style={{ flex: 1 }}>
                        <span>Email:</span>
                        <input type="email" name="email" placeholder="voce@email.com" required />
                    </label>
                    <label style={{ flex: 1 }}>
                        <span>Telefone:</span>
                        <input type="tel" name="telefone" placeholder="(00) 00000-0000" required />
                    </label>
                </div>
                <label>
                    <span>Assunto:</span>
                    <input type="text" name="assunto" placeholder="Assunto da mensagem" required />
                </label>
                <label>
                    <span>Mensagem:</span>
                    <textarea rows="6" placeholder="Escreva sua mensagem aqui..." required></textarea>
                </label>
                <button type="submit">Enviar Mensagem</button>
            </form>
        </section>
    );
}
