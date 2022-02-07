import React,{useState} from "react";

function ToyForm({onAddToy, toyURL}) {
  let [formData, setFormData] = useState({
    name:'',
    image:''
    })

  function handleChange(event) {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    }

  function handleSubmit(event) {
      event.preventDefault();
  
      fetch(toyURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((newToy) => onAddToy(newToy));
  
    }
  
  
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default ToyForm;
