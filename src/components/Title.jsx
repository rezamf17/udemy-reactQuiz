import React from 'react';
import QuizLogo from '../assets/quiz-logo.png';

export default function Title() {
    return (
        <div className="title">
            <header>
                <img src={QuizLogo} alt="" />
                <h1 className="title__heading">React Quiz</h1>
            </header>
        </div>
    )
}