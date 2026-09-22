import styles from "./badge.module.css";

export function Badge ({name}){
    return(
        <div className={styles.badge}>
            <span>{name}</span>
        </div>
    )
}