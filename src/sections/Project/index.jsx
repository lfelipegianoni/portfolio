import "./project-styles.css";

import { Badge } from "../../components/Badge";
import { SubTitle } from "../../components/SubTitle";
import { ProjectCard } from "../../components/ProjectCard";

export function Project (){
    return(
        <section id="projects" className="projects">
            <Badge name="My Projects"/>
            <SubTitle name="Featured Projects"/>
            <div className="projects-grid">
                <ProjectCard
                    siteHref="https://lfelipegianoni.github.io/pesquisa-culturama/"
                    gitHref="https://github.com/lfelipegianoni/pesquisa-culturama"
                    title="Pesquisa-Culturama"
                    description="Formulário de pesquisa de opinião desenvolvido para o registro e organização de informações, contendo diferentes tipos de campos e elementos de interação, como campos de texto, seleção de datas por calendário, upload de imagens, select, radio buttons, checkboxes e paleta de cores."
                    tags={[
                        "HTML",
                        "CSS",
                        "UI/UX",
                        "GitHub Pages"
                    ]}
                />
                <ProjectCard
                    siteHref="https://lfelipegianoni.github.io/jornada-viagens/"
                    gitHref="https://github.com/lfelipegianoni/jornada-viagens"
                    title="Jornada Viagens"
                    description="Landing page com diversos cards e textos, implementada com media queries para garantir responsividade em diferentes dispositivos."
                    tags={[
                        "HTML",
                        "CSS",
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
                        "CSS",
                        "UI/UX",
                        "GitHub Pages",
                        "Devicon",
                    ]}
                />
            </div>
        </section>
    )
}