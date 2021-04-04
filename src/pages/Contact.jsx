function Contact() {
  return (
    <main>
    <div className='container'>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active" aria-current="page">Você está em Contato</li>
        </ol>
      </nav>
      <h1>Contato</h1>
      <p>Eu sei. Muito provavelmente você estava esperando um formulário aqui.</p>
      <p>Mas eu espero que você entenda que não foi fácil construir essa página em tempo recorde, às vésperas da Páscoa.</p>
      <p>Por isso, se você precisar falar comigo, por gentileza, <a href="https://leocarvalho.dev" target='_blank' rel='noreferrer noopener'>entre no meu site</a>. Logo na primeira página, você verá uma lista sem fim das minhas redes sociais, e-mail e até mesmo WhatsApp.</p>
      <p className='text-center h4'>Muito obrigado!</p>
    </div>
  </main>
  );
}

export default Contact;
