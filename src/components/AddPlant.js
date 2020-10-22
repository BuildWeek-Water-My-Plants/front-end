import React, { useState } from "react";
import { connect } from "react-redux";
import {addPlant} from '../store/actions'

const AddPlant = ({addPlant, userID}) => {

    const mockPlant = {
        plant_name: "Rose",
        description: "To be kissed by",
        date_last_watered: "10/20/2020 12:00 PM",
        increment: 10,
        species: "rose",
        plant_url:
          "https://www.gardeningknowhow.com/wp-content/uploads/2019/11/red-rose.jpg",
      };
 
      const mockHandleSubmit = () => {
        addPlant(mockPlant, userID);
      };

      const [newPlant, setNewPlant] = useState({
        plant_name: "",
        description: "",
        date_last_watered: "",
        increment: 1,
        next_watering: "",
        species: "",
        plant_url: "",
        date_created: "",
      });

      const handleSubmit = () => {
        console.log(newPlant);
        addPlant(newPlant, userID);

        setNewPlant({
            plant_name: "",
            description: "",
            date_last_watered: "",
            increment: 1,
            next_watering: "",
            species: "",
            plant_url: "",
            date_created: "",
          });
        };

        const handleChange = (e) => {
            setNewPlant({
              ...newPlant,
              [e.target.name]: e.target.value,
            });
          };

          return (
            <div>
                  <form>
                        <div>
                          <label for="name">Name of plant</label>
                          <input
                            type="text"
                            name="plant_name"
                            placeholder="e.g ferny"
                            onChange={(e) => {
                              handleChange(e);
                            }}
                          />
                        </div>
                          <label for="species">Species</label>
                          <input
                            type="text"
                            name="species"
                            placeholder="e.g Bracken"
                            onChange={(e) => {
                              handleChange(e);
                            }}
                          />
        
                    <div>
                      <label for="increment">Watering Increment(Days)</label>
                      <input
                        type="number"
                        name="increment"
                        placeholder="e.g 2"
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      />
                    </div>
                    <div>
                      <label for="plant last watered">Last Watered</label>
                      <input
                        type="date"
                        name="date_last_watered"
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      />
                    </div>
        
                    <div>
                      <label for="imageURL">Plant Image URL</label>
                      <input
                        type="text"
                        name="plant_url"
                        placeholder="e.g https://myimageurl.jpg"
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      />
                    </div>
                    <div>
                      <label for="description">Description</label>
                      <input
                        type="textarea"
                        name="description"
                        placeholder="test plant"
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      />
                    </div>
                  </form>
                <footer>
                  <button color="primary" onClick={handleSubmit}>
                    Add Plant
                  </button>
                  <button color="secondary">
                    Cancel
                  </button>
                  <button color="info" onClick={mockHandleSubmit}>
                    MOCKADD
                  </button>
                </footer>
            </div>
          );
        };
        
        export default connect(null, {addPlant})(AddPlant);