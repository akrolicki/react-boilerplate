import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import Layout from './layout/Layout';
import AnotherPage from './pages/api/api';
import Home from './pages/home/Home';
import { routes } from './routes';
import { store } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Routes>
          <Route path={routes.api} element={<AnotherPage />} />
          <Route path={routes.wildcard} element={<Home />} />
        </Routes>
      </Layout>
    </Provider>
  );
};

export default App;
