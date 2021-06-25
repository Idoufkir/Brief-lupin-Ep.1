
import './App.css';
import axios from "axios";
import { AuthContextProvider } from './context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './router';
axios.defaults.withCredentials = true;
function App() {
  return (

  <AuthContextProvider>
  <Router/> 
  </AuthContextProvider> 

  );
}

export default App;
