import styles from "./header.module.css"

export function Header() {
  return (
    <header> 
        <div className={`${styles.container} ${styles['nav-container']}`}>
            <a href="#home" className={styles.logo}>
                <code>&lt;/&gt;</code> LuisFelipe.dev
            </a>
            <ul className={styles['nav-links']}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Project</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <button className={styles['lang-btn']} id="#">pt-BR ▾</button>
        </div>
    </header>
  )
}