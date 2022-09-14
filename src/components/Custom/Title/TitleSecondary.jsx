import React from 'react'
import styles from './Title.module.scss'

import * as colors from "/src/globals.module.scss";

const TitleSecondary = ({children, color, style, show = "show__01"}) => {
  return (
    <h2
      className={`${styles.title__secondary} ${styles.default} ${show ? styles[show] : ""}`}
      style={{
        color: color === "white" ? 
          colors.white
        : colors.green_01,
        ...style
      }}
    >{children}</h2>
  )
}

export default TitleSecondary;