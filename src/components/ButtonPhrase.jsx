import getRandomFromArr from "../services/getRandomFromArr"
import phrases from '../utils/phrases.json'
import bgArr from '../utils/bgArr.json'

const ButtonPhrase = ({setPhaseRandom,setBgApp}) => {

    const handleChangePhrase = () => {
     const quote = getRandomFromArr(phrases)
        setPhaseRandom(quote)
        setBgApp(getRandomFromArr(bgArr))
        

    }
  return (
    <button className="app__btn" 
    onClick={handleChangePhrase}
    >
      Ver otro
      </button>

  )
}

export default ButtonPhrase