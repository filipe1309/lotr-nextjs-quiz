import Lottie from 'lottie-react-web';
import { useRouter } from 'next/router';
import animation from '../../loading-ring-of-fire.json';
import Widget from '../Widget';

function LoadingWidget() {
  // const urlParams = new URLSearchParams(window.location.search);
  // const name = urlParams.get('name');
  const router = useRouter();
  const { name } = router.query;

  return (
    <Widget>
      <Widget.Header>
        {`Bem vind@ ${name || '...'}!`}
      </Widget.Header>
      <Widget.Content>
        <Lottie
          width="100%"
          options={{
            animationData: animation,
            loop: true,
          }}
        />
      </Widget.Content>
    </Widget>
  );
}

export default LoadingWidget;
