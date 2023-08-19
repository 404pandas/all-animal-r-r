// todo- build this out
import React from "react";

// Local imports
import image404 from "../assets/images/404image.png";

// MUI imports
import Typography from "@mui/material/Typography";

const NoMatch = () => {
  return (
    <div id='noMatchContainer'>
      <img alt='404 error' src={image404} id='image404page'></img>
      <Typography variant='h4'>404:</Typography>
      <Typography variant='h5'> Page Not Found</Typography>
      <Typography variant='body1'>
        All available pages are listed in the
      </Typography>
      <Typography variant='body1'>
        navigation bar at the top of the page!
      </Typography>
    </div>
  );
};

export default NoMatch;
