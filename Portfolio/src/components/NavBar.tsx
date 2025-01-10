import { useState } from 'react';

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

    return (
        <div className="fixed top-0 right-0 h-full flex flex-col justify-center items-center space-y-4 p-4 ">
            {navIcons.map((item) => (
                <a
                    key={item.id}
                    href={`#${item.target}`}
                    onClick={() => setSelected(item.id)}
                    className={`p-3 rounded-full ${
                        isSelected === item.id ? 'bg-yellow-500' : 'bg-zinc-800'
                    } hover:scale-125 transform transition duration-200`}
                >
                    <img src={item.icon} alt={item.label} className="h-6 w-6" />
                </a>
            ))}
        </div>
    );
}
