import Button from 'src/components/Button';
import { useAppDispatch, useAppSelector } from 'src/store';

import { selectData, selectIsLoadingData } from './homeSelectors';
import { requestData } from './homeSlice';

const Home = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectData);
  const isLoadingData = useAppSelector(selectIsLoadingData);

  const onRequestData = () => dispatch(requestData());

  return (
    <div>
      <div className="text-9xl">Home</div>

      <Button onClick={onRequestData}>Click here to request data</Button>
      {!data && !isLoadingData && <div>No data</div>}
      {isLoadingData && <div>Loading...</div>}
      {data && data.map((record) => <div key={record.id}>{record.name}</div>)}
    </div>
  );
};

export default Home;
