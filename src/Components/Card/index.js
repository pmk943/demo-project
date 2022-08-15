//import Card from Materila Ui
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { hover } from "@testing-library/user-event/dist/hover";


import React from "react";


function CustomCard({title,...props}) {
  return (
    <Card {...props}>
      <CardContent>
        <Typography>{title}</Typography>
      </CardContent>
    </Card>
  );
}

export default CustomCard;
