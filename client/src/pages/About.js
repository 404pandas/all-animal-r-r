import React from "react";

// MUI import
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

// Local import

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "Bellyflop",
    description:
      "This was a duck that got separated from its mother due to high rapids in Falls Park, Sioux Falls, SD.",
    imgPath: "http://i.imgur.com/2P7lidr.jpg",
  },
  {
    label: "Gray Chinchilla Baby",
    description: "This was a rescued chinchilla in Sioux Falls, SD.",
    imgPath: "http://i.imgur.com/eutlaSc.jpg",
  },
  {
    label: "Neonatal dog",
    description: "This was Mary'a first bottle-fed dog.",
    imgPath: "http://i.imgur.com/L5Eqemh.jpg",
  },
  {
    label: "C-section dog",
    description:
      "This was Mary's first c-sectiion puppy, who was unresponsive upon birth. Using CPR, this puppy survived and is healthy.",
    imgPath: "http://i.imgur.com/OJjAhBQ.jpg",
  },
  {
    label: "Calming cat post-op",
    description:
      "This was a feline post-op for a declaw. Upon waking up, the cat was aggressive and hyper. Mary entered the cat's enclosure to calm it down and prevent any injury.",
    imgPath: "http://i.imgur.com/NWDMGYc.jpg",
  },
  {
    label: "Favorite patient",
    description:
      "After losing her Emotional Support Animal, Mary connected with this patient that reminded her of the lost ESA. This dog quickly became her favorite patient, and she wasn't shy about telling people this fact.",
    imgPath: "http://i.imgur.com/DVPwnlK.jpg",
  },
  {
    label: "Family",
    description:
      "This is a picture from Mary's maternity photoshoot, in which she desired her current pet to be involved in.",
    imgPath: "http://i.imgur.com/BQIb9su.jpg",
  },
  {
    label: "Deer",
    description:
      "This deer was found in the middle of the road after being shot in the hind-quarters and posing a danger to drivers.",
    imgPath: "http://i.imgur.com/vNqUGEw.jpg",
  },
  {
    label: "Frog",
    description:
      "Unrelated to her rescue ability, Mary frequently interacts with animals of all species.",
    imgPath: "http://i.imgur.com/bCgiPR0.jpg",
  },
  {
    label: "Goat",
    description:
      "Although this photo is at a petting zoo, Mary freqeuently helps animals of all species.",
    imgPath: "http://i.imgur.com/FzMG846.jpg",
  },
  {
    label: "Grown up chinchilla",
    description: "This is one of many of the rescued chinchillas.",
    imgPath: "http://i.imgur.com/LTol10o.jpg",
  },
  {
    label: "Hedgehog",
    description:
      "This is Mary's first exotic animal. Aimee shaped her love for the unique and diverse animal kingdom.",
    imgPath: "http://i.imgur.com/FqMZDnX.jpg",
  },
  {
    label: "Horse riding",
    description: "Mary overcame her fear of large animals startomg with her ",
    imgPath: "http://i.imgur.com/RNn4skO.jpg",
  },
  {
    label: "Costa Rica iguana",
    description:
      "Mary lived in Costa Rica for approximately 2 motnths. During that time, she got to interact with many exotic animals.",
    imgPath: "http://i.imgur.com/nbSrUsa.jpg",
  },
  {
    label: "Monkey",
    description:
      "This is a monkey who was imported to an environment they cannot thrive in. It reinforced Mary's passion of releasing animals back into their native environment, wherever that may be.",
    imgPath: "http://i.imgur.com/6ZelaaG.jpg",
  },
  {
    label: "Grown chinchilla",
    description:
      "Mary's first chinchilla, all grown up. Chinchillas remain her favorite species to rescue and work with.",
    imgPath: "http://i.imgur.com/LQpeA7B.jpg",
  },
  {
    label: "Nugget",
    description:
      "While working for her lifelong idol, Mary frequently took in neonatal kittens. Her first 'bottle kit' was Nugget, a cat with a trauamtic brain injury that came to her at four days old. She immediately fell in love and Nugget became a foster failure.",
    imgPath: "http://i.imgur.com/GLJRoOz.jpg",
  },
  {
    label: "Pig",
    description:
      "Mary wtih a regular of the Veterinarian she worked for, in for a hoof trim.",
    imgPath: "http://i.imgur.com/vmw30Lg.jpg",
  },
  {
    label: "Visiting vet",
    description:
      "Before becoming a veterinary technician, Mary would frequent her idol and best friend's private practice. This is a neonatal bottle fed kitten from that clinic.",
    imgPath: "http://i.imgur.com/icvoxtE.jpg",
  },
  {
    label: "Toad",
    description:
      "Although Mary hasn't personally attended to frogs, she regularly finds wildlife and captures their beauty.",
    imgPath: "http://i.imgur.com/h7ZRCbD.jpg",
  },
  {
    label: "Turtle",
    description:
      "This is a turtle that came in for regular evaluation. Mary is honored every time she interacts with an owner who prioritizes the animal's needs.",
    imgPath: "http://i.imgur.com/PnHD6hc.jpg",
  },
  {
    label: "Vader",
    description:
      "Vader is the life and soul of every interaction Mary has with animals. As a registered service animal, Vader was the epitome of the best doggo, and Mary regularly thinks of her best friend whenever she rescues an animal.",
    imgPath: "http://i.imgur.com/yB35nWH.jpg",
  },
  {
    label: "White chinchilla",
    description: "Among Mary's rescue animals was her ebony chinchilla, Luna.",
    imgPath: "http://i.imgur.com/Yp4IbZC.jpg",
  },
  {
    label: "Turtle Diving",
    description:
      "One of Mary's favorite animals, Mary was fortunate enough to dive with a turtle.",
    imgPath: "http://i.imgur.com/aM0uip6.jpg",
  },
];

export default function About() {
  const theme = useTheme();

  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <body id='about-body'>
      <div className='profile-img'>
        <Box sx={{ maxWidth: 500, flexGrow: 1 }}>
          <Paper
            square
            elevation={0}
            sx={{
              display: "flex",
              alignItems: "center",
              height: 50,
              pl: 2,
              bgcolor: "transparent",
            }}
            className='title'
          >
            <Typography variant='body2' sx={{ marginBottom: "5px" }}>
              {images[activeStep].description}
            </Typography>
          </Paper>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {images.map((step, index) => (
              <div key={step.label} className='step-label'>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component='img'
                    sx={{
                      height: 350,
                      display: "flex",
                      overflow: "hidden",
                      width: "auto",
                      borderRadius: "10px",
                      margin: "auto",
                    }}
                    src={step.imgPath}
                    alt={step.label}
                    className='swipeable-images'
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <MobileStepper
            className='stepper'
            steps={maxSteps}
            position='static'
            activeStep={activeStep}
            nextButton={
              <Button
                size='small'
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size='small'
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </Box>{" "}
      </div>
      <div id='about-content'>
        <Typography variant='body2'>
          At less than four years old, founder Mary (Jackson) Elenius was first
          pictured listening to an animal's heartrate with a stethescope.
          Naturally, everything she shaped her life around was to help animals.
          Growing up in her church, there was an individual in the band who was
          the local zoo's veterinarian, Dayton Williams. He quickly became her
          idol alongside Steve Irwin, and she was blessed enough to become a
          veterinary technician for his private practice. His love for all kinds
          of animals, along with his passionate and talented lead veterinary
          technician Abby Ontjes, fueled Mary's desire to do anything she could
          to help every animal, regardless of genus and species.
        </Typography>
        <Typography variant='body2'>
          Mary now spends her time in the Knoxville, Tennesse area, answering
          any calls she receives. The name of the charity she runs, All Animal
          Rehabilitation and Release, embodies the namesake of Dayton William's
          practice and spirit. Regardless of the animal in need's species, she
          runs into every opportunity to aid every animal in honor of her
          personal heroes.
        </Typography>
      </div>
    </body>
  );
}
