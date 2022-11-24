import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const CardView = ({title, children}) => {
  return (
    <Card sx={{ minWidth: 275 }} className="bg-dark card-mr">
      <CardContent className="text-white">
        <Typography
          sx={{ fontSize: 40, textAlign: "center" }}
        >
          {title}
        </Typography>
        {children}
      </CardContent>
    </Card>
  );
};
