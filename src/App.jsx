// import "./App.css";
import styles from "./App.module.css";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import About from "./Components/About"
import Proyectos from "./Components/Proyectos"

function App() {
  return (
    <>
      <Nav></Nav>
      <div className={styles.cont}>
      <section id="Home">
          <Home></Home>
        </section>

        <section id="SobreMi">
          <About></About>
        </section>

        <section id="Proyectos">
          <Proyectos></Proyectos>
        </section>
      </div>
    </>
  );
}

export default App;


