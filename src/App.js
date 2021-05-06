
import { Provider } from 'react-redux';
import './App.css';
import Drawerr from './component/Drawerr';
import HomeCar from './component/HomeCar';
import Activity from './pages/Activity';
import Home from './pages/Home';
import LoginField from './pages/LoginField';
import Newdevice from './pages/Newdevice';
import ViewAll from './pages/VewAll';
import configStore from './redux/store';

function App() {
 const store = configStore()
  return (
   <>
   <Provider store={store}> 
   <Newdevice/>
   </Provider>
   </>
  );
}

export default App;
