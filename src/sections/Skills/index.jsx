import styles from "./skills.module.css";

import { Badge } from "../../components/Badge";
import { SubTitle } from "../../components/SubTitle";
import { SkillCategory } from "../../components/SkillCategory";

import database from "../../assets/icons/database.svg";
import laptop from "../../assets/icons/laptop.svg";
import manufacturing from "../../assets/icons/manufacturing.svg";

export function Skills() {
    return (
        <section id="skills" className={styles.skills}>
            <Badge name="My Skills" />
            <SubTitle name="Habilidades e Tecnologias" />
            <div className={styles['skills-grid']}>
                <SkillCategory
                    icon={laptop}
                    title="Front-End & Design"
                    skills={[
                        "React",
                        "JavaScript (ES6+)",
                        "TypeScript",
                        "HTML5 & CSS3",
                        "UI/UX Design",
                        "Figma",
                        "Bootstrap",
                        "SEO Técnico"
                    ]}
                />
                <SkillCategory
                    icon={database}
                    title="Backend & Database"
                    skills={[
                        "APIs REST",
                        "MySQL",
                        "SQL Server",
                        "Python",
                        "ASP Clássico",
                        "Swagger",
                        "Postman"
                    ]}
                />
                <SkillCategory
                    icon={manufacturing}
                    title="Tools & Processes"
                    skills={[
                        "Git & GitHub",
                        "Kanban / Trello",
                        "Docker",
                        "DevTools",
                        "BPMN",
                        "Documentação de Processos",
                    ]}
                />
            </div>
        </section>
    )
}