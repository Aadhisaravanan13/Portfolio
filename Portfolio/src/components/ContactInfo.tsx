import addressIcon from "../assets/address.png";
import mailIcon from "../assets/mail.png";
import phoneIcon from "../assets/viber.png";
import twiter from "../assets/twitter.png";
import linked from "../assets/linkedin.png";
import insta from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import ContactForm from "./ContactForm";
// import Download from "../assets/Download.png";


function ContactInfo() {
    const headers: any = () => {
        return (
            <div className="flex justify-center pt-16 relative">
                <header className="text-zinc-800 text-7xl font-bold tracking-widest opacity-80 pt-2">
                    CONTACT
                </header>
                <h1 className="text-white text-4xl text-nowrap font-bold absolute top-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pt-7">
                    GET IN <span className="text-yellow-500">TOUCH</span>
                </h1>
            </div>
        );
    };
    const titles: any = () => {
        return (
            <div className="pt-14">
                <h1 className="text-xl text-white font-semibold">REACH ME OUT HERE  !</h1>
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
    const icons: any = [
        { id: 1, icon: linked },
        { id: 2, icon: twiter },
        { id: 3, icon: insta },
        { id: 4, icon: facebook },
    ]
    const reahMeOut: any = () => {
        return (
            <>
                {
                    infos.map((item: any) => {
                        return (
                            <div className="flex pt-6" key={item.id} >
                                <img src={item.icon} className="h-8 w-8" />
                                <div className="flex-col pl-7">
                                    <div className="text-zinc-500 text-xl font-semibold">{item.title}</div>
                                    <div className="text-white text-lg">{item.info}</div>
                                </div>
                            </div>
                        )
                    })
                }
                <div className="flex gap-6 mt-11" key={icons.id} >
                    {
                        icons.map((icon: any) => {
                            return (
                                <img src={icon.icon} className="h-9 w-9 cursor-pointer transition-transform duration-300 hover:scale-125" />
                            )
                        })
                    }
                </div >
            </>
        )
    }
  
    return (
        <>
            <div>{headers()}</div>
            <div className="relative flex justify-around p-10 px-10">
                <div>
                    {titles()}
                    {reahMeOut()}
                </div>
                <div className="pt-14 flex-col">
                    {ContactForm()}
                </div>

            </div>
        </>
    )
}

export default ContactInfo