import React from "react"
import getRandom from "../services/getRandom"
import arrayPhrases from "../utils/arrayPhrases.json"
import arrayImages from '../utils/arrayImgs.json'

const ButtonPhrase = ({setPhrase, setImage,}) => {

    const handlePhrase = () => {
        setPhrase(getRandom(arrayPhrases))
        setImage(getRandom(arrayImages))
    }

  return (
    <button onClick={handlePhrase} className="btn">
        prueba tu suerte
    </button>
  )
}
export default ButtonPhrase