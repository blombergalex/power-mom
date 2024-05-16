import Image from 'next/image'
import Poppies from '../../../public/images/poppies.jpg'
import { Dancing_Script } from 'next/font/google'
import styles from './Hero.module.css'

const dancingScript = Dancing_Script({subsets: ["latin"]})

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.heroImage}>
                <Image
                    src={Poppies}
                    alt="Poppies"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className={styles.welcomeMessage}>
                <h2 className={dancingScript.className}>Welcome to Power Mom</h2>
            </div>
        </div>
    )
}

export default Hero