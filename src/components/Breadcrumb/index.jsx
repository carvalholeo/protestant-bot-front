function Breadcrumb({message}) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item active" aria-current="page">
          {message}
        </li>
      </ol>
    </nav>
  );
}

export default Breadcrumb;
