import React from 'react'
import styles from './Navbar.module.scss'

import logoB from '../../assets/logo_b.png'
import Button from '../Custom/Button/Button'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__logo}>
        <img src={logoB} alt="logo" />
      </div>
      <div className={styles.navbar__to__action}>
        <Button
          label="Plant a seed"
          onClick={() => console.log('I planted a seed 🌱')}
          style={{  
            cursor: "pointer",
            zIndex: 90
          }}
        />
      </div>
    </nav>
  )
}

export default Navbar