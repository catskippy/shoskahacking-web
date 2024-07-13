import React from 'react';
import ProgramCard from '../components/ProgramCard';
import './Home.css';

const Home = ({ programs }) => {
  const scrollToPrograms = () => {
    document.getElementById('programs-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div className="hero">
        <div className="hero-content">
          <h1>жоска скиппа хакинг</h1>
          <p>Добро пожаловать на сайт, где вы найдете самые забавные и интересные программы от Скиппа.</p>
          <button className="next-button" onClick={scrollToPrograms}>Далее</button>
        </div>
      </div>
      <div id="programs-section" className="programs-section">
        <h2>Наши Программы</h2>
        <div className="programs-grid">
          {programs.map(program => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
