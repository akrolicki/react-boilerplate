import { useRandomCatPhotoQuery } from './anotherPageApi';

const RtkQueryDemo = () => {
  const { data, isFetching } = useRandomCatPhotoQuery();

  return (
    <div className="mb-4 rounded-md border border-gray-400 bg-white p-4">
      <h1 className="mb-4 font-bold typography-heading-sm">Example use of RTK Query</h1>
      {!data && !isFetching && <div>No data</div>}
      {data &&
        data.map((cat) => (
          <div key={cat.id}>
            Cat id: {cat.id}
            <img src={cat.url} alt={`Cat - ${cat.id}`} className="h-64" />
          </div>
        ))}
      {isFetching && <div>Loading...</div>}
    </div>
  );
};

export default RtkQueryDemo;
