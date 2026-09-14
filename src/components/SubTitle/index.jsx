import styles from "./subtitle.module.css"

export function SubTitle ({name}){
    return(
        <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>{name}</h2>
        </div>
    )
}