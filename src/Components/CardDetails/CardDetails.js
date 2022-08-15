import { textAlign } from "@mui/system";
import React from "react";
import { useParams } from "react-router-dom";
import "./CardDetails.css";


function CardDetails() {
  let { card } = useParams();
  return (
    <div>
      <h2 style={{color:"black", textAlign:"center"}}> Welcome to {card}</h2>
    </div>
  );
}

export default CardDetails;
