// todo- build this out
import React from "react";

// MUI import
import Typography from "@mui/material/Typography/index.js";
import Avatar from "@mui/material/Avatar";

export default function About() {
  return (
    <section className='my-5'>
      <div className='my-2' id='contact-body'>
        <div className='profile-img my-5'>
          <Avatar sx={{ width: 100, height: 100 }}>AARR</Avatar>
        </div>
        <Typography variabe='body2'>
          Helvetica put a bird on it church-key Blue Bottle banjo bespoke brunch
          Etsy authentic Marfa quinoa typewriter plaid direct trade small batch
          wayfarers bicycle rights cliche craft beer gastropub single-origin
          coffee Godard Carles you probably haven't heard of them irony pickled
          kitsch synth sriracha gentrify literally heirloom blog Truffaut paleo
          scenester
        </Typography>
        <Typography variant='body2'>
          Echo Park sriracha Pinterest vegan biodiesel 90's irony iPhone
          Kickstarter Carles crucifix kitsch narwhal dreamcatcher pickled trust
          fund selvage art party letterpress Tumblr post-ironic kogi Thundercats
          Tonx Brooklyn Pitchfork Odd Future authentic normcore freegan leggings
          Schlitz chambray organic tousled retro fap squid street art church-key
          fashion axe Wes Anderson bespoke whatever gentrify banh mi you
          probably haven't heard of them American Apparel next level pug ugh.
        </Typography>
      </div>
    </section>
  );
}
