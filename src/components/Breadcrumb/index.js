function Breadcrumb({message}) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item active" aria-current="page">
          Você está em {message}
        </li>
      </ol>
    </nav>
  );
}

export default Breadcrumb;
