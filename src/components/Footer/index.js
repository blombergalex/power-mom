import styles from './Footer.module.css'

const Footer = () => {

    const currentDate = new Date().getFullYear();

    return(
        <footer className={styles.footer}>
            <p> <a href='https://github.com/blombergalex' target='_blank'>@blombergalex</a> {currentDate}</p>
        </footer>
    )
}

export default Footer