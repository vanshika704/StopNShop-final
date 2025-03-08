import { Routes, Route } from 'react-router-dom';  // Import Routes and Route components

import Page1 from './pages/Page1';
import SignupPage from './pages/Signup';
import Login_Page from './pages/login';



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SignupPage/>} /> 
      <Route path="/page1" element={<Page1/>} />
      <Route path="/signup" element={<SignupPage/>} />  
      <Route path="/login" element={<Login_Page/>} />{/* Define route for Page1 */}
    </Routes>
  );
};

export default App;
