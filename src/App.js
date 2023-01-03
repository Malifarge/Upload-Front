import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContextProvider } from "./Context/User";
import Home from "./Page/Home";
import Profil from "./Page/Profil";


const App = () => {

  return (
    <BrowserRouter>
      <UserContextProvider>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Profil" element={<Profil/>}/>
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
