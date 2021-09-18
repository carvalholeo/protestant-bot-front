import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";

import Loading from "../../components/Loading";
import analytics from "../../services/analytics";
import luterinho from "../../assets/luterinho.webp";
import './index.css';

const Twemoji = lazy(() => import("react-twemoji"));
const Breadcrumb = lazy(() => import("../../components/Breadcrumb"));
const HelmetWrapper = lazy(() => import("../../components/HelmetWrapper"));

function About() {
  analytics();
  return (
    <Suspense fallback={<Loading message="Carregando dados..." />}>
      <Twemoji options={{ className: "emoji" }}>
        <main>
          <HelmetWrapper
            title="Sobre mim"
            canonical=" "
            keywords="o que é bot lutero, detalhes bot lutero, o que é protestant bot, detalhes protestant bot"
            description="O BotLutero é um perfil no Twitter criado na Reforma Protestante de 2020 e dá RT em tweets sobre cristianismo, em especial todo dia 31 de outubro. Saiba mais!"
          />
          <div className="container clearfix">
            <Breadcrumb message="Sobre mim" />

            <h1>Sobre mim</h1>
            <p>
              Bem-vindo ao meu site. Queria que a casa fosse maior, mas não deu{" "}
              <span className="emoji">
                😑
              </span>
              ... De todo jeito, fica à vontade. Pegue seu café{" "}
              <span className="emoji">☕</span> e vamos entender um pouco mais
              sobre mim.
            </p>
            <p>
              <strong>SIMM!</strong> Toda comunicação nesse site (exceto os
              termos de uso) acontece em primeira pessoa, mesmo eu não sendo uma
              pessoa <span className="emoji">🤔🤔</span>
            </p>

            <h2>História</h2>
            <p>
              Eu sou uma criação do Léo Carvalho, desenvolvedor back-end em
              JavaScript e PHP. Nasci por volta do dia 30 de outubro de 2020 (o
              ano que não acabou), após uma ideia de um seguidor mutual do Léo,
              um pouco antes das comemorações da Reforma Protestante (que
              acontecem todo dia 31 de outubro).
            </p>
            <p>
              Em 2020, a Reforma completou 503 e a ideia era dar RT em todas as
              contas que citassem algo da Reforma Protestante, como
              jeito de comemorar.
            </p>
            <p>Essa ideia veio por 2 motivos:</p>
            <ol>
              <li>
                a comunidade protestante começou a ser atacada após AMAR o
                Luterinho de crochê (imagem abaixo)
              </li>
              <li>
                para que os webcrentes pudessem se conhecer em um lugar central
              </li>
            </ol>
            <picture className="container-luther">
              <img
                loading="lazy"
                src={luterinho}
                className={`rounded img-thumbnail float-md-start me-md-4 d-md-inline my-3 d-block litlle-luther`}
                alt="Versão de crochê de Martinho Lutero, em um fundo rosa."
              />
            </picture>
            <p>
              Fui criado às pressas e os primeiros tweets foram retweetados na
              conta do meu criador ainda na madrugada do dia 31/10/2020 (que
              foram sendo apagadas, para não misturar com outros conteúdos dele,
              a maioria de política e tecnologia, além de reclamações em geral).
            </p>
            <p>
              Pela demora do Twitter em liberar as minhas senhas do
              sistema pra retweetar no meu perfil, eu só pude começar de forma
              automatizada no dia 03/11/2020, ou seja, 3 dias após o Dia do
              Protesto <span className="emoji">🤡🤡</span>
            </p>
            <p>
              E pra não fazer jus à fama do brasileiro, meu criador preparou
              tudo em fevereiro, com muuuuuiiiiitaaa antecedência, para quando
              chegar o dia, esteja tudo pronto e possamos apenas dizer "VIVA A
              REFORMA!!" <span className="emoji">🎉🎊🥳</span>
            </p>
            <p>
              Na minha conta, você não consegue mandar DM e o meu criador não
              fica monitorando os comentários (ou talvez sim{" "}
              <span className="emoji">🤔👀</span>). Então se quiser falar com
              ele, chama na DM DELE, ou através do{" "}
              <Link to="/contact" className="link-light">formulário de contato</Link>.
            </p>
            <p>
              P.S. 1: a criadora do Luterinho tem conta no Twitter, mas como
              sempre, meu criador não lembra quem é e esqueceu de anotar. Se
              você vir esta página, por favor, manifeste-se para receber os
              devidos créditos!
            </p>
            <p>
              P.S. 2: a pessoa que teve a ideia da minha criação é o JM Teodoro.
              Ele é artista e estudante de TI. Acessem os perfis dele, no{" "}
              <a
                href="https://twitter.com/JM_SCTeodoro"
                target="_blank"
                rel="noopener noreferrer"
                className="link-light"
              >
                Twitter
              </a>{" "}
              e no{" "}
              <a
                href="https://www.instagram.com/dixperso21/?igshid=1wlnd48sxb3ft"
                target="_blank"
                rel="noopener noreferrer"
                className="link-light"
              >
                Instagram
              </a>
              .
            </p>
            <p>
              P.S. 3: o meu criador deixou meu código livre para todos poderem
              olhar. Mais informações podem ser obtidas na página de{" "}
              <Link to="/releasenotes" className="link-light">históricos de versões.</Link>
            </p>
            <p>
              P.S. 4: se você gostou da ideia, considere apoiar meu criador com
              outras e sugestões de melhoria para mim também. Ele vai ficar
              feliz em saber sua opinião. Também considere apoiar
              financeiramente. Me manter no ar não é barato{" "}
              <span className="emoji">💅🏽</span> e ele teve que desligar outros
              projetos temporariamente para poder me ativar.
            </p>
            <p>PS 5: meu criador quer! #PlayStation5</p>

            <h3>Como eu funciono?</h3>
            <p>
              Baseado em algum critério que estou configurado, eu peço pro
              Twitter monitorar e me avisar caso algum conteúdo esteja nesses
              critérios{" "}
              <small>
                (que só funciona quando meu criador resolve pagar o cartão e
                ligar meu servidor <span className="emoji">😠😡</span>)
              </small>
              .
            </p>
            <p>
              Então, eu pego o tweet e verifico se:
            </p>
            <ul>
              <li>
                o Twitter não me bloqueou por excesso de RT em pouco tempo
              </li>
              <li>eu não estou bloqueado pela pessoa no Twitter</li>
              <li>eu não estou bloqueado pela pessoa nos meus registros</li>
              <li>qualquer outro impedimento temporário ou permanente</li>
            </ul>
            <p>
              Se eu estiver bloqueado pelo Twitter, preciso esperar um tempo.
              Daí, eu guardo o tweet original e quando for liberado de novo,
              verifico quem tá na fila e mando todo mundo receber o RT{" "}
              <span className="emoji">😁</span>
            </p>
            <p>
              E se a pessoa me bloqueou pelo meu sistema, eu finjo que aquele
              tweet não existe e passo pro próximo.
            </p>

            <p>Se estiver tudo certo, o RT sai quase na hora!</p>

            <hr />
            <h2>Sobre o meu criador</h2>
            <p>
              Léo Carvalho é desenvolvedor back-end, com mais de 6 anos de
              experiência acadêmica. Atualmente (setembro de 2021), trabalha
              como Professor de programação na Digital House, escola de
              habilidades digitais.
            </p>
            <p>
              Formado em Análise e Desenvolvimento de Sistemas pela Universidade
              Estácio, está se preparando para começar uma pós-graduação na área
              de Engenharia de Software.
            </p>
            <p>
              Ele tem 26 anos, mora no Guarujá, ama a praia (apesar de não ir
              tanto quanto gostaria) e é um nerd nato.
            </p>
            <p>
              No tempo livre, ao invés de ir de descansar, ele gosta de estudar
              e programar mais um pouco.
            </p>
            <p>
              Solteiro, Léo é cristão, que já passou por igrejas pentecostais,
              neo-pentecostais, batistas renovadas, e agora aguarda uma
              oportunidade para ficar de vez na{" "}
              <a
                href="https://www.ieab.org.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-light"
              >
                Igreja Anglicana Episcopal do Brasil
              </a>
              .
            </p>
            <p>
              Para saber mais informações sobre ele,{" "}
              <a
                href="https://leocarvalho.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="link-light"
              >
                acesse seu site
              </a>
              . Lá, você terá acesso a todos os contatos pessoais dele e outras
              coisas mais.
            </p>
          </div>
        </main>
      </Twemoji>
    </Suspense>
  );
}

export default About;
