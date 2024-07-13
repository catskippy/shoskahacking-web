import React from 'react';
import { useParams } from 'react-router-dom';
import ProgramDetails from '../components/ProgramDetails';

const ProgramPage = ({ programs }) => {
  const { id } = useParams();
  const program = programs.find(p => p.id === id);

  return program ? <ProgramDetails program={program} /> : <p>Программа не найдена</p>;
};

export default ProgramPage;
