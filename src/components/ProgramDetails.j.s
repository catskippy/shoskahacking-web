import React from 'react';
import { Typography, Button } from '@mui/material';

const ProgramDetails = ({ program }) => (
  <div style={{ padding: '2em' }}>
    <Typography variant="h4" style={{ marginBottom: '1em' }}>{program.name}</Typography>
    <Typography variant="body1" style={{ marginBottom: '1em' }}>{program.description}</Typography>
    <Button variant="contained" color="primary" href={program.downloadLink}>
      Скачать
    </Button>
    <Typography variant="body1" style={{ marginTop: '1em' }}>{program.instructions}</Typography>
  </div>
);

export default ProgramDetails;
