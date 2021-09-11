import { useState, useEffect } from "react";
import Toast from "bootstrap/js/src/toast";

function NotificationToast({ data, children, autoHide = "true", delay = "5000", style }) {
  const [toast, setToast] = useState('Toast');

  useEffect(() => {
    const toastLive = new Toast(document.getElementById("liveToast"));
    setToast(toastLive);
  }, []);

  useEffect(() => {
    if (typeof toast === 'object' && data !== {}) {
      toast.show();
    }
  }, [data, toast]);

  return (
    <>
      <div className="position-relative" style={{ zIndex: 3000, ...style }}>
        <div className="toast-container position-absolute top-0 end-0 pb-3">
          <div
            data-bs-delay={delay}
            data-bs-autohide={autoHide}
            className={`toast bg-${data.className}`}
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            id="liveToast"
          >
            <div className="toast-header">
              <strong className="me-auto">{data.title}</strong>
              <small>Alguns segundos atrás</small>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="toast"
                aria-label="Fechar"
              ></button>
            </div>
            <article className="toast-body">
              <section>
                {data.message}
              </section>
              <section>
                {children}
              </section>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotificationToast;
