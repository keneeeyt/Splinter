import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import Logout from "./pages/Logout.js";
import Profile from "./pages/Profile.js";
import Welcome from "./pages/Welcome";
import { UserProvider } from "./UserContext.js";



function App() {
  const [user, setUser] = useState(null);
  const [userID, setUserID]= useState(null);
  const [userIds, setUserIds] = useState(null);
  const id = useParams();
  console.log(id)

  
  const unSetUser = () => {
    localStorage.clear();
    
  }

  useEffect(() => {
      fetch("http://localhost:3003/user/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then(result => result.json())
      .then(data => {
        if(localStorage.getItem('token')!==null){
          setUser({
            id:data._id
          })
          setUserIds(data._id);
        }else{
          setUser(null)
        }
      
      })
  }, [])

  return (
    <UserProvider value = {{user, setUser, unSetUser, userID, userIds}}>
    <Router>
    <Navbar />
      <Routes>
        <Route path="/home/:id" element ={<Home />} />
        <Route path='/' element={<Welcome />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Logout' element={<Logout />} />
        <Route path= '/profile/:id' element ={<Profile />} />
      </Routes>
    </Router>
    </UserProvider>
  );
}

export default App;
