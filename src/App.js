import { 
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Profile from "./components/profile/Profile";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";



function App() {
  const {user} = useContext(AuthContext);

  return (
  <BrowserRouter>
    <Switch>
     
      <Route exact path="/">
        {user ? <Home /> : <Register />}
      </Route>
      <Route path='/home'>
      {user ? <Home /> : <Register />}
      </Route>
      <Route path='/login'>
        {user ? <Redirect to="/" />: <Login />}
      </Route>
      <Route path='/register'>
        {user ? <Redirect to="/" />: <Register />}
      </Route>
      <Route path='/profile/:username'>
        <Profile />
      </Route>
      
    </Switch>
  </BrowserRouter>
  // <div>
  //   <Home/>
  // </div>
  );
}
export default App;
