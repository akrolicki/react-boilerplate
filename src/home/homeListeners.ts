import { AppStartListening } from 'src/listenerMiddleware';

import { add } from './add';
import { dataFetched, requestData } from './homeSlice';

export const addHomeListeners = (startListening: AppStartListening) => {
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
