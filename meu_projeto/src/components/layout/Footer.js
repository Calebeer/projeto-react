import {FaApple, FaFacebook, FaFacebookMessenger} from 'react-icons/fa'
import styles from './Footer.module.css'


function Footer(){
    return(
        <footer>
            <ul className={styles.social_list} >
                <li className={styles.icone} ><FaApple/></li>
                <li className={styles.icone} ><FaFacebook/></li>
                <li className={styles.icone} ><FaFacebookMessenger/></li>
            </ul>
            </footer>
    )
}

export default Footer;