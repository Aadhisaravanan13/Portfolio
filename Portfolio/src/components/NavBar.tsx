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

    const handleScroll = (targetId: string) => {
        const section = document.querySelector<HTMLElement>(`#${targetId}`);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            const selectedIcon = navIcons.find((icon) => icon.target === targetId)?.id ?? 1;
            setSelected(selectedIcon);
        }
    };
    

    return (
        <div className="fixed top-0 right-0 h-full flex flex-col justify-center items-center space-y-4 p-4">
            {navIcons.map((item) => (
                <button
                    key={item.id}
                    onClick={() => handleScroll(item.target)}
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
