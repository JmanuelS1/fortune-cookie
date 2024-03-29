import './App.css';
import { useState } from 'react'
import arrayPhrases from './utils/arrayPhrases.json'
import getRandom from './services/getRandom'
import ShowPhrase from './components/ShowPhrase';
import ButtonPhrase from './components/ButtonPhrase';
import arrayImages from './utils/arrayImgs.json'

function App() {

const [phrase, setPhrase] = useState(getRandom(arrayPhrases));
const [image, setImage] = useState(getRandom(arrayImages));



  const objStyles= {
    backgroundImage: `url(../assets/imgs/fondo${image}.jpg)`,

  }

  return (
  <div className='app' style={objStyles}>
    
    <h1 className='app__title'>
       Galletas de la fortuna
    </h1>

    
    <ShowPhrase 
    phrase={phrase}
    />

    <ButtonPhrase
    setPhrase={setPhrase}
    setImage={setImage}
    />
  </div>
  )
}

export default App
