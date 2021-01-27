import React from 'react';
import db from '../db.json';
import QuizBackground from '../components/QuizBackground';
import QuizContainer from '../components/QuizContainer';
import Widget from '../components/Widget';
import { useRouter } from 'next/router'

export default function QuizPage() {
  // const urlParams = new URLSearchParams(window.location.search);
  // const name = urlParams.get('name');
  const router = useRouter()
  const { name } = router.query
  
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>

        <Widget>
          <Widget.Header>
            <h1>Página do Quiz</h1>
          </Widget.Header>
          <Widget.Content>
            Bem vind@ <strong>{name}</strong>!!!
            <br/>
            <br/>
            <img src={db.questions[0].image} alt={db.questions[0].title}/>
          </Widget.Content>
        </Widget>

      </QuizContainer>
    </QuizBackground>
  );
};