import React from "react"
// const toyIDAPI = "`http://localhost:3001/toys/${id}"


const ToyCard = ({toy, onDeleteToy, onUpdateToy} ) => {
  const { id, name, image, likes } = toy
  

  const handleDeleteClick = () => {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        onDeleteToy(toy)
      })
  }
  const handleLikeClicks = () => {
    const updateToyObject = {
      likes: toy.likes + 1,
    }
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateToyObject),
    })
      .then((r) => r.json())
      .then(onUpdateToy)
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={image} alt={name} className="toy-avatar" />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLikeClicks}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDeleteClick}>Donate to GoodWill</button>
    </div>
  )
}

export default ToyCard
