'use client'
import Link from "next/link";
import { usePathname } from 'next/navigation';
import styles from './Navigation.module.css'

const menuItems = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Motherhood',
        link: '/motherhood'
    },
    {
        name: 'Growth',
        link: '/growth'
    },
    {
        name: 'Celebration',
        link: '/celebration'
    },
]

const Navigation = () => {
    const path = usePathname();

    return(
        <nav className={styles.navigation}>
            {menuItems.map((item, index) => (
                <Link key={index} href={item.link}>
                    <span className={path === item.link ? styles.active : ''}>
                        {item.name}
                    </span>
                </Link>
            ))}
        </nav>
    )
}

export default Navigation