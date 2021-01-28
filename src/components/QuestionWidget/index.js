import React from 'react';
import Widget from '../Widget';
import Button from '../Button';

function QuestionWidget({
  question, totalQuestions, questionIndex, onSubmit, addResult,
}) {
  const [selectedAlternative, setSelectedAlternative] = React.useState(undefined);
  const [isQuestionSubmited, setIsQuestionSubmited] = React.useState(false);
  const questionId = `question_${questionIndex}`;
  const isCorrect = selectedAlternative === question.answer;
  const hasSelectedAlternative = selectedAlternative !== undefined;

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
            setIsQuestionSubmited(true);
            setTimeout(() => {
              addResult(isCorrect);
              setIsQuestionSubmited(false);
              setSelectedAlternative(undefined);
              onSubmit();
            }, 2 * 1000);
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative_${alternativeIndex}`;
            const selectedAlternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternative === alternativeIndex;
            return (
              <Widget.Topic
                as="label"
                htmlFor={alternativeId}
                key={alternativeId}
                onChange={() => setSelectedAlternative(alternativeIndex)}
                data-selected={isSelected}
                data-status={isQuestionSubmited && selectedAlternativeStatus}
              >
                <input
                  type="radio"
                  id={alternativeId}
                  name={questionId}
                />
                {alternative}
              </Widget.Topic>
            );
          })}

          <Button type="submit" disabled={!hasSelectedAlternative}>Confirmar</Button>
          {isQuestionSubmited && isCorrect && <p>Você acertou!</p>}
          {isQuestionSubmited && !isCorrect && <p>Você errou!</p>}
        </form>
      </Widget.Content>
    </Widget>
  );
}

export default QuestionWidget;
