import React from "react";
import styles from "../Styles/Home.module.css";
//import profile from "../Styles/Images/profile.jpg";
import { RiLinkedinFill, RiGithubFill } from "react-icons/ri";
import Profile from "../Components/Profile";

function Home() {
  return (
    <div className={styles.homeContenedor}>
      <div className={styles.imageBorder}>
        <Profile></Profile>        
        
      </div>
      <div className={styles.homeRight}>
        <div className={styles.titulo}>Hola! Soy Jheinember Jimenez</div>
        <div className={styles.subtitulo}>Full Stack Developer</div>
        <div className={styles.descripcion}>
          Full Stack Developer con formación universitaria, resolución de problemas, trabajo en equipo,
          comunicación y autonomía.
        </div>
      </div>
    </div>

  );
}

export default Home;