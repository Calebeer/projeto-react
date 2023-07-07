import {Link} from 'react-router-dom';
import styles from './Navbar.module.css'


function NavBar(){
    return(
      <nav>
        <div className={styles.menubtn}>
            <i class="fa fa-bars fa-2x" onclick="menuShow()"></i>
        </div>

        <ul>
            <li> 
                <Link  className='link' to="/" > Home</Link>
              </li>
            <li>
            <Link className='link' to="/empresa" >Empresa</Link>
              </li>
            <li> 
            <Link className='link' to="/contato" >Contato</Link>
               </li>
            
        </ul>
    </nav>
    )
}

export default NavBar;