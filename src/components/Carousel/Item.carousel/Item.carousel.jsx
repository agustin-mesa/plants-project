import React from 'react'
import styles from './Item.carousel.module.scss'

import TitlePrimary from '../../Custom/Title/TitlePrimary'
import TitleSecondary from '../../Custom/Title/TitleSecondary'

import sound from '../../../assets/bg_sound.mp3'
import useAudio from '../../../hooks/useAudio'

const ItemCarousel = ({
  title,
  paragraph,
  src,
  styleTitle,
  showAnimation,
  itemSelected
}) => {
  const audioRef = React.useRef();
  const videoRef = React.useRef();

  const { play, handlePlay, handlePause, timeAudio, durationAudio } = useAudio(audioRef, itemSelected);

  const playVideoAndAudio = () => {
    handlePlay();
    videoRef.current.play();
  }

  const pauseVideoAndAudio = () => {
    handlePause();
    videoRef.current.pause();
  }

  const handlePlayVideo = () => {
    if (videoRef.current.paused) playVideoAndAudio();
    else pauseVideoAndAudio();
  }

  React.useEffect(() => {
    if (videoRef.current && audioRef.current) {
      if (itemSelected === 5) playVideoAndAudio();
      else pauseVideoAndAudio();
    } 
  }, [itemSelected])
   
  return (
    <div className={styles.carousel__item}>
      <div className={styles.item__content} style={styleTitle}>
        {title &&
          <TitlePrimary show={showAnimation} style={{opacity: "0"}}>
            {title}
          </TitlePrimary>
        }
        {paragraph &&
          <TitleSecondary show={showAnimation} style={{opacity: "0"}}>
            {paragraph}
          </TitleSecondary>}
          {src.includes("mp4") &&
          <div className={styles.controls__audio}>
            <button onClick={handlePlayVideo}>
              <i className={play ? "fas fa-pause" : "fas fa-play"}/>
            </button>
            {/* bars */}
            <div className={styles.bars}>
              <div className={styles.bar} style={{
                width: `${timeAudio * 100 / durationAudio}%`
              }}/>
            </div>
          </div>}
      </div>
      <div className={styles.item__src}>
        {src.includes("mp4") ? 
          <>
            <video autoPlay loop muted ref={videoRef} >
              <source src={src} type="video/mp4" />
            </video>
            <video autoPlay loop style={{display: "none"}} ref={audioRef}>
              <source src={sound} type="audio/mpeg" />
            </video>
          </>
        : <img src={src} />}
      </div>
    </div>
  )
}

export default ItemCarousel