import React, { useState, useEffect } from "react";

import Header from "./Header"
import ToyForm from "./ToyForm"
import ToyContainer from "./ToyContainer"
// const toyAPI = "http://localhost:3001/toys"



const App = () => {
  const [showForm, setShowForm] = useState(false)
  const [toys, setToys, ] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((r) => r.json())
      .then(setToys);
  }, []);


  const handleClick = () => {
    setShowForm((showForm) => !showForm)
  }
  const handleAddToy = (newToy) => {
    setToys([...toys, newToy])
  }

  const handleDeleteToy = (toyToDelete) => {
    const updatedToys = toys.filter((toy) => toy.id !== toyToDelete.id)
    setToys(updatedToys)
  }

  const handleUpdateToy = (updatedToy) => {
    const updatedToys = toys.map((toy) =>
      toy.id === updatedToy.id ? updatedToy : toy
    );
    setToys(updatedToys)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleAddToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer
        toys={toys}
        onDeleteToy={handleDeleteToy}
        onUpdateToy={handleUpdateToy}
      />
    </>
  );
}

export default App
