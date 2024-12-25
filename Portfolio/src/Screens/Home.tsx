// import NavBar from "../components/NavBar";

export default function Home() {
  const description: any = () => {
    return (
      <p className="text-white text-center">
        I'm a passionate Frontend Developer who believes in working smart and creatively. <br />
        With expertise in ReactJS and React Native, I craft intuitive and dynamic user  <br />
        experiences for both web and mobile applications. My approach combines  <br />
        technical precision with artistic flair to deliver solutions that are not only functional
        <br /> but also engaging. Whether it's building a responsive website or  <br />
        a seamless mobile app, I'm dedicated to bringing ideas to life with clean code
        and innovative design.
      </p>
    )
  }
  return (
    <>
      <div className="flex-col justify-center items-center">
        <div>
          <header className="text-yellow-500 text-center text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl flex items-center justify-center">
            <span className="border-t-4 border-yellow-500 w-12 mr-4"></span>
            I'm AADHI SARAVANAN. 
           <span className="text-white"> WEB DESIGNER </span>
          </header>
          {description()}
        </div>
      </div>
      {/* <NavBar /> */}
    </>
  );
}
