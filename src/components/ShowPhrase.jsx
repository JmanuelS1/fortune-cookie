import React from "react"

const ShowPhrase = ({ phrase }) => {
  return (
    <div className="txt">
        <p>{phrase.phrase}</p>
        <p>Fuente: {phrase.author}</p>
    </div>
  )
}
export default ShowPhrase