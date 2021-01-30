import Lottie from 'lottie-react-web';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import animationLoading from '../../animations/loading-ring-of-fire.json';
import Widget from '../Widget';

function LoadingWidget() {
  // const urlParams = new URLSearchParams(window.location.search);
  // const name = urlParams.get('name');
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
        {`Bem vind@ ${name || '...'}!`}
      </Widget.Header>
      <Widget.Content>
        <Lottie
          width="100%"
          options={{
            animationData: animationLoading,
            loop: true,
          }}
        />
      </Widget.Content>
    </Widget>
  );
}

export default LoadingWidget;
