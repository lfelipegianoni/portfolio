import styles from "./project.module.css";

import { Badge } from "../../components/Badge";
import { SubTitle } from "../../components/SubTitle";
import { ProjectCard } from "../../components/ProjectCard";

export function Project (){
    return(
        <section id="projects" className={styles.projects}>
            <Badge name="My Projects"/>
            <SubTitle name="Featured Projects"/>
            <div className={styles['projects-grid']}>
                <ProjectCard
                    gitHref="https://github.com/lfelipegianoni/api-node-express"
                    title="API-Node-Express"
                    description="Projeto com implementação completa de um CRUD, tratamento de erros e arquitetura MVC, desenvolvido com Express e Node.js, utilizando Mongoose conectado a um banco de dados MongoDB."
                    tags={[
                        "Node.js",
                        "Express",
                        "API Rest",
                        "JavaScript",
                        "Mongoose",
                        "MVC"
                    ]}
                />
                <ProjectCard
                    siteHref="https://lfelipegianoni.github.io/poupapp2/"
                    gitHref="https://github.com/lfelipegianoni/poupapp2"
                    title="Poupapp2"
                    description="Dashboard financeiro desenvolvido em React, com foco na construção de interfaces e componentes reutilizáveis, utilizando Tailwind CSS para estilização e responsividade."
                    tags={[
                        "React",
                        "JavaScript",
                        "HTML",
                        "Tailwind",
                        "UI/UX",
                        "GitHub Pages"
                    ]}
                />
                <ProjectCard
                    siteHref="https://lfelipegianoni.github.io/portfolio"
                    gitHref="https://github.com/lfelipegianoni/Portfolio"
                    title="Portifólio"
                    description="Este portfólio foi criado para apresentar minhas habilidades e experiências de forma clara e acessível, facilitando a avaliação do meu perfil por empresas e profissionais que buscam um desenvolvedor Full Stack."
                    tags={[
                        "React",
                        "JavaScript",
                        "HTML",
                        "CSS Modules    ",
                        "UI/UX",
                        "GitHub Pages",
                        "Devicon",
                    ]}
                />
            </div>
        </section>
    )
}