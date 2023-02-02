import { useState } from 'react';
import Button from 'src/components/Button';

const AnotherPage = () => {
  const [count, setCount] = useState(0);

  const onIncrease = () => setCount((prev) => prev + 1);
  const onDecrease = () => setCount((prev) => prev - 1);

  return (
    <div>
      <div className="text-9xl">Another Page</div>

      <div>Count: {count}</div>
      <Button onClick={onIncrease}>+1 (Primary Button)</Button>
      <Button onClick={onDecrease} preset="secondary">
        -1 (Secondary Button)
      </Button>
    </div>
  );
};

export default AnotherPage;
