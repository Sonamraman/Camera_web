import { Provider } from 'react-redux';
import './App.css';
import Drawerr from './component/Drawerr';
import HomeCar from './component/HomeCar';
import Account from './pages/account/Account';
import Activity from './pages/activity/Activity';
import Changename from './pages/account/Changename';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Newdevice from './pages/device/Newdevice';
import Share from './pages/Share';
import Signup from './pages/Signup';
import Subscription from './pages/Subscription/Subscription';
import Subscription2 from './pages/Subscription/Subscription2';
import ViewAll from './pages/VewAll';
import configStore from './redux/store/store';
import CameraScreen from './pages/CameraScreen';
import Changepassword from './pages/account/Changepassword';
import Forgetpassword from './pages/login/Forgetpassword';
import Changepass from './pages/login/Changepass';
import Routes from './router/routes';

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
