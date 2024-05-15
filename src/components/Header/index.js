import Navigation from "../Navigation"
import styles from './Header.module.css'

const Header = () => {
    return(
        <header className={styles.header}>
            <h1>Power mom</h1>
            <Navigation />
        </header>
    )
}

export default Header