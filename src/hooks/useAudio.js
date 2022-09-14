import React from 'react'

const useAudio = (audioRef, audioSelected) => {
  const [play, setPlay] = React.useState(true);
  const [timeAudio, setTimeAudio] = React.useState(0);
  const [durationAudio, setDurationAudio] = React.useState(0);

  const handlePlay = () => {
    setPlay(!play)
    if (play) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
  }

  // get the time of the audio
  const handleTimeUpdate = () => setTimeAudio(audioRef.current?.currentTime)

  React.useEffect(() => {
    if (audioRef.current) {
      // get the time of the audio in real time
      audioRef.current.addEventListener('timeupdate', handleTimeUpdate)
      setDurationAudio(audioRef.current.duration)
    }
  }, [audioSelected, audioRef.current?.duration])

  React.useEffect(() => {
    // detect if the audio is playing
    if(audioRef.current?.paused) setPlay(true)
  }, [audioRef.current?.paused])

  return {
    play,
    handlePlay,
    timeAudio,
    durationAudio
  }
}

export default useAudio;