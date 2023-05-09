import Button from 'src/components/Button';
import { useAppDispatch, useAppSelector } from 'src/store';

import { selectData, selectIsLoadingData } from './anotherPageSelectors';
import { clear, requestData } from './anotherPageSlice';

const ListenersDemo = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectData);
  const isLoadingData = useAppSelector(selectIsLoadingData);

  const onRequestData = () => dispatch(requestData());

  const onClearHandler = () => dispatch(clear());

  return (
    <div className="rounded-md border border-gray-400 bg-white p-4">
      <h1 className="mb-4 text-lg font-bold">Example use of listeners</h1>
      <Button onClick={onRequestData} className="mb-4">
        Click here to request mock data
      </Button>
      {data && (
        <Button onClick={onClearHandler} preset="secondary" className="mb-4">
          Clear
        </Button>
      )}
      {!data && !isLoadingData && <div>No data</div>}
      {data && data.map((record) => <div key={record.id}>{record.name}</div>)}
      {isLoadingData && <div>Loading...</div>}
    </div>
  );
};

export default ListenersDemo;
