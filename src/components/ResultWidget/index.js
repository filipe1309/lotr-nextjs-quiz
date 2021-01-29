import { useRouter } from 'next/router';
import Link from 'next/link';
import Widget from '../Widget';
import Button from '../Button';
// import Lottie from 'lottie-react-web';
// import animation from '../../loading-ring-of-fire.json';

function ResultWidget({ results }) {
  // const urlParams = new URLSearchParams(window.location.search);
  // const name = urlParams.get('name');
  const router = useRouter();
  const { name } = router.query;

  return (
    <Widget>
      <Widget.Header>
        {`Resultado de ${name || '...'}!`}
      </Widget.Header>
      <Widget.Content>
        <p>
          Você acertou
          {' '}
          {/* {results.reduce((acc, curr) => acc + (curr ? 1 : 0), 0)} */}
          {results.filter((x) => x).length}
          {' '}
          pergunta(s)
        </p>
        <ul>
          {results.map((result, index) => (
            <li key={`result__${index + 1}`}>
              #0
              {index + 1}
              {' '}
              Resultado:
              {' '}
              {result === true ? 'Acertou' : 'Errou'}
            </li>
          ))}
        </ul>
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
