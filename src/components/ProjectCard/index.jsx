import styles from "./projectcard.module.css";

import folder from "../../assets/icons/folder_open.svg";
import github from "../../assets/icons/github-brands-solid-full.svg"
import site from "../../assets/icons/globe-solid-full.svg"

export function ProjectCard({siteHref,gitHref,title,description,tags}) {

    return(
        <div className={styles.projectCard}>
            <div>
                <div className={styles.projectHeader}>
                    <img className="fa-regular fa-folder-closed folder" src={folder} alt=""/>
                    <div className="projectLinks">
                        <a href={siteHref}  target="_blank" title="site do projeto"><img src={site} alt="" /></a>
                        <a href={gitHref}  target="_blank" title="pasta do projeto"><img src={github} alt="" /></a>
                    </div>
                </div>
                <h3 className={styles.projectTitle}>{title}</h3>
                <p className={styles.projectDesc}>
                    {description}
                </p>
            </div>
            <div className={styles.projectTechs}>
                {tags.map((tags) => (
                    <span key={tags}>
                        {tags}
                    </span>
                ))}
            </div>
        </div>
    )
}