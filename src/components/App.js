import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

const toyURL = 'http://localhost:3001/toys';

function App() {
  const [showForm, setShowForm] = useState(false);
  let [toys, setToys] = useState([])


  useEffect(() => {
    fetch(toyURL)
      .then((r) => r.json())
      .then((toys) => setToys(toys));    
    }, []);


  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleAddToy(newToy) {
    setToys([...toys, newToy]);  
  }

  function handleDeleteToy(deletedToy) {
    setToys(toys.filter((toy)=>toy.id !==deletedToy.id))
  }

  function handleUpdateToy(updatedToy) {
    const updatedToys = toys.map((toy) => {
      if (toy.id === updatedToy.id) {
        return updatedToy;
      } else {
        return toy;
      }
    });
    setToys(updatedToys);
  }


  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleAddToy} toyURL={toyURL} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer
        toys={toys}
        onDeleteToy={handleDeleteToy}
        onUpdateToy={handleUpdateToy}
        toyURL={toyURL} />
    </>
  );
}

export default App;
