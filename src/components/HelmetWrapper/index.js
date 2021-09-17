import { Helmet } from "react-helmet-async";

function HelmetWrapper({ title, canonical }) {
  return (
    <Helmet titleTemplate="%s | Protestant Bot" defaultTitle="Gerenciamento do BotLutero">
      <title>{title}</title>
      {canonical && (
        <link rel="canonical" href={`${process.env.PUBLIC_URL}/${canonical}`} />
      )}
    </Helmet>
  );
}

export default HelmetWrapper;
