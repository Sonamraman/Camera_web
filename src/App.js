import { Provider } from 'react-redux';
import './App.css';
import IncDec from './pages/ReduxPractice/IncDec';
import configStore from './redux/store/store';
import Routes from './router/routes';

// store.subscribe(()=>console.log(store.getSate()))

function App() {
 const store = configStore()
  return (
   <>
   <Provider store={store}> 
   <Routes/>
   </Provider>
   </>
  );
}

export default App;
