import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const UpdatePlant = ({ plant, updatePlant, deletePlant }) => {
  const [updatePlantData, setUpdatePlantData] = useState({});
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(updatePlantData);
    updatePlant(updatePlantData, plant.id);
    history.push("/");
  };

  const handleChange = (e) => {
    setUpdatePlantData({
      ...updatePlantData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDelete = () => {
    deletePlant(plant.id);
    history.push("/");
  };

  if (
    Object.keys(plant).length != 0 &&
    Object.keys(updatePlantData).length == 0
  ) {
    setUpdatePlantData(plant);
  }
  return (
    <div className="auth-wrapper">
      <form className="auth-inner" onSubmit={(e) => handleSubmit(e)}>
        <div className="edit-header">
          <h2>Edit your plant</h2>
          <button color="danger" onClick={handleDelete}>
            DELETE
          </button>
        </div>
            <label for="name">Name</label>
              <input
                type="text"
                name="plant_name"
                placeholder={plant.plant_name}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              <label for="species">Species</label>
              <input
                type="text"
                name="species"
                placeholder={plant.species}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
          <label for="increment">Watering Increment(Days)</label>
          <input
            type="number"
            name="increment"
            placeholder={plant.increment}
            onChange={(e) => {
              handleChange(e);
            }}
          /> 
          <label for="imageURL">Plant Image URL</label>
          <input
            type="text"
            name="plant_url"
            placeholder={plant.plant_url}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <label for="description">Description</label>
          <input
            type="textarea"
            name="description"
            placeholder={plant.description}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        <button color="brown">Update</button>
      </form>
    </div>
  );
};
export default UpdatePlant;