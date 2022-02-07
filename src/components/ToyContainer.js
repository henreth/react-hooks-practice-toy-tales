import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys,toyURL,onDeleteToy, onUpdateToy}) {
  let toysToDisplay = toys.map((toy)=>
  {return <ToyCard
    key={toy.id}
    toy={toy}
    toyURL={toyURL}
    onDeleteToy={onDeleteToy}
    onUpdateToy={onUpdateToy}
    />
  })

  return (
    <div id="toy-collection">
      {toysToDisplay}
      </div>
  );
}

export default ToyContainer;
