import { Helmet } from "react-helmet-async";

function HelmetWrapper({ title, canonical, keywords, children }) {
  return (
    <Helmet titleTemplate="%s | Protestant Bot" defaultTitle="Gerenciamento do BotLutero">
      <title>{title}</title>
      <meta name="keywords" content={`bot lutero, martinho lutero, retweetar reforma protestante, reforma protestante, lutero bot, dia da reforma, dia do protesto, ${keywords}`} />
      {children}
      {canonical && (
        <link rel="canonical" href={`${process.env.PUBLIC_URL}/${canonical}`} />
      )}
    </Helmet>
  );
}

export default HelmetWrapper;
