// import NavBar from "../components/NavBar";
import Profile from "../assets/profile.png"
import Right from "../assets/right-arrow.png"

export default function Home() {
  const description: any = () => {
    return (
      <p className="text-white text-start flex justify-center pb-5">
        <br /> I'm a passionate Frontend Developer with expertise in ReactJS and React Native,
        <br /> crafting dynamic web and mobile applications.  I deliver engaging, functional
        <br /> solutions by combining clean code, innovative design, and creativity.
      </p>
    )
  }
 
  return (
    <>
      <div className="flex min-h-screen justify-start items-center">
        <div className="bg-yellow-600 rounded-3xl ml-5">
          <img src={Profile} height={370} width={370} />
        </div>
        <div className="pl-60">
          <header className="text-yellow-500 text-center text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl flex items-center justify-center">
            <span className="border-t-4 border-yellow-500 w-12 mr-4"></span>
            I'm AADHI SARAVANAN.
          </header>
          <span className="text-white flex justify-center text-center text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl">FRONTEND DEVELOPER</span>
          {description()}
          <button className="bg-transparent p-2 flex justify-between text-white font-semibold rounded-full items-center border-2 border-yellow-500">
            MORE ABOUT ME
            <div className="pl-9"> <img src={Right} height={30} width={30} className="bg-yellow-500 rounded-3xl p-1" /></div>
          </button>
        </div>
      </div>
    </>
  );
}
