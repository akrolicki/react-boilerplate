import ListenersDemo from './ListenersDemo';
import RtkQueryDemo from './RtkQueryDemo';

const AnotherPage = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <RtkQueryDemo />
      <ListenersDemo />
    </div>
  );
};

export default AnotherPage;
