import React from 'react'
import styles from './Item.carousel.module.scss'

import TitlePrimary from '../../Custom/Title/TitlePrimary'
import TitleSecondary from '../../Custom/Title/TitleSecondary'

import sound from '../../../assets/bg_sound.mp3'
import useAudio from '../../../hooks/useAudio'

import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import FlowEmojiCursor from './FlowEmoji.cursor'

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
  const flowEmojiRef = React.useRef();

  const [showGif, setShowGif] = React.useState(false);

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

  const handleMouseMove = (e) => {
    // get the position of the mouse
    const { clientX, clientY } = e;
    setTimeout(() => {
      flowEmojiRef.current.style.left = `${clientX}px`;
      flowEmojiRef.current.style.top = `${clientY}px`;
    }, 50);
  }

  const handleFlowGif = () => {
    setShowGif(true);
    setTimeout(() => {
      setShowGif(false);
    }, 3000);
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
          <TitlePrimary 
            show={showAnimation} 
            style={{opacity: "0"}}
            onMouseMove={handleMouseMove}
            onClick={handleFlowGif}
          >
            {title}
          </TitlePrimary>
        }
        {paragraph &&
          <TitleSecondary 
            show={showAnimation} 
            style={{opacity: "0"}}
            onMouseMove={handleMouseMove}
            onClick={handleFlowGif}
          >
            {paragraph}
          </TitleSecondary>}
          {src.background.includes("mp4") &&
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
        <FlowEmojiCursor
          ref={flowEmojiRef}
          showGif={showGif}
        />
      </div>
      <div className={styles.item__src}>
        {src.background.includes("mp4") ? 
          <>
            <video autoPlay loop muted ref={videoRef} >
              <source src={src.background} type="video/mp4" />
            </video>
            <video autoPlay loop style={{display: "none"}} ref={audioRef}>
              <source src={sound} type="audio/mpeg" />
           </video>
          </>
          :
          <MouseParallaxContainer
            containerStyles={{
              width: "100%",
              height: "100%",
            }}
            resetOnLeave
          >
            <MouseParallaxChild 
              factorX={0.01} factorY={0.01}
              updateStyles={{
                background: `url(${src.background}) no-repeat center center`,
                top: "-30px",
                left: "-30px",
                bottom: "-30px",
                right: "-30px",
                position: "absolute"
              }} 
            />
            <MouseParallaxChild 
              updateStyles={{
                top: "-30px",
                left: "-30px",
                bottom: "-30px",
                right: "-30px",
                position: "absolute"
              }}
              factorX={0.02} factorY={0.02}
            >
              <img src={src.object} />
            </MouseParallaxChild>
          </MouseParallaxContainer>
        }
      </div>
    </div>
  )
}

export default ItemCarousel