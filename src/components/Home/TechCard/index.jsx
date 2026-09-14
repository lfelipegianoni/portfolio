import styles from  "./techcard.module.css";

export function TechCard ({nameIcon, nameTech}) {
    return(
        <div className={styles.techCard}><i className={nameIcon}></i>{nameTech}</div>
    )
}