// import Home from "./Home"

function About() {
  return (
    <>
      {/* <Home /> */}
      <div className="flex-col p-10 relative">
        <div className="flex justify-center">
          <header className="text-zinc-900 text-7xl font-bold tracking-widest opacity-80">
            RESUME
          </header>
          <h1 className="text-white text-4xl font-bold absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            ABOUT <span className="text-yellow-500">ME</span>
          </h1>
        </div>
        <div className="flex-col ">
          <h2 className=" text-gray-100 text-lg font-semibold pt-10">
            PERSONAL INFOS
          </h2>
        </div>
      </div>
    </>
  );
}

export default About;
