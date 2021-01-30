import React from 'react';
import { useRouter } from 'next/router';
import Lottie from 'lottie-react-web';
import { motion } from 'framer-motion';

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
import animationParticles from '../magic-particles.json';
import Link from '../components/Link';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState(router.query.name ? router.query.name : '');
  const hasName = !(name.length === 0);

  function handleSubmit(event) {
    event.preventDefault();
    const audio = document.getElementById('lotr-main');
    audio.loop = true;
    audio.load();
    audio.play();
    router.push(`/quiz?name=${name}`);
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <div className="lottie-animation index">
        <Lottie
          options={{
            animationData: animationParticles,
            loop: true,
          }}
        />
      </div>

      <QuizContainer>
        <QuizLogo />
        <Widget
          as={motion.section}
          transition={{ delay: 0, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={handleSubmit}>
              <Input
                name="nomeDoUsuario"
                placeholder="Diga seu nome élfico"
                autoFocus
                onChange={(event) => {
                  setName(event.target.value);
                }}
                value={name}
              />
              <Button className="bouncy" type="submit" disabled={!hasName}>
                Jogar como:
                {' '}
                <strong>{name || '??'}</strong>
              </Button>
            </form>
            <p>{db.description}</p>
          </Widget.Content>
        </Widget>

        <Widget
          as={motion.section}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        >
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
                    <Widget.Topic
                      as={Link}
                      href={hasName ? `/quiz/${user}___${repoName}?name=${name}` : '/'}
                      style={{ opacity: hasName ? 'unset' : 0.5, cursor: hasName ? 'pointer' : 'not-allowed' }}
                    >
                      {`${user}/${repoName}`}
                    </Widget.Topic>
                  </li>
                );
              })}
            </ExternalQuizList>
          </Widget.Content>
        </Widget>
        <Footer
          as={motion.footer}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        />
      </QuizContainer>
      <GitHubCorner projectUrl={db.github} />
    </QuizBackground>
  );
}
