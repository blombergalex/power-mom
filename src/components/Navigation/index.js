import styles from './Navigation.module.css'
import Link from "next/link";

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

    return(
        <nav className={styles.navigation}>
            {menuItems.map((item, index) => 
            <Link key={index} href={item.link}>{item.name}</Link>)}
        </nav>
    )
}

export default Navigation