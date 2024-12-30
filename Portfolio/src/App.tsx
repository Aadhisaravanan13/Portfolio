import NavBar from './components/NavBar';
import Home from './Screens/Home';
import About from './Screens/About';
import Contact from './Screens/Contact';
import Works from './Screens/Works';

const App = () => {
    return (
        <div className="flex min-h-screen bg-zinc-900 ">
            {/* Navbar */}
            <NavBar />

            {/* Main Content */}
            <div className="flex-grow p-4 space-y-10">
                <section id="home">
                    <Home />
                </section>
                <section id="about">
                    <About />
                </section>
                <section id="works">
                    <Works />
                </section>
                <section id="contact">
                    <Contact />
                </section>
            </div>
        </div>
    );
};

export default App;
