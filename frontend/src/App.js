import SignupPage from './Pages/SignUpPage/SignupPage.jsx';
import LoginPage from './Pages/LoginPage/LoginPage.jsx';
import ViewUsersPage from './Pages/ViewUserInfoPage/ViewUsersPage.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className='pages'>
      <Routes>
        <Route exact path='/'  element={<SignupPage/>} />
        <Route exact path='/login' element={<LoginPage/>} />
        <Route exact path='/ViewUsers' element={<ViewUsersPage/>} />
      </Routes>
      </div>
    
      </BrowserRouter>
      
    </div>
  );
}

export default App;