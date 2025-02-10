import NavBar from './components/NavBar';
import Home from './Screens/Home';
import About from './Screens/About';
import Contact from './Screens/Contact';
import Works from './Screens/Works';

const App = () => {
    return (
        <div className="flex min-h-screen bg-zinc-950 relative">
            {/* Navbar */}
            <NavBar />

            {/* Main Content */}
            <div className="flex-grow p-4 space-y-10 overflow-y-auto">
                <section id="home">
                    <Home />
                </section>
                <section id="about" className="min-h-screen">
                    <About />
                </section>
                <section id="works" className="min-h-screen">
                    <Works />
                </section>
                <section id="contact" className="min-h-screen">
                    <Contact />
                </section>
            </div>
        </div>
    );
};

export default App;
