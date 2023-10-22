import React, { useState } from 'react';

const QuizForm = () => {
    const [questions, setQuestions] = useState([]);
    const [questionType, setQuestionType] = useState('mcq');
    const [questionText, setQuestionText] = useState('');
    const [options, setOptions] = useState(['', '', '', '']);
    const [correctAnswer, setCorrectAnswer] = useState(0); // Default correct answer index
    const [isSubmitVisible, setSubmitVisible] = useState(false);
    const [quizCode, setQuizCode] = useState('');
    const [authCode, setAuthCode] = useState('');
    const addQuestion = () => {
        if (questionText.trim() === '') return;

        const newQuestion = {
            type: questionType,
            text: questionText,
            options: options,
            correctAnswer: options[correctAnswer],
        };

        const updatedQuestions = [...questions, newQuestion];
        setQuestions(updatedQuestions);
        setQuestionText('');
        setOptions(['', '', '', '']);
        setCorrectAnswer(0);

        // Check if the user has entered 3 questions to show the Submit button
        if (updatedQuestions.length === 3) {
            setSubmitVisible(true);
        }
    };

    const handleOptionChange = (index, option) => {
        const updatedOptions = [...options];
        updatedOptions[index] = option;
        setOptions(updatedOptions);
    };

    const removeQuestion = (index) => {
        const updatedQuestions = questions.filter((_, i) => i !== index);
        setQuestions(updatedQuestions);

        // Hide the Submit button when removing questions
        if (updatedQuestions.length < 3) {
            setSubmitVisible(false);
        }
    };

    return (
        <div className="quiz-form">
            <h1>Create a Quiz</h1>
            <div>
                <label>Question:
                    <input type="text" value={questionText} onChange={(e) => setQuestionText(e.target.value)} />
                </label>
                <br />
                {questionType === 'mcq' && (
                    <div>
                        <label>Options:</label>
                        {options.map((option, index) => (
                            <input
                                type="text"
                                key={index}
                                value={option}
                                onChange={(e) => handleOptionChange(index, e.target.value)}
                            />
                        ))}
                        <label style={{height:'30vh'}}>Correct Answer:
                            <select value={correctAnswer} onChange={(e) => setCorrectAnswer(e.target.value)}>
                                {options.map((option, index) => (
                                    <option style={{textAlign:'left'}} key={index} value={index}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>
                )}
                <button onClick={addQuestion}>Add Question</button>
            </div>
            <div>
                <h2>Questions:</h2>
                {questions.map((question, index) => (
                    <div key={index} className="question">
                        <p style={{textAlign:'left'}}>Type: {question.type}</p>
                        <p style={{textAlign:'left'}}>Question: {question.text}</p>
                        {question.type === 'mcq' && (
                            <p style={{textAlign:'left'}}>Options: {question.options.join(', ')}</p>
                        )}
                        <p style={{textAlign:'left'}}>Correct Answer: {question.correctAnswer}</p>
                        <button onClick={() => removeQuestion(index)}>Remove Question</button>
                    </div>
                ))}
                {isSubmitVisible && (
                    <div>
                        <label>Enter a 6-digit Quiz Code:</label>
                    <input type="text" value={quizCode} onChange={(e) => setQuizCode(e.target.value)} />
                    <button className="submit-button">Submit Quiz</button>
                </div>
                )}
            </div>
        </div>
    );
};

export default QuizForm;
