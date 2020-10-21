import React from "react";
import { Link } from "react-router-dom";

const PlantCard = ({ plant, getPlantByID, updatePlantWater }) => {
  return (
    <div className="plant-card">
      <div body inverse color="info">
        <div className="card-body-wrapper">
          <div>
            <div>
              <h3>{plant.plant_name}</h3>
            </div>
            <div>
              <span>
                <p>Last Water Date: {plant.date_last_watered}</p>
              </span>
              <span>
                <p>Next Water Date: {plant.next_watering}</p>
              </span>
            </div>
          </div>
          <Link to={`/plants/${plant.id}`}>
            <button
              color="secondary"
              onClick={() => {
                getPlantByID(plant.id);
              }}
            >
              Edit
            </button>
          </Link>
        </div>

        <img src={plant.plant_url} width="100%" alt="Card image cap" />
        <div>
          <span>
            Description: {plant.desription} <br />
            Species: {plant.species} <br />
            Increment: {plant.increment} days <br />
          </span>
        </div>
        <footer>
          <button
            color="primary"
            className="water-button"
            onClick={() => {
              updatePlantWater(plant.id);
            }}
          >
            Water
          </button>
        </footer>
      </div>
    </div>
  );
};

export default PlantCard;