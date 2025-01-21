import { useState, useEffect } from 'react';

// Import icons
import homeIcon from '../assets/home.png';
import aboutIcon from '../assets/employee-man-alt.png';
import myWorksIcon from '../assets/briefcase.png';
import contactIcon from '../assets/envelope.png';

export default function NavBar() {
    const navIcons = [
        { id: 1, icon: homeIcon, label: 'Home', target: 'home' },
        { id: 2, icon: aboutIcon, label: 'About', target: 'about' },
        { id: 3, icon: myWorksIcon, label: 'My Works', target: 'works' },
        { id: 4, icon: contactIcon, label: 'Contact', target: 'contact' },
    ];

    const [isSelected, setSelected] = useState(1);

    // Scroll handling function
    const handleScroll = (targetId: string) => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Synchronize the active state with scroll position
    useEffect(() => {
        const handleScrollPosition = () => {
            const scrollPosition = window.scrollY;
            let currentSection = 1;

            navIcons.forEach((item) => {
                const element = document.getElementById(item.target);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (scrollPosition >= offsetTop - offsetHeight / 3) {
                        currentSection = item.id;
                    }
                }
            });

            setSelected(currentSection);
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScrollPosition);

        // Clean up the listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScrollPosition);
        };
    }, [navIcons]);

    return (
        <div className="fixed top-0 right-0 h-full flex flex-col justify-center items-center space-y-4 p-4">
            {navIcons.map((item) => (
                <button
                    key={item.id}
                    onClick={() => {
                        handleScroll(item.target); // Always scroll to the target
                        setSelected(item.id); // Update the active state
                    }}
                    className={`p-3 rounded-full cursor-pointer ${
                        isSelected === item.id ? 'bg-yellow-500' : 'bg-zinc-800'
                    } hover:scale-125 transform transition duration-200`}
                >
                    <img src={item.icon} alt={item.label} className="h-6 w-6" />
                </button>
            ))}
        </div>
    );
}
