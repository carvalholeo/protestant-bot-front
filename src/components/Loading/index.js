function Loading({content}) {
  return (
    <div className="d-flex justify-content-center align-items-center text-center pt-3">
      <strong>{content}</strong>
      <span className="spinner-border ms-3" role="status" aria-hidden="true"></span>
    </div>
  );
}

export default Loading;
