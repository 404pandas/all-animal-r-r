// todo- build this out
import React from "react";

// MUI import
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

// Local import
import pigImage from "../../src/assets/images/pigphoto.jpg";

export default function About() {
  return (
    <section className='my-5'>
      <div className='my-2' id='contact-body'>
        <div className='profile-img my-5'>
          <Avatar sx={{ width: 100, height: 100 }} src={pigImage}></Avatar>
        </div>
        <div id='about-content'>
          <Typography variant='body2'>
            At less than four years old, founder Mary (Jackson) Elenius was
            first pictured listening to an animal's heartrate with a
            stethescope. Naturally, everything she shaped her life around was to
            help animals. Growing up in her church, there was an individual in
            the band who was the local zoo's veterinarian, Dayton Williams. He
            quickly became her idol alongside Steve Irwin, and she was blessed
            enough to become a veterinary technician for his private practice.
            His love for all kinds of animals, along with his passionate and
            talented lead veterinary technician Abby Ontjes, fueled Mary's
            desire to do anything she could to help every animal, regardless of
            genus and species.
          </Typography>
          <Typography variant='body2'>
            Mary now spends her time in the Knoxville, Tennesse area, answering
            any calls she receives. The name of the charity she runs, All Animal
            Rehabilitation and Release, embodies the namesake of Dayton
            William's practice and spirit. Regardless of the animal in need's
            species, she runs into every opportunity to aid every animal in
            honor of her personal heroes.
          </Typography>
        </div>
      </div>
    </section>
  );
}
