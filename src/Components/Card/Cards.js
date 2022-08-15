import "./Cards.css";
//import Card from Materila Ui
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

import React from "react";
export const mediaCards = [
  {
    image: "/img/laptop-coffee.jpeg",
    title: "Strategy Planning",
  },
  {
    image: "/img/laptop-coffee.jpeg",
    title: "Range Plan",
  },
  {
    image: "/img/laptop-coffee.jpeg",
    title: "Open to Buy",
  },
  {
    image: "/img/laptop-coffee.jpeg",
    title: "Assortment Plan",
  },
  {
    image: "/img/laptop-coffee.jpeg",
    title: "Business Plan",
  },
  {
    image: "/img/laptop-coffee.jpeg",
    title: "ASR",
  },
  {
    image: "/img/laptop-coffee.jpeg",
    title: "Merchandise Financial Plan",
  },
  {
    image: "/img/laptop-coffee.jpeg",
    title: "Sale Plan",
  },
  {
    image: "/img/laptop-coffee.jpeg",
    title: "Margin Plan",
  },
  {
    image: "/img/laptop-coffee.jpeg",
    title: "WSSI/MSSI",
  },
  {
    image: "/img/laptop-coffee.jpeg",
    title: "Option Plan",
  },
  {
    image: "/img/laptop-coffee.jpeg",
    title: "Store Grading",
  },
];

function Cards() {
  let navigate = useNavigate();
  const renderItems = () => {
    return mediaCards.map((item) => (
      <div className="display-card" onClick={() => {
        navigate(`/cardDetails/${item.title}`)
      }}>
        <Card
          style={{
            width: 250,
            height: 100,
            cursor: "pointer",
            background: `${item.title === "Range Plan" ? "Orange" :  item.title === "Open to Buy" ? "Green" : "DeepSkyBlue"}`,
          }}
        >
          <CardContent>
            <Typography sx={{ fontSize: 18, color:"white" ,textAlign:"center" ,paddingTop:"50" }} >
              {item.title}
            </Typography>
          </CardContent>
        </Card>
      </div>
    ));
  };
  return <div className="display-cards">{renderItems()}</div>;
}

export default Cards;

