import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

export const CardCollapse = ({ title, body, priority, done, style, children }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  let color;
  if (priority === "urgent") {
    color = "error";
  } else if (priority === "high") {
    color = "secondary";
  } else if (priority === "medium") {
    color = "warning";
  } else if (priority === "low") {
    color = "success";
  } 

  return (
    <Card sx={{ borderRadius: 4, margin: "24px 0" }} style={style}>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <h1>{title}</h1>
        <div>
         {!done && <Chip label={priority} color={color}/>}
          <IconButton
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            sx={{ marginLeft: "5px" }}
          >
            {!expanded ? <AddIcon /> : <RemoveIcon />}
          </IconButton>
        </div>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <div>
            <Typography
              sx={{ wordBreak: "break-word" }}
              variant="body1"
              paragraph
            >
              {body}
            </Typography>
          </div>

          {children}
        </CardContent>
      </Collapse>
    </Card>
  );
};
