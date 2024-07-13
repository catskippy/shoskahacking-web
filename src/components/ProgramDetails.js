import React from 'react';
import { Typography, Button } from '@mui/material';
import './ProgramDetails.css';

const ProgramDetails = ({ program }) => (
  <div className="program-details">
    <Typography variant="h4" className="program-title">{program.name}</Typography>
    <img src={program.icon} alt={`${program.name} icon`} className="program-icon" />
    <Typography variant="body1" className="program-description">
      {program.description.split('\n').map((line, index) => (
        <span key={index}>
          {line}
          <br />
        </span>
      ))}
    </Typography>
    <Button variant="contained" color="primary" href={program.downloadLink} className="download-button">
      Скачать
    </Button>
    <Typography variant="body1" className="program-instructions">
      {program.instructions.split('\n').map((line, index) => (
        <span key={index}>
          {line}
          <br />
        </span>
      ))}
    </Typography>
  </div>
);

export default ProgramDetails;
