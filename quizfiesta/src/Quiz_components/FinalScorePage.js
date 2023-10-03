

import React from 'react';
import TriviaSelectForm from './TriviaSelectForm';
import './quiz.css';
import Navbar from '../components_home/navbar';



const FinalScorePage = ({ score, onRestartQuiz, onReselection }) => {
  const handleRestartQuiz = () => {
    onRestartQuiz();
  };

  const handleReselection =() =>{
    onReselection();
  }

  return (
    <div>
      <Navbar />
      <div className='finalScore'>
      <div className='finalScoreContent'>
        <h2>Final Score</h2>
        <p>Your final score: {score} out of 10</p>
        <button onClick={handleRestartQuiz}>Start Over</button>
        <button onClick={handleReselection}>Select New Category</button>
      </div>
      </div>
    </div>
  );
};

export default FinalScorePage;

