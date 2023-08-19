// todo- build this out
import Typography from "@mui/material/Typography";
import React from "react";

// local imports
import homepage from "../assets/images/homepage.png";

export default function Home() {
  return (
    <div id='home-body'>
      <Typography variant='h5' id='welcome'>
        Welcome!
      </Typography>
      <Typography variant='body1' id='dear'>
        Dear visitors,
      </Typography>
      <Typography variant='body1' id='home-text'>
        AAR&R is a rescue that separates itself from other rescues as being
        willing to take in any animal, regardless of species. It takes great
        pride in being completely open in regards to its donations and
        expendatures. If you have any questions after navigating this website,
        please feel free to contact us through our contact form!
      </Typography>
      <Typography variant='body1'>
        {" "}
        Sincerely, Mary Elenius (founder)
      </Typography>{" "}
      <img
        src={homepage}
        alt='Two individuals with a heart comprised of emoticons'
        id='homepage-picture'
      ></img>
    </div>
  );
}
