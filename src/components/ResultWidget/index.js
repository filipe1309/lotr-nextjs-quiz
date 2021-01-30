import { useRouter } from 'next/router';
import Link from 'next/link';
import Lottie from 'lottie-react-web';
import { motion } from 'framer-motion';
import { TwitterShareButton, TwitterIcon } from 'react-share';
import Widget from '../Widget';
import Button from '../Button';
import animationCheck from '../../animations/check-mark-success.json';
import animationFail from '../../animations/failure-error-icon.json';

function ResultWidget({ results }) {
  // const urlParams = new URLSearchParams(window.location.search);
  // const name = urlParams.get('name');
  const router = useRouter();
  const { name } = router.query;
  const numberOfAnswers = results.length;
  const numberOfCorrectAnswers = results.filter((x) => x).length;
  const imageByPercentOfCorrectAnswers = ((numberOfCorrectAnswers / results.length) > 0.5)
    ? 'https://media.giphy.com/media/zGnnFpOB1OjMQ/source.gif'
    : 'https://media.giphy.com/media/chICfOgH8ib16/source.gif';

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
        <h1>Resultados</h1>
      </Widget.Header>
      <img
        src={imageByPercentOfCorrectAnswers}
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
      />
      <Widget.Content>
        <h2>
          {`Parabéns ${name || '...'}!`}
          <br />
          <br />
          Você acertou
          {' '}
          {/* {results.reduce((acc, curr) => acc + (curr ? 1 : 0), 0)} */}
          <strong>{numberOfCorrectAnswers}</strong>
          {' '}
          pergunta(s)
        </h2>
        <ul>
          {results.map((result, index) => (
            <li
              key={`result__${index + 1}`}
              style={{
                padding: '5px',
                margin: '5px',
                backgroundColor: '#2c3031',
                borderRadius: '4px',
                height: '40px',
                textAlign: 'center',
              }}
            >
              <span className="quention-index" style={{ fontSize: '20px' }}>
                #0
                {index + 1}
                {' '}
              </span>
              <div className="lottie-animation result">
                <Lottie
                  width="30px"
                  height="30px"
                  options={{
                    animationData: result ? animationCheck : animationFail,
                    loop: false,
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
        <br />
        <Link href={{
          pathname: '/',
          query: { name },
        }}
        >
          <Button type="button">Tentar novamente</Button>
        </Link>
        <div style={{ textAlign: 'center', marginTop: '25px' }}>
          <TwitterShareButton
            url="https://lotr-quiz.filipe1309.vercel.app/"
            title={`Yay!!, i completed the LOTR Quiz and got ${numberOfCorrectAnswers} of ${numberOfAnswers} questions right, try also at: `}
            via="filipe1309 @omariosouto @paulo_caelum @AluraOnline @rauchg"
            hashtags={['nextjs', 'reactjs', 'alura', 'imersaoreact', 'aluraquiz', 'lotr']}
            related={['@filipe1309', 'omariosouto', 'paulo_caelum', 'AluraOnline', 'rauchg']}
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>
        </div>
      </Widget.Content>
    </Widget>
  );
}

export default ResultWidget;
