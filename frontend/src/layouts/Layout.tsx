import { Outlet, Link } from 'react-router-dom'
import styles from "../css/layout.module.css"

const Layout = () => {
  return (
    <div className={styles.container}>
      <nav >
        <ul className={styles.flex}>
          <li>
            <Link className={styles.btn} to="/">Añadir nuevo texto</Link>
          </li>
          <li>
            <Link className={styles.btn} to="/lista-de-textos">Lista de textos</Link>
          </li>          
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  )
}

export default Layout