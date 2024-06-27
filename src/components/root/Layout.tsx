import Nav from "./Nav";
import Menu from "./menu";
import Footer from "./Footer";
export default function Layout({ children }: any) {
  return (
    <>
      <Nav />
      <div className="container-fluid">
      <div className="row">
        <div id="colMenu" className="col-2 mt-2"><Menu/></div>
        <div  className="col">{children}</div>
      </div>
    </div>
      
      <Footer />
    </>
  );
}
