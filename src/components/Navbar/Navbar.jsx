import React from 'react'
import styles from './Navbar.module.scss'

import logoB from '../../assets/logo_b.png'
import Button from '../Custom/Button/Button'

const Navbar = () => {
  const [plant, setPlant] = React.useState(false)

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__logo}>
        <img src={logoB} alt="logo" />
      </div>
      <div className={styles.navbar__to__action}>
        <Button
          label={plant ? "Plant a seed" : 'Planted 🌱'}
          onClick={() => setPlant(!plant)}
          style={{  
            cursor: "pointer",
            zIndex: 90,
            width: "170px",
          }}
        />
      </div>
    </nav>
  )
}

export default Navbar