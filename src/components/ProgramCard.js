import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './ProgramCard.css';

const ProgramCard = ({ program }) => (
  <Card className="card">
    <CardMedia
      className="card-media"
      component="img"
      image={program.icon}
      alt={program.name}
    />
    <CardContent className="card-content">
      <Typography gutterBottom variant="h5" component="div" className="card-title">
        {program.name}
      </Typography>
      <Button variant="contained" className="card-button" component={Link} to={`/program/${program.id}`}>
        Подробнее
      </Button>
    </CardContent>
  </Card>
);

export default ProgramCard;
