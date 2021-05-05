
import { Provider } from 'react-redux';
import './App.css';
import Drawerr from './component/Drawerr';
import HomeCar from './component/HomeCar';
import Activity from './pages/views/Activity';
import Home from './pages/views/Home';
import LoginField from './pages/views/LoginField';
import configStore from './redux/store';

function App() {
 const store = configStore()
  return (
   <>
   <Provider store={store}> 
   <Drawerr/>
   </Provider>
   
   </>
  );
}

export default App;
