import React from 'react';
import { useRouter } from 'next/router';
import db from '../db.json';
import QuizBackground from '../components/QuizBackground';
import QuizContainer from '../components/QuizContainer';
import QuizLogo from '../components/QuizLogo';
import Footer from '../components/Footer';
import GitHubCorner from '../components/GitHubCorner';
import Widget from '../components/Widget';
import Button from '../components/Button';
import Input from '../components/Input';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={(event) => {
              event.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <Input
                name="nomeDoUsuario"
                placeholder="Diga seu nome élfico"
                autoFocus
                onChange={(event) => {
                  setName(event.target.value);
                }}
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                Jogar como:
                {' '}
                <strong>{name || '??'}</strong>
              </Button>
            </form>
            <p>{db.description}</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            {
              db.external.map((github) => (
                <a
                  style={{
                    color: '#fff', display: 'block', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', margin: '10px 0', padding: '15px', backgroundColor: db.theme.colors.primary,
                  }}
                  href={github}
                >
                  {github}
                </a>
              ))
            }
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl={db.github} />
    </QuizBackground>
  );
}
