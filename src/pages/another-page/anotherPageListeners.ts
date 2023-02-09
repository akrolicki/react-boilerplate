import { AppStartListening } from 'src/listenerMiddleware';

import { add } from '../../logic/add';
import { dataFetched, requestData } from './anotherPageSlice';

export const addAnotherPageListeners = (startListening: AppStartListening) => {
  startListening({
    actionCreator: requestData,
    effect: async (_action, api) => {
      api.unsubscribe();
      await api.delay(1000);
      api.dispatch(
        dataFetched([
          { name: 'John', id: 'asdf' + add(2, 3) },
          { name: 'Andrzej', id: 'qwer' + add(3, 4) },
        ]),
      );
      api.subscribe();
    },
  });
};
