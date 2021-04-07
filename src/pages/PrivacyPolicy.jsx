import {Link} from 'react-router-dom';

import Breadcrumb from '../components/Breadcrumb';

function PrivacyPolicy() {
  return (
    <main>
      <div className='container'>
        <Breadcrumb message="Você está em Termos e privacidade" />

        <h1>Termos e privacidade</h1>
        <p>Fico feliz que você esteja interessado em entender a parte jurídica do no programa. O código do site e do software em si, tem uma licença (uma espécie de contrato) específica. O funcionamento em si segue as regras abaixo.</p>
        <p>Tentei simplificar ao máximo os termos e cobrir a maior quantidade de casos possíveis. Mas espero que você entenda que isso é impossível. Por isso, se estiver em dúvida sobre alguma coisa nos termos de uso, por favor, me chama pra conversar.</p>
        <p>Antes de mais nada, preciso dizer que, ao usar postar conteúdo de acordo com os critérios definidos na nossa configuração, <mark>você concorda integralmente com os termos.</mark> Se você não concorda com algo, por gentileza, <mark>NÃO USE O BOT.</mark></p>

        <h2>Termos de uso</h2>
        <p>O programa, também chamado de sistema, software, robô ou bot, foi pensado para ser usado para retweetar conteúdo baseado em critérios específicos, como termos e hashtags.</p>
        <p>Em geral, esses critérios são focados em temas cristãos, como por exemplo:</p>
        <ul>
          <li>Dia da Reforma Protestante</li>
          <li>Natal</li>
          <li>Páscoa</li>
          <li>Pentecostes</li>
        </ul>
        <p>Por ser automatizado, não há um controle sobre quem pode ou não enviar um conteúdo que será retweetado. Assim sendo, os administradores se reservam à:</p>
        <ul>
          <li>remover conteúdo considerados inadequados</li>
          <li>apagar retweets que não tenham a ver com o critério</li>
          <li>retirar o retweet que possa ser SPAM (como pedidos de ajuda e fancams)</li>
          <li>bloquear aqueles que possam abusar do bot</li>
          <li>desligar o sistema, limitar a entrega de conteúdo ou atrasar retweet, para se adequar às regras do Twitter</li>
        </ul>
        <p>Há conteúdos que consideramos inaceitáveis e que serão removidos sumariamente, bem como serão bloqueados os autores. Os posts proibidos são:</p>
        <ul>
          <li>pornografia, explícita ou não</li>
          <li>qualquer tema relacionado à pedofilia</li>
          <li>divulgação de pirâmides financeiras e vídeos de violência (psicológica, física, verbal ou física)</li>
          <li>compra e venda de armas, drogas (ilícitas ou não) ou outras coisas ilegais</li>
          <li>ofensas e qualquer tipo de assédio a grupos minoritários, como:</li>
            <ul>
              <li>mulheres</li>
              <li>LGBTQIA+</li>
              <li>negros</li>
              <li>pessoas periféricas</li>
            </ul>
          <li>qualquer outro conteúdo que os administradores entenderem que seja impróprio para o público do sistema, que é marjoritariamente cristão</li>
        </ul>
        <p>O recurso de de bloquear ou desbloquear o robô deve ser usado <mark>APENAS</mark> pelo dono da conta. Ao usar, você confirma que é o dono legítimo da conta. Entenda que nós não temos como fazer uma verificação se você é quem diz ser, sem invadir na sua privacidade.</p>
        <p>O software pode ser desligado a qualquer momento, sem aviso prévio. Espero que você entenda que isso não constitui prejuízo a você de qualquer forma.</p>
        <p>Embora eu tenha colocado os melhores esforços em garantir que o robô mantenha seu funcionamento contínuo, sob várias hipóteses e situações, não é possível dar qualquer garantia de que não haverão falhas. Isso quer dizer que pedidos de bloqueio ou tentativas de retwetar podem não acontecer ou mesmo entrar na fila de espera. Isso significa que, a exemplo do parágrafo anterior, você não sofrerá nenhum prejuízo e não tem nenhum direito a reembolsos sob qualquer circusntância.</p>
        <p>Não custa lembrar que, por repostar conteúdo de acordo com uma hashtag ou marcação, os retweets são automáticos, sem revisão humana. Isso quer dizer que qualquer retweet <mark>não significa que endossamos, apoiamos ou estamos ligados ao criador de alguma forma.</mark></p>
        <p>As dúvidas em relação a pontos controversos destes termos, devem ser enviados para mim, através de um dos <Link to='/contact'>meios de contato disponíveis.</Link></p>

        <h2>Política de Privacidade</h2>
        <p>Sua privacidade é importante para nós. Por isso, quero listar aqui tudo o que você tem direito, de acordo com a Lei Federal 13709/2018 (Lei Geral de Proteção de Dados - LGPD). São eles:</p>
        <ul>
          <li>Proibir que seus posts sejam retweetados</li>
          <li>Solicitar relatório de quais dados estão nos bancos de dados</li>
          <li>Pedir que seus dados não sejam tratados</li>
          <li>Bloquear ou desbloquear o bot pelo nosso sistema</li>
          <li>Bloquear ou desbloquear o perfil do bot no Twitter</li>
        </ul>
        <p>Os dados que são guardados sumariamente no banco de dados são:</p>
        <ul>
          <li>do tweet:</li>
          <ul>
            <li>conjunto de informações sobre o tweet, quando ele está na fila, sendo apagado logo após a repostagem</li>
            <li>registro do nome de usuário (ou seja, a @), juntamente com o texto original</li>
          </ul>
        </ul>

        <p>Os dados que são guardados somente a seu pedido no banco de dados são:</p>
        <ul>
          <li>do usuário:</li>
          <ul>
            <li>nome de usuário, para os casos em que é solicitado o bloqueio</li>
          </ul>
        </ul>

        <p>Em todo caso, você tem o direito de pedir que um retweet seja desfeito. O qual será realizado tão breve seja possível.</p>
        <p>Importante lembrar que o bloqueio não tem efeito para o passado, apenas para o futuro. Por exemplo, caso você peça para o bot bloquear seu usuário depois dele ter feito um retweet, somente novas mensagens não serão rewteetadas. O conteúdo antigo permance na conta do bot e precisa ser desfeita manualmente.</p>
        <p>Outro ponto: Se sua conta estiver trancada, seus tweets <mark>NÃO</mark> passam pelo sistema. Nós só temos acesso a tweets feitos a partir de perfis públicos e, mesmo que tivéssemos acesso aos tweets privados, eles não podem ser repostados. Essa é uma regra do Twitter e nós não temos como mudar isso.</p>
        <p>De acordo com a LGPD, você deve poder ter uma forma de exercer seus direitos conosco. Para exercer esses direitos previstos na LGPD ou nesta política de privacidade, por favor, entre em contato abaixo:</p>
        <ul>
          <li>Leonardo Carvalho</li>
          <li><a href="mailto:privacidade@leocarvalho.dev" target='_blank' rel='noreferrer noopener'>privacidade@leocarvalho.dev</a></li>
        </ul>
        <p>O prazo de resposta é de até 10 dias úteis, considerando Feriados Nacionais, do estado de São Paulo e da cidade do Guarujá, também no estado de São Paulo.</p>

        <h3>Informações legais</h3>
        <p>Esse site é feito com várias tecnologias. No momento, as que eu preciso citar por força de contrato é:</p>
        <ul>
          <li><a href="https://twemoji.twitter.com/" target='_blank' rel='noreferrer noopener'>Twemoji</a>, biblioteca que deixa todos os emojis do site no formato padrão do Twitter.</li>
        </ul>

      </div>
    </main>
  );
}

export default PrivacyPolicy;
