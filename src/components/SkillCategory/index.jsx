import styles from "./skillcategory.module.css"

export function SkillCategory({ icon, title, skills }) {
    return (
        /*styles['form-wrapper'] */
        <div className={styles['skill-category']}>
            <h3>
                <img src={icon} alt=""/> {title}
            </h3>

            <div className={styles['tags-container']}>
                {skills.map((skill) => (
                    <span className={styles['skill-tag']} key={skill}>
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}