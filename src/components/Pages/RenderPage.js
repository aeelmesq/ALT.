import { getUlrParam } from "../utilits.js";
import Home from "./Home/Home";
import "../../StyleComponents/Pages.css";
import ForYou from "./ForYou/ForYou.js";
import BtnScrollUp from "../BtnScrollUp/BtnScrollUp.js";
import Login from "./Login/Login.js";
import Modal from "../Modal/Modal.js";

function RenderPage() {
  let menuSelect = getUlrParam("menu");
  let modalInfos = getUlrParam("modal");

  function ModalRender() {
    console.log(modalInfos);
    let infos = modalInfos.split(",");
    return <Modal title={infos[0]} msg={infos[1]} innerBtn={infos[2]} />;
  }

  function Render() {
    //Chamada da página com base na Url
    switch (menuSelect) {
      case "Home":
        return (
          <>
            <main className="container">
              <Home />
            </main>
            <BtnScrollUp />
          </>
        );
      case "ParaVoce":
        return (
          <>
            <main className="container">
              <ForYou />
            </main>
            <BtnScrollUp />
          </>
        );
      case "Preferencias":
        return <p>Trabalhando nisso</p>;
      case "Penapolis":
        return <p>Trabalhando nisso</p>;
      case "Regiao":
        return <p>Trabalhando nisso</p>;
      case "Brasil":
        return <p>Trabalhando nisso</p>;
      case "SingIn":
        return <Login renderScreen={"SingIn"} />;
      case "Register":
        return <Login renderScreen={"Register"} />;
      case null:
        return (
          <>
            <main className="container">
              <Home />
            </main>
            <BtnScrollUp />
          </>
        );
      default:
        return <p>404 Not found</p>;
    }
  }

  return (
    <>
      <Render />
      <Modal title={"teste"} msg={"hello world"} innerBtn={"ok"} />
    </>
  );
}

export default RenderPage;
