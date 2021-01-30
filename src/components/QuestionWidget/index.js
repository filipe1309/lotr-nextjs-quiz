import React from 'react';
import Lottie from 'lottie-react-web';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Widget from '../Widget';
import Button from '../Button';
import animation from '../../3-dots-bouncing.json';
import animationFireworks from '../../fireworks-display.json';
import animationFeathers from '../../falling-feathers.json';
import BackLinkArrow from '../BackLinkArrow';

function QuestionWidget({
  question, totalQuestions, questionIndex, onSubmit, addResult,
}) {
  const [selectedAlternative, setSelectedAlternative] = React.useState(undefined);
  const [isQuestionSubmited, setIsQuestionSubmited] = React.useState(false);
  const questionId = `question_${questionIndex}`;
  const isCorrect = selectedAlternative === question.answer;
  const hasSelectedAlternative = selectedAlternative !== undefined;
  const router = useRouter();
  const { name } = router.query;

  return (
    <Widget
      as={motion.section}
      transition={{ delay: 0, duration: 0.3 }}
      variants={{
        show: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      initial="hidden"
      animate="show"
    >
      <Widget.Header>
        <BackLinkArrow href={{
          pathname: '/',
          query: { name },
        }}
        />
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
                onClick={() => setSelectedAlternative(alternativeIndex)}
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

          <Button type="submit" disabled={!hasSelectedAlternative}>
            {hasSelectedAlternative && isQuestionSubmited && (
            <Lottie
              height="20px"
              options={{
                animationData: animation,
                loop: true,
              }}
            />
            )}
            {(!hasSelectedAlternative || !isQuestionSubmited) && 'Confirmar'}

          </Button>
          {isQuestionSubmited && isCorrect && (
          <div className="lottie-animation question">
            <Lottie
              options={{
                animationData: animationFireworks,
                loop: true,
              }}
            />
          </div>
          )}
          {isQuestionSubmited && !isCorrect && (
          <div className="lottie-animation question">
            <Lottie
              options={{
                animationData: animationFeathers,
                loop: true,
              }}
            />
          </div>
          )}
          {isQuestionSubmited && isCorrect && <p>Você acertou!</p>}
          {isQuestionSubmited && !isCorrect && <p>Você errou!</p>}
        </form>
      </Widget.Content>
    </Widget>
  );
}

export default QuestionWidget;
