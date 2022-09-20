import React from 'react'
import styles from './Item.carousel.module.scss'

import gif from '../../../assets/plant_motion.gif'
import frame1 from '../../../assets/plant_motion_frame1.png'

const FlowEmojiCursor = React.forwardRef(({showGif}, ref) => {
  return (
    <div
      className={styles.flow__emoji}
      ref={ref}
    >
      {showGif ? <img src={gif} alt="plant" />
        : <img src={frame1} alt="plant" />}
    </div>
  )
})

export default FlowEmojiCursor