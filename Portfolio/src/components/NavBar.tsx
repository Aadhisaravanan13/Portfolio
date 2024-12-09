import homeIcon from '../assets/home.png';
import aboutIcon from '../assets/employee-man-alt.png';
import myWorksIcon from '../assets/briefcase.png';
import contactIcon from '../assets/envelope.png';
import { useState } from 'react';

export default function NavBar() {
    const navIcons: any = [
        { id: 1, icon: homeIcon },
        { id: 2, icon: aboutIcon },
        { id: 3, icon: myWorksIcon },
        { id: 4, icon: contactIcon },
    ];
    const [isSelected, setSelected]: any = useState(1);

    return (
        <div className="relative h-20">
            <div
                className="absolute top-1/2 right-4 -translate-y-1/2 flex flex-col gap-5 items-center sm:right-2 md:right-4 lg:right-6"
            >
                {navIcons.map((item: any) => (
                    <div
                        key={item.id}
                        className={`p-2 rounded-full border border-transparent ${isSelected === item.id ? 'bg-yellow-500' : 'bg-slate-950'}
                        hover:scale-150 transform transition-transform duration-100 ease-in-out cursor-pointer`}
                        onClick={() => setSelected(item.id)}
                    >
                        <img src={item.icon} height={20} width={20} alt="icon" />
                    </div>
                ))}
            </div>
        </div>
    );
}
