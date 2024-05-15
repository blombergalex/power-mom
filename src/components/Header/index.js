import Navigation from "../Navigation"
import Hero from "../Hero"
import { Oswald } from "next/font/google"
import { Lora } from "next/font/google"
import styles from './Header.module.css'

const oswald = Oswald({subsets: ["latin"]})
const lora = Lora({subsets: ["latin"]})

const Header = () => {

    return(
        <header className={styles.header}>
            <Hero />
                <h1 className={lora.className}>Power mom</h1>
            <Navigation />
        </header>
    )
}

export default Header