import { useState } from 'react';
import { Link } from 'react-router-dom';

// Import icons
import homeIcon from '../assets/home.png';
import aboutIcon from '../assets/employee-man-alt.png';
import myWorksIcon from '../assets/briefcase.png';
import contactIcon from '../assets/envelope.png';

export default function NavBar() {
    const navIcons = [
        { id: 1, icon: homeIcon, path: '/', label: 'Home' },
        { id: 2, icon: aboutIcon, path: '/about', label: 'About' },
        { id: 3, icon: myWorksIcon, path: '/works', label: 'My Works' },
        { id: 4, icon: contactIcon, path: '/contact', label: 'Contact' },
    ];

    const [isSelected, setSelected] = useState(1);

    return (
        <div className="fixed top-0 right-0 h-full flex flex-col justify-center items-center space-y-4 p-4">
            {navIcons.map((item) => (
                <Link
                    key={item.id}
                    to={item.path}
                    onClick={() => setSelected(item.id)}
                    className={`p-3 rounded-full ${
                        isSelected === item.id ? 'bg-yellow-500' : 'bg-zinc-800'
                    } hover:scale-110 transform transition duration-200`}
                >
                    <img src={item.icon} alt={item.label} className="h-6 w-6" />
                </Link>
            ))}
        </div>
    );
}
