import styles from "./home.module.css";

import { Badge } from "../../components/Badge";
import { TechCard } from "../../components/TechCard";

import download from "../../assets/icons/download.svg";
import mail from "../../assets/icons/mail.svg";

import cv from "../../assets/documents/curriculo.pdf"

export function Home() {
  return (
    <section id="home" className={styles.hero}> 
            <Badge name="I'M SOFTWARE ENGINEER"/>
            <h1>Olá, meu nome é Luis Felipe<br/><span>Eu crio coisas para a web.</span></h1>
            <p className={styles.subtitle}>
                Desenvolvedor Full-Stack e Engenheiro de Computação especializado na criação de interfaces modernas e responsivas, além de sistemas ERP eficientes, utilizando React, JavaScript, TypeScript e UI/UX.
            </p>

            <div className={styles['hero-actions']}>
                <a href="http s://www.linkedin.com/in/luis-felipe-dos-santos-gianoni-5494ab257" target="#" className={`${styles.btn} ${styles['btn-primary']}`}>
                  <i className="devicon-linkedin-plain"></i>
                  LinkedIn
                </a>
                <a href={cv} download className={`${styles.btn} ${styles['btn-secondary']}`}>
                  <img src={download} alt=""/>
                  Download CV
                </a>
                <a href="#contact" className={`${styles.btn} ${styles['btn-secondary']}`}>
                  <img src={mail} alt=""/>
                  Contato
                </a>
            </div>
            <div className={styles['tech-title']}>Tecnologias | Trabalho com</div>
            <div className={styles['tech-section']}>
              <div className={styles['tech-icons']}>
                <TechCard
                  nameIcon="devicon-javascript-plain colored" 
                  nameTech="React"
                />
                <TechCard
                  nameIcon="devicon-html5-plain colored" 
                  nameTech="HTML5"
                />
                <TechCard
                  nameIcon="devicon-css3-plain colored" 
                  nameTech="CSS3"
                />
                <TechCard 
                  nameIcon="devicon-figma-plain colored" 
                  nameTech="Figma"
                />
                <TechCard 
                  nameIcon="devicon-git-plain colored" 
                  nameTech="Git"
                />
                <TechCard
                  nameIcon="devicon-docker-plain colored" 
                  nameTech="Docker"
                />
                <TechCard 
                  nameIcon="devicon-python-plain colored" 
                  nameTech="Python"
                /> 
                <TechCard 
                  nameIcon="devicon-mysql-plain colored" 
                  nameTech="MySQL"
                />
                <TechCard 
                  nameIcon="devicon-bootstrap-plain colored" 
                  nameTech="Bootstrap"
                /> 
              </div>
            </div>
        </section>
  )
}
