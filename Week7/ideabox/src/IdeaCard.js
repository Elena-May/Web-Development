import React from 'react'

const IdeaCard = ({name, description , id, removeIdea, isFavorite}) => (
  <div className="IdeaCardOuter">

    <div className="IdeaCard">
    <h1>{name}</h1>
    <p>{description}</p>
    </div>
    <div className={`Card ${ isFavorite && 'favorite' }`}></div>

    <button className="remove" onClick={() => removeIdea(id)}>Remove</button>

  </div>
)


export default IdeaCard