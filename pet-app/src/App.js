import Navbar from './Components/Navbar';
import Profile from './Components/pages/Profile';
import Home from './Components/pages/Home'
import { Route, Routes } from "react-router-dom"

function App() {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/profile' element={<Profile />} />

                </Routes>
            </div>

        </>
    )
}

export default App;
