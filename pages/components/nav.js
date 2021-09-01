import Link from 'next/link'
import Logo from '../../public/logo.svg'
import Menu from '../../public/menu.svg'
import Facebook from '../../public/facebook.svg'
import Twitter from '../../public/twitter.svg'
import Instagram from '../../public/instagram.svg'
import styles from '../../styles/nav.module.css'

 
export default function nav() {

    return (
        <div>
         <div className={styles.nav}>
        <div className={styles.logo}>
            <Logo/>
        </div>
        <div className={styles.navbar}>
            <ul>
                <li>
                    <Link href="/about">
                    <a>about me</a>
                    </Link>
                </li>
                <li>
                    <Link href="/project">
                        <a>projects</a>
                    </Link>
                </li>
                <li>
                    <Link href="/service">
                        <a>services</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <a>contact</a>
                    </Link>
                </li>
            </ul>
        </div>
        <div className={styles.navlinks}>

    <Facebook>
        <a href="https://www.facebook.com"/>
    </Facebook>
    <Twitter></Twitter>
    <a href="https://www.twitter.com"/>
    <Instagram>
        <a href="https://www.instagram.com"/>
    </Instagram>
        </div>
        <div className={styles.menu}>
            <Menu/>
        </div>
        </div>
        </div>
    )
}
