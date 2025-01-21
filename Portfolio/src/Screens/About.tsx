// import Home from "./Home"

function About() {

  const personalDetailsList: any = () => {
    return (
      <>
        <div className="text-white font-semibold pr-14">
          <ul>
            <li className="text-gray-400 pb-7">
              First Name: <span className=" text-white">Aadhi</span>
            </li>
            <li className="text-gray-400 pb-7">
              Age: <span className=" text-white">19 Years</span>
            </li>
            <li className="text-gray-400 pb-7">
              Freelance: <span className=" text-white">Commence Shortly</span>
            </li>
            <li className="text-gray-400 pb-7">
              Phone: <span className=" text-white">+917305194044</span>
            </li>
            <li className="text-gray-400 pb-7">
              LinkedIn: <span className=" text-white">Aadhi Saravanan S</span>
            </li>
          </ul>
        </div>
        <div className="text-white font-semibold ">
          <ul>
            <li className="text-gray-400 pb-7">
              Last Name: <span className=" text-white">Saravanan S</span>
            </li>
            <li className="text-gray-400 pb-7">
              Nationality: <span className=" text-white">India</span>
            </li>
            <li className="text-gray-400 pb-7">
              Address: <span className=" text-white">Chennai</span>
            </li>
            <li className="text-gray-400 pb-7">
              Email: <span className=" text-white">mr.aadhi2005@gmail.com</span>
            </li>
            <li className="text-gray-400 pb-7">
              Languages: <span className=" text-white">English, Tamil</span>
            </li>
          </ul>
        </div>
      </>
    );
  };

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
        <h2 className=" text-gray-100 text-lg font-semibold pt-16 pb-10 pl-20">
          PERSONAL INFOS
        </h2>
        <div className="flex ">
          <div className="flex">{personalDetailsList()}</div>
          <div className="flex-col">

            <div className="flex pb-10">
              <div>
                <div className="flex flex-col">
                  <div className="flex pb-1">
                    <p className="text-yellow-500 text-4xl font-semibold"> 1</p>
                    <p className="text-2xl text-yellow-500">+</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div><p className="border border-zinc-600 w-8 mb-6" /></div>
                    <div><p className="text-zinc-100 pl-5">YEARS OF <br /> EXPERIENCE</p></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col">
                  <div className="flex pb-1">
                    <p className="text-yellow-500 text-4xl font-semibold"> 5</p>
                    <p className="text-2xl text-yellow-500">+</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div><p className="border border-zinc-600 w-8 mb-6" /></div>
                    <div><p className="text-zinc-100 pl-3">COMPLETED<br /> PROJECTS</p></div>
                  </div>
                </div>
              </div>F
            </div>

            <div className="flex">
              <div>
                <div className="flex flex-col">
                  <div className="flex pb-1">
                    <p className="text-yellow-500 text-4xl font-semibold"> 1</p>
                    <p className="text-2xl text-yellow-500">+</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div><p className="border border-zinc-600 w-8 mb-6" /></div>
                    <div><p className="text-zinc-100 pl-5">YEARS OF <br /> EXPERIENCE</p></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col">
                  <div className="flex pb-1">
                    <p className="text-yellow-500 text-4xl font-semibold"> 5</p>
                    <p className="text-2xl text-yellow-500">+</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div><p className="border border-zinc-600 w-8 mb-6" /></div>
                    <div><p className="text-zinc-100 pl-3">COMPLETED<br /> PROJECTS</p></div>
                  </div>
                </div>
              </div>F
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
