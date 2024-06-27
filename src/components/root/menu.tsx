import Link from "next/link";
export default function Menu() {
    return (
        <>
            <div className="btn-group-vertical collassabile">
                <Link className="btn btn-outline-dark text-truncate" href='/'>
                    <i className="me-2 far fa-clone"></i>Home
                </Link>
                <div className="btn btn-outline-dark text-truncate">
                    <div className="input-group input-group-sm">
                        <input type="text" className="form-control" placeholder="Ricerca" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary"><i
                                className="fas fa-level-down-alt"></i></button>
                        </div>
                    </div>
                </div>
                <Link className="btn btn-outline-dark text-truncate" href='/about'>
                    <i className="me-2 far fa-clone"></i>About
                </Link>
                <Link className="btn btn-outline-dark text-truncate" href='/tabella'>
                    <i className="me-2 far fa-clone"></i>Tabella
                </Link>

            </div>
        </>
    );
}