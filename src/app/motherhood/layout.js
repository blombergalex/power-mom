import Link from "next/link";
import styles from './Layout.module.css'

const Layout = ({children}) => {
    return(
        <>
            <div className={styles.submenu}>
                <Link className={styles.subItem} href="/motherhood/love">The Love of Motherhood</Link>
                <Link className={styles.subItem} href="/motherhood/courage">The Courage of Motherhood</Link>
            </div>
            {children}
        </>
    )
}

export default Layout