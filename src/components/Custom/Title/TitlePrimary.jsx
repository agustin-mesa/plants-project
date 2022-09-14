import React from 'react'
import styles from './Title.module.scss'

import * as colors from "/src/globals.module.scss";

const TitlePrimary = ({children, color, style, show = "show__01"}) => {
  return (
    <h1
      className={`${styles.title__primary} ${styles.default} ${show ? styles[show] : ""}`}
      style={{
        color: color === "white" ? 
          colors.white
        : colors.green_01,
        ...style
      }}
    >{children}</h1>
  )
}

export default TitlePrimary;