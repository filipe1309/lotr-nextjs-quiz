import { useRouter } from 'next/router';
import Link from 'next/link';
import Lottie from 'lottie-react-web';
import Widget from '../Widget';
import Button from '../Button';
import animationCheck from '../../check-mark-success.json';
import animationFail from '../../failure-error-icon.json';

function ResultWidget({ results }) {
  // const urlParams = new URLSearchParams(window.location.search);
  // const name = urlParams.get('name');
  const router = useRouter();
  const { name } = router.query;

  return (
    <Widget>
      <Widget.Header>
        <h1>Resultados</h1>
        {/* https://media.giphy.com/media/zGnnFpOB1OjMQ/source.gif */}
      </Widget.Header>
      <img
        src="https://media.giphy.com/media/zGnnFpOB1OjMQ/source.gif"
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
          <strong>{results.filter((x) => x).length}</strong>
          {' '}
          pergunta(s)
        </h2>
        <ul>
          {results.map((result, index) => (
            <li key={`result__${index + 1}`}>
              #0
              {index + 1}
              {' '}
              <Lottie
                width="30px"
                height="30px"
                style={{
                  display: 'inline-block',
                  marginBottom: '-10px',
                  marginTop: '10px',
                  // width: result ? '150px' : '50px',
                  // height: result ? '150px' : '50px',
                }}
                options={{
                  animationData: result ? animationCheck : animationFail,
                  loop: false,
                }}
              />
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
      </Widget.Content>
    </Widget>
  );
}

export default ResultWidget;
