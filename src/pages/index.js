import db from '../db.json';
import QuizBackground from '../components/QuizBackground'
import QuizContainer from '../components/QuizContainer'
import QuizLogo from '../components/QuizLogo'
import Footer from '../components/Footer'
import GitHubCorner from '../components/GitHubCorner'
import Widget from '../components/Widget'

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/filipe1309/lotr-nextjs-quiz" />
    </QuizBackground>
  );
}