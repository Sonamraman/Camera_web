import { Provider } from 'react-redux';
import './App.css';
import Drawerr from './component/Drawerr';
import HomeCar from './component/HomeCar';
import Account from './pages/Account';
import Activity from './pages/Activity';
import Changename from './pages/ChangeData/Changename';
import Home from './pages/Home';
import Login from './pages/Login';
import LoginField from './pages/Login';
import Newdevice from './pages/Newdevice';
import Share from './pages/Share';
import Signup from './pages/Signup';
import Subscription from './pages/Subscription/Subscription';
import Subscription2 from './pages/Subscription/Subscription2';
import ViewAll from './pages/VewAll';
import configStore from './redux/store/store';
import CameraScreen from './pages/CameraScreen';
import Changepassword from './pages/ChangeData/Changepassword';

function App() {
 const store = configStore()
  return (
   <>
   <Provider store={store}> 
   <Account/>
   </Provider>
   </>
  );
}

export default App;
