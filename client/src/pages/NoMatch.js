// todo- build this out
import React from "react";

// Local imports
import image404 from "../../src/assets/images/404image.png";

// MUI imports
import Typography from "@mui/material/Typography";

const NoMatch = () => {
  return (
    <div id='noMatchContainer'>
      <img alt='404 error' src={image404} id='image404page'></img>
      <Typography variant='h3'>404:</Typography>
      <Typography variant='h4'> Page Not Found</Typography>
    </div>
  );
};

export default NoMatch;
