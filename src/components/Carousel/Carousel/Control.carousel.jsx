import React from 'react'

const Control = ({orientation}) => {
  return (
    <span>{orientation === "prev" ? "Prev" : "Next"}</span>
  )
}

export default Control