// import "./App.css";
import styles from "./App.module.css";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import About from "./Components/About"

function App() {
  return (
    <>
      <Nav></Nav>
      <div className={styles.cont}>
      <Home></Home>
      <About></About>
      </div>
    </>
  );
}

export default App;


