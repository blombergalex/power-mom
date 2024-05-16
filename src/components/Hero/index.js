'use client'
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image'
import Poppies from '../../../public/images/poppies.jpg'
import { Dancing_Script } from 'next/font/google'
import styles from './Hero.module.css'

const dancingScript = Dancing_Script({subsets: ["latin"]})

const Hero = () => {
    const [showText, setShowText] = useState(false);
    const welcomeRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowText(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);


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
            <div className={`${styles.welcomeMessage} ${showText ? styles.show : ''}`} ref={welcomeRef}>
                <h2 className={dancingScript.className}>Welcome to Power Mom</h2>
            </div>
        </div>
    )
}

export default Hero