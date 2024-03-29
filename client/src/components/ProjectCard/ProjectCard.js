import "./ProjectCardStyles.css";

import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const ProjectCard = ({ project }) => {
  return (
    <div className='cardContainer'>
      <Card sx={{ maxWidth: 320 }} key={project.id} className='cardContent'>
        <CardMedia
          component='img'
          alt='placeholder drawings of animals'
          height='140'
          image={project.image}
        />
        <CardContent id='details'>
          <Typography gutterBottom variant='h5' component='div'>
            {project.title}
          </Typography>
          <Typography variant='body1'>{project.description}</Typography>
          <Typography variant='body2' color='text.secondary'>
            {project.update}
          </Typography>{" "}
        </CardContent>
        <CardActions id='card-buttons'>
          <Typography variant='body2'>Date Updated: {project.date}</Typography>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProjectCard;
