import bg00 from './assets/bg_00.png'
import object00 from './assets/object_00.png'
import bg01 from './assets/bg_01.png'
import bg02 from './assets/bg_02.png'
import bg03 from './assets/bg_03.webp'
import bg04 from './assets/bg_04.png'
import bg05 from './assets/bg_05.mp4'

export const sections = [
  {
    title: <><b>Nature</b> greatly helps, <b>protects</b> and <b>sustains</b> our daily lives.</>,
    paragraph: "",
    src: {
      background: bg00,
      object: object00
    },
    styleTitle: {},
    showAnimation: "show__01"
  },
  {
    title: <>Plants <b>improve</b> and <b>purify</b> the air.</>,
    paragraph: "",
    src: {
      background: bg01,
      object: ""
    },
    styleTitle: {
      textAlign: "right",
      alignItems: "flex-end"
    },
    showAnimation: "show__02"
  },
  {
    title: <>They are a <b>great benefit</b> for our home</>,
    paragraph: "",
    src: {
      background: bg02,
      object: ""
    },
    styleTitle:{
      textAlign: "right",
      justifyContent: "flex-end",
      alignItems: "flex-end",
    },
    showAnimation: "show__03"
  },
  {
    title: <>Help to <b>sleep better</b></>,
    paragraph: "",
    src: {
      background: bg03,
      object: ""
    },
    styleTitle:{
      alignItems: "flex-start",
      justifyContent: "flex-start",
      padding: "180px 3% 3%"
    },
    showAnimation: "show__01"
  },
  {
    title: <>They even have <b>medicinal powers</b></>,
    paragraph: "",
    src: {
      background: bg04,
      object: ""
    },
    styleTitle: {
      textAlign: "right",
      alignItems: "flex-end",
      justifyContent: "flex-end",
    },
    showAnimation: "show__03"
  },
  {
    title: "",
    paragraph: <>
      Like these <b>benefits</b>, there are <b>more than +50</b>,
      and that is why <b>plants are important</b> for both our planet and our lives.
      <br />
      <br />
      So, I invite you to plant your own friend. <b>Just start with a seed!</b>
    </>,
    src: {
      background: bg05,
      object: ""
    },
    styleTitle:{},
    showAnimation: "show__01"
  },
]