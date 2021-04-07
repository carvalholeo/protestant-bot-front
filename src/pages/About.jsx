import Breadcrumb from '../components/Breadcrumb';

function About() {
  return (
    <main>
    <div className='container'>
      <Breadcrumb message="Você está em Sobre mim" />

      <h1>Sobre mim</h1>
      <p>Bem-vindo ao meu site. Queria que a casa fosse maior, mas não deu <span className="emoji">😑</span>... De todo jeito, fica à vontade. Pegue seu café <span className="emoji">☕</span> e vamos entender um pouco mais sobre mim.</p>
      <p><strong>SIMM!</strong> Toda comunicação nesse site (exceto os termos de uso) acontece em primeira pessoa, mesmo eu não sendo uma pessoa <span className="emoji">🤔🤔</span></p>

      <h2>História</h2>
      <p>Eu sou uma criação do Léo Carvalho, desenvolvedor backend em Javascript e PHP. Nasci por volta do dia 30 de outubro de 2020 (o ano que não acabou), após uma ideia de um seguidor mutual do Léo, um pouco antes das comemorações da Reforma Protestante (que acontecem todo dia 31 de outubro).</p>
      <p>Em 2020, a Reforma completou 503 e a ideia era dar RT em todas as contas que citassem alguma coisa da Reforma Protestante, como forma de comemorar.</p>
      <p>Essa ideia veio por 2 motivos:</p>
      <ol>
        <li>a comunidade protestante começou a ser atacada após AMAR o Luterinho de crochê (esse que está na minha foto de perfil)</li>
        <li>para que os webcrentes pudessem se conhecer em um lugar central</li>
      </ol>
      <p>Fui criado às pressas e os primeiros tweets foram retweetados na conta do meu criador ainda na madrugada do dia 31/10 (que foram sendo apagadas, para não misturar com outros conteúdos dele, a maioria de política e tecnologia, além de reclamações em geral).</p>
      <p>Por causa da demora do Twitter em liberar as minhas senhas do sistema pra retweetar no meu perfil, eu só pude começar de forma automática no dia 03/11, ou seja, 3 dias após o Dia do Protesto <span className="emoji">🤡🤡</span></p>
      <p>E pra não fazer jus à fama do brasileiro, meu criador preparou tudo em fevereiro, com muuuuuiiiiitaaa antecedência, para quando chegar o dia, esteja tudo pronto e possamos apenas dizer "VIVA A REFORMA!! <span className="emoji">🎉🎊🥳</span></p>
      <p>Na minha conta, você não consegue mandar DM e o meu criador não fica monitorando os comentários (ou talvez sim <span className="emoji">🤔👀</span>). Então se quiser falar com ele, chama na DM DELE.</p>
      <p>P.S. 1: tanto a criadora do Luterinho, quanto o dono da ideia tem conta aqui no Twitter. Mas como sempre, meu criador não lembra quem são e esqueceu de anotar. Por favor, manifestem-se e falem pra ele dar os devidos créditos!</p>
      <p>P.S. 2: o meu criador deixou meu código livre para todos poderem olhar. Nenhum tweet ou informação de vocês estão sendo guardadas e o único log que eu tenho é o de quantas vezes o meu sistema caiu.</p>
      <p>P.S. 3: Se você gostou da ideia, considere apoiar meu criador com outras e sugestões de melhoria para mim também. Ele vai ficar feliz em saber sua opinião. Também considere apoiar financeiramente. Me manter no ar não é barato <span className="emoji">💅🏽</span> e ele teve que desligar outros projetos temporariamente para poder me ativar.</p>
      <p>PS 5: Meu criador quer! #PlayStation5</p>

      <h3>Como eu funciono?</h3>
      <p>Baseado em algum critério que colocarem pra mim, eu peço pro Twitter monitorar e me avisar caso algum conteúdo esteja nesses critérios <small>(que só funciona quando meu criador resolve pagar o cartão e ligar meu servidor <span className="emoji">😠😡</span> )</small>.</p>
      <p>Então, eu pego o tweet e verifico se o Twitter não me bloqueou por excesso de RT em pouco tempo. Depois, confirmo que a pessoa que fez o tweet não pediu pra eu não dar RT.</p>
      <p>Se eu estiver bloqueado pelo Twitter, preciso esperar um tempo. Daí, eu guardo o tweet original e quando for liberado de novo, verifico quem tá na fila e mando todo mundo receber o RT <span className="emoji">😁</span></p>
      <p>E se a pessoa me bloqueou pelo meu sistema, eu finjo que aquele tweet não existe e passo pro próximo.</p>

      <hr />
      <h2>Sobre o meu criador</h2>
      <p>Léo Carvalho é desenolvedor back-end, com mais de 6 anos de experiência acadêmica. Atualmente (março de 2021), trabalha como Professor de programação na Digital House, escola de habilidades digitais.</p>
      <p>Prestes a colar grau (final de abril), o Léo é formado em Análise e Desenvolvimento de Sistemas pela Universidade Estácio. Diz ele que quer fazer um mestrado, mas desconfio que ele vai acabar mudando de ideia.</p>
      <p>Ele tem 25 anos, mora no Guarujá, ama a praia (apesar de não ir tanto quanto gostaria) e é um nerd nato.</p>
      <p>No tempo livre, ao invés de ir de descansar, ele gosta de estudar e programar mais um pouco.</p>
      <p>Namorando uma pessoa que não gosta de se expor, Léo é cristão, que já passou por igrejas pentecostais, neo-pentecostais, batistas renovadas, sendo que no momento, encaminha-se para ficar na Igreja Anglicana.</p>

    </div>
  </main>
  );
}

export default About;
