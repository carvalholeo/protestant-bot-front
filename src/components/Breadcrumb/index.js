function Breadcrumb({ message }) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item text-light">
          <small>Você está em {message}</small>
        </li>
      </ol>
    </nav>
  );
}

export default Breadcrumb;
