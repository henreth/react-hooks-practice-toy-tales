import React from "react";

function ToyCard({toy,toyURL,onDeleteToy,onUpdateToy}) {

  function handleDeleteClick() {
    // Call onDeleteItem, passing the deleted item
    fetch(`${toyURL}/${toy.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onDeleteToy(toy));
  }

  function handleUpdateClick(){
    fetch(`${toyURL}/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes:toy.likes+1
      }),
    })
      .then((r) => r.json())
      .then((updatedToy) => onUpdateToy(updatedToy));  

  }


  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button 
        className="like-btn"
        onClick={handleUpdateClick}>
          Like {"<3"}</button>
      <button 
        className="del-btn"
        onClick={handleDeleteClick}>
          Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
