import styles from "./badge.module.css";

export function Badge ({name}){
    return(
        <div>
            <span className={styles.badge}>{name}</span>
        </div>
    )
}