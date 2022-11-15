import './App.css';
import { Nav } from './Components/Nav';
import { Landing } from './Pages/Landing';
import { Footer } from './Components/Footer';
import { Sign } from './Pages/Sign';
import { SignIn } from './Pages/SignIn';
import { RegisterStudent } from './Pages/RegisterStudent';
import { RegisterVillage } from './Pages/RegisterVillage';
import { Project,ProjectDetail } from './Pages/Project';
import { Admin } from './Pages/Admin/Admin';
import {
    BrowserRouter,
    Routes,
    Route,
    Outlet
  } from "react-router-dom";

  
const Main = () => {
    return(
        <>
            <Nav/>
                <Outlet/>
            <Footer/>
        </>
    )
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main/>}>
                    <Route index element={<Landing/>}/>    
                    <Route path='project' element={<Project/>}/>
                    <Route path='project/:id' element={<ProjectDetail/>}/>
                </Route>
                <Route path='/sign' element={<Sign/>}/>
                <Route path='/signin' element={<SignIn/>}/>
                <Route path='/register-student' element={<RegisterStudent/>}/>
                <Route path='/register-village' element={<RegisterVillage/>}/>
                <Route path='/admin-bantudesa/*' element={<Admin/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

