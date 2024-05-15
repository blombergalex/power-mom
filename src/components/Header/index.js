import Navigation from "../Navigation"
import Hero from "../Hero"
import styles from './Header.module.css'

const Header = () => {
    return(
        <header className={styles.header}>
            <Hero />
            <h1>Power mom</h1>
            <Navigation />
        </header>
    )
}

export default Header