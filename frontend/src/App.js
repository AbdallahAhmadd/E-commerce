
import LeftBox from './Components/MainBox/LeftBox.jsx';
import RightBox from './Components/MainBox/RightBox.jsx';
import SignupPage from './Pages/SignupPage.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className='pages'>
      <Routes>
        <Route path="/"
        element={<SignupPage />}
        />
      </Routes>
      </div>
    
      </BrowserRouter>
      
    </div>
  );
}

export default App;
