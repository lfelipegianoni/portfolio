import styles from "./projectcard.module.css";

import folder from "../../assets/icons/folder_open.svg";
import github from "../../assets/icons/github-brands-solid-full.svg"
import site from "../../assets/icons/globe-solid-full.svg"

export function ProjectCard({ siteHref, gitHref, title, description, tags }) {

    return (
        <div className={styles['project-card']}>
            <div>
                <div className={styles['project-header']}>
                    <img className="fa-regular fa-folder-closed folder" src={folder} alt="" />
                    <div className={styles['project-links']}>
                        {siteHref && (
                            <a href={siteHref} target="_blank" rel="noopener noreferrer" title="site do projeto">
                                <img src={site} alt="Site do projeto"/>
                            </a>
                        )}

                        {gitHref && (
                            <a href={gitHref} target="_blank" rel="noopener noreferrer" title="GitHub do projeto">
                                <img src={github} alt="GitHub do projeto"/>
                            </a>
                        )}
                    </div>
                </div>
                <h3 className={styles['project-title']}>{title}</h3>
                <p className={styles['project-desc']}>
                    {description}
                </p>
            </div>
            <div className={styles['project-techs']}>
                {tags.map((tags) => (
                    <span key={tags}>
                        {tags}
                    </span>
                ))}
            </div>
        </div>
    )
}