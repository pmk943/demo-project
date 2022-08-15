import { Card, CardActions, CardContent, Typography } from "@mui/material";
import React from "react";
import { mediaCards } from "../Card/Cards";

function Card2() {
  // let navigate = useNavigate();
  const renderItems = () => {
    return mediaCards.map((item) => (
      <div
        className="display-card"
        // onClick={() => {
        //   navigate(`/cardDetails/${item.title}`);
        // }}
      >
        <Card
          style={{
            width: 250,
            height: 140,
            cursor: "pointer",
            margin: 0,
            padding: 0,
          }}
        >
          <CardContent
            sx={{
              height: "75%",
              margin: 0,
              padding: 0,
              background: `${
                item.title === "Range Plan"
                  ? "red"
                  : item.title === "Open to Buy"
                  ? "Green"
                  : "DeepSkyBlue"
              }`,
            }}
          >
            {/* <Typography sx={{ fontSize: 18, color:"white" ,textAlign:"center" ,paddingTop:"50" }} >
              {item.title}
            </Typography> */}
          </CardContent>
          <CardActions
            disableSpacing
            sx={{
              background: "#F0EEEE",
              width: 250,
              height: "25%",
              textAlign: "center",
              margin: 0,
              padding: 0,
            }}
          >
            <div
              style={{
                width: "100%",
                fontSize: 18,
                display: "flex",
                color: "black",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {item.title}
            </div>
          </CardActions>
        </Card>
      </div>
    ));
  };
  return <div className="display-cards">{renderItems()}</div>;
}

export default Card2;
