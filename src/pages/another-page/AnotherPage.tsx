import Button from 'src/components/Button';
import { useAppDispatch, useAppSelector } from 'src/store';

import { selectData, selectIsLoadingData } from './anotherPageSelectors';
import { clear, requestData } from './anotherPageSlice';

const AnotherPage = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectData);
  const isLoadingData = useAppSelector(selectIsLoadingData);

  const onRequestData = () => dispatch(requestData());

  const onClearHandler = () => dispatch(clear());

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Button onClick={onRequestData}>Click here to request more data</Button>
      {data && (
        <Button onClick={onClearHandler} preset="secondary">
          Clear
        </Button>
      )}
      {!data && !isLoadingData && <div>No data</div>}
      {data && data.map((record) => <div key={record.id}>{record.name}</div>)}
      {isLoadingData && <div>Loading...</div>}
    </div>
  );
};

export default AnotherPage;
