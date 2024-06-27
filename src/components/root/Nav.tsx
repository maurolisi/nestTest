
import Image from "next/image";
export default function Nav() {
  return (
    <>
      <nav
        className="m-0 navbar sticky-top navbar-expand-lg bg-danger px-3"
      // style={background-color: #921b32}
      >
        <Image
          src="/logo.png"
          alt="Logo"
          // className={styles.vercelLogo}
          width={300}
          height={42}
          priority
        />

        <div className="collapse navbar-collapse collassabile">
          <div className="text-white text-center m-auto">Prova</div>
        </div>
        {/* <div className="BTNUtente btn-group" role="group">
          <button
            id="Utente"
            type="button"
            className="btn btn-success dropdown-toggle"
            data-toggle="dropdown"
          >
            <i className="icobtn fas fa-users"></i>utente
          </button>
          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="Utente">
            <h4 className="dropdown-header">Utente</h4>
            <button className="dropdown-item" type="button">
              <i className="icobtn fas fa-id-card"></i>profile
            </button>
            <div className="dropdown-divider"></div>
            <button className="dropdown-item" type="submit">
              <i className="icobtn fas fa-sign-out-alt"></i>logout
            </button>
          </div>
        </div> */}
      </nav>
    </>
  );
}
