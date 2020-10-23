import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getPlantByID } from "../store/actions/index";
import PlantCard from "./Plant";

const mockPlant = {
    plant_name: "Rose",
    description: "To be kissed by",
    date_last_watered: "10/20/2020 12:00 PM",
    increment: 10,
    species: "rose",
    plant_url:
      "https://www.gardeningknowhow.com/wp-content/uploads/2019/11/red-rose.jpg",
  };

const PlantList = (props) => {
    const { isFetching, data, error, getPlantByID } = props;

    useEffect(() => {
      getPlantByID();
    }, []);
  
    if (isFetching) return <div>Loading...</div>;
  
    if (error !== "") {
      return <div style={{ color: "red" }}>{error}</div>;
    }
    return(
        <div className="plantlist-container">
            <h3>Your Plants</h3>
            {data.map(plant => {
                return <PlantCard key={plant.id}{...plant}/>
            })}
        </div>

)
}
const mapStateToProps = state => {
   return{
    data:state.plant, 
    isFetching:state.isFetching,
    error:state.error
   }
}

export default connect(mapStateToProps,{ getPlantByID })(PlantList);