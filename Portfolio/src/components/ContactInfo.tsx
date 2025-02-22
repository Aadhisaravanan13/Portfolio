import addressIcon from "../assets/address.png";
import mailIcon from "../assets/mail.png";
import phoneIcon from "../assets/viber.png";
import twiter from "../assets/twitter.png";
import linked from "../assets/linkedin.png";
import insta from "../assets/instagram.png";
import facebook from "../assets/facebook.png";

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
                            <div className="flex pt-10" key={item.id} >
                                <img src={item.icon} className="h-8 w-8" />
                                <div className="flex-col pl-7">
                                    <div className="text-zinc-500 text-xl font-semibold">{item.title}</div>
                                    <div className="text-white text-lg">{item.info}</div>
                                </div>
                            </div>
                        )
                    })
                }
                < div className="flex gap-6 mt-11" key={icons.id} >
                    {
                        icons.map((icon: any) => {
                            return (
                                <img src={icon.icon} className="h-8 w-8" />
                            )
                        })
                    }
                </div >
            </>
        )
    }
    const inputs1: any = [
        { id: 1, placeholder: "Your Name", },
        { id: 2, placeholder: "Your Email", },
    ]
    return (
        <>
            <div>{headers()}</div>
            <div className="relative flex justify-around p-10 px-20">
                <div>
                    {titles()}
                    {reahMeOut()}
                </div>
                <div className="pt-14 flex-col">
                    <div className="flex justify-between gap-10">
                        {inputs1.map((item: any) => {
                            return (
                                <input
                                    type={item.id === 1 ? "text" : "email"}
                                    placeholder={item.placeholder}
                                    className={`border-none bg-zinc-800  rounded-3xl w-64 p-2 focus:outline-none text-white pl-5`} />
                            )
                        })}
                    </div>
                    <div className="pt-8">
                        <input type="text" placeholder={"Your Subject"}
                            className={`border-0 bg-zinc-800  rounded-3xl w-full p-2 focus:outline-none text-white pl-5`} />
                    </div>
                    <div className="pt-8">
                        <textarea
                            placeholder={"Your Message"}
                            className={`border-0 bg-zinc-800 rounded-3xl w-full max-h-44 h-44 p-2 focus:outline-none text-white pl-5`} />
                    </div>
                    <div className="flex justify-center gap-4 mt-10">
                        <button className="border-0 bg-yellow-500  rounded-3xl w-32 h-10 text-white font-bold focus:outline-none">SEND MESSAGE</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ContactInfo