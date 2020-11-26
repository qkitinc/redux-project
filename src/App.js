import { Provider } from 'react-redux'
import Counter from './project/counter'
import store from './project/counter/redux/store'
function App() {
  return (
    <>
      <Provider store={store}>
        <Counter />
      </Provider>
    </>
  );
}

export default App;
