import Navigation from "../Navigation"
import { Lora } from "next/font/google"
import styles from './Header.module.css'

const lora = Lora({subsets: ["latin"]})

const Header = () => {

    return(
        <header className={styles.header}>
            <h1 className={lora.className}>Power mom</h1>
            <Navigation />
        </header>
    )
}

export default Header