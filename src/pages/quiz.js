import React from 'react';
import { useRouter } from 'next/router';
import db from '../db.json';
import QuizBackground from '../components/QuizBackground';
import QuizContainer from '../components/QuizContainer';
import Widget from '../components/Widget';
import QuizLogo from '../components/QuizLogo';
import GitHubCorner from '../components/GitHubCorner';
import Button from '../components/Button';

function LoadingWidget() {
  // const urlParams = new URLSearchParams(window.location.search);
  // const name = urlParams.get('name');
  const router = useRouter();
  const { name } = router.query;

  return (
    <Widget>
      <Widget.Header>
        {`Bem vind@ ${name || '...'}!`}
      </Widget.Header>
      <Widget.Content> [Desafio do Loading] </Widget.Content>
    </Widget>
  );
}

function QuestionWidget({
  question, totalQuestions, questionIndex, onSubmit,
}) {
  const questionId = `question_${questionIndex}`;
  const [alternativeIdSelected, setAlternativeIdSelected] = React.useState(-1);

  return (
    <Widget>
      <Widget.Header>
        <h1>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h1>
      </Widget.Header>
      <img
        src={question.image}
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
      />
      <Widget.Content>
        <h2>{question.title}</h2>
        <p>{question.description}</p>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            onSubmit();
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative_${alternativeIndex}`;
            return (
              <Widget.Topic
                as="label"
                htmlFor={alternativeId}
                key={alternativeId}
                onClick={() => {
                  setAlternativeIdSelected(alternativeId);
                  console.log(alternativeId, alternativeIdSelected);
                }}
                className={alternativeId === alternativeIdSelected && 'alternative-selected'}
              >
                <input
                  type="radio"
                  id={alternativeId}
                  name={questionId}
                />
                <label htmlFor={alternativeId}>{alternative}</label>
              </Widget.Topic>
            );
          })}

          <Button type="submit">Confirmar</Button>
        </form>
      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function QuizPage() {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  // Called one time === didMount
  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(questionIndex + 1);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />

        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            totalQuestions={totalQuestions}
            questionIndex={questionIndex}
            onSubmit={handleSubmitQuiz}
          />
        )}

        {screenState === screenStates.RESULT && <div>Resultado: Você acertou X questões</div>}

      </QuizContainer>
      <GitHubCorner projectUrl={db.github} />
    </QuizBackground>
  );
}
