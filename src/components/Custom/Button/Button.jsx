import React from 'react'
import styles from './Button.module.scss'

const Button = ({primary = true, label, onClick, style}) => {
  return (
    <button
      className={`${styles.btn} ${primary ? styles.primary : styles.secondary}`}
      style={style}
      onClick={onClick}>
      {label}
    </button>
  )
}

export default Button