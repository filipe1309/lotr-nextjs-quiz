import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../screens/Quiz';

export default function QuizesDaGalera({ externalDb }) {
  return (
    <ThemeProvider theme={externalDb.theme}>
      <QuizScreen questions={externalDb.questions} backgound={externalDb.bg} />
    </ThemeProvider>
  );
}

// Run in server
export async function getServerSideProps(context) {
  const [user, projectName] = context.query.id.split('___');
  console.log(context.query.id, user, projectName);
  const externalDb = await fetch(`https://${projectName}.${user}.vercel.app/api/db`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => {
      // Redirect to home if something fail
      context.res.statusCode = 302;
      context.res.setHeader('Location', '/');
      context.res.end();
    });

  return {
    props: { externalDb },
  };
}
