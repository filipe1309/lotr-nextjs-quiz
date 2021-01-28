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
import ExternalQuizList from '../components/ExternalQuizList';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState(router.query.name ? router.query.name : '');

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
          <Widget.Header>
            <h1>Quizes da Galera</h1>
          </Widget.Header>
          <Widget.Content>
            <ExternalQuizList>
              {db.external.map((url) => {
                const prepareUrl = url
                  .replace(/\//g, '')
                  .replace('https:', '')
                  .replace('.vercel.app', '');

                const [repoName, user] = prepareUrl.split('.');
                return (
                  <li key={url}>
                    <Widget.Topic href={url} data-href={`/quiz/${user}__${repoName}?name=${name}`}>
                      {`${user}/${repoName}`}
                    </Widget.Topic>
                  </li>
                );
              })}
            </ExternalQuizList>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl={db.github} />
    </QuizBackground>
  );
}
