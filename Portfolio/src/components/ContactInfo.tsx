import addressIcon from "../assets/address.png";
import mailIcon from "../assets/mail.png";
import phoneIcon from "../assets/viber.png";
function ContactInfo() {
    const headers: any = () => {
        return (
            <div className="flex justify-center pt-16">
                <header className="text-zinc-800 text-7xl font-bold tracking-widest opacity-80">
                    CONTACT
                </header>
                <h1 className="text-white text-4xl text-nowrap font-bold absolute top-32 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pt-7">
                    GET IN <span className="text-yellow-500">TOUCH</span>
                </h1>
            </div>
        );
    };
    const titles: any = () => {
        return (
            <div className="pt-14">
                <h1 className="text-xl text-white font-semibold">Reach Me Out <br /> Here!</h1>
                <p className="text-md text-white pt-3 line">◉ &nbsp;Have a question or idea? Let’s connect! Whether <br />
                    &nbsp; &nbsp;&nbsp; for a project or a chat, I’d love to hear from you! <br />
                    &nbsp; &nbsp;&nbsp; Let's connect and make something great together!</p>
            </div>
        )
    }
    const infos: any = [
        { id: 1, title: "Address Point", info: "Korattur, Chennai,TamilNadu, India", icon: addressIcon },
        { id: 2, title: "Mail Me", info: "mr.aadhi2005@gmail.com", icon: mailIcon },
        { id: 3, title: "Call Me", info: "+91 7305194044", icon: phoneIcon },
    ]
    return (
        <>
            <div className="relative flex flex-col justify-center p-10 px-20">
                {headers()}
                {titles()}
                {infos.map((item: any) => {
                    return (
                        <div className="flex pt-10">
                            <img src={item.icon} className="h-8 w-8" />
                            <div className="flex-col pl-7">
                                <div className="text-zinc-500 text-xl font-semibold">{item.title}</div>
                                <div className="text-white text-lg">{item.info}</div>
                            </div>
                        </div>
                    )
                })}
                <div className="flex">
                    <img src="" alt="" />
                </div>
            </div>
        </>
    )
}

export default ContactInfo