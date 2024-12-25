import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './Screens/Home';

const App = () => {
    return (
        <Router>
            <div className="flex min-h-screen bg-zinc-900">
                {/* Navbar */}
                <NavBar />

                {/* Main Content */}
                <div className="flex-grow p-4">
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
