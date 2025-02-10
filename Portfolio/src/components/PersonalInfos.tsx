import Download from "../assets/Download.png";
function PersonalInfos() {
  const headers: any = () => {
    return (
      <>
        <div className="flex justify-center">
          <header className="text-zinc-800 text-7xl font-bold tracking-widest opacity-80">
            RESUME
          </header>
          <h1 className="text-white text-4xl font-bold absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            ABOUT <span className="text-yellow-500">ME</span>
          </h1>
        </div>
      </>
    );
  };

  const personalDetailsList: any = () => {
    return (
      <>
        <div className="text-white pr-48">
          <ul>
            <li className="text-gray-400 pb-7">
              First Name:{" "}
              <span className=" text-white font-semibold"> &nbsp;Aadhi</span>
            </li>
            <li className="text-gray-400 pb-7">
              Age:{" "}
              <span className=" text-white font-semibold">&nbsp;19 Years</span>
            </li>
            <li className="text-gray-400 pb-7">
              Freelance:{" "}
              <span className=" text-white font-semibold">
                &nbsp;Commence Shortly
              </span>
            </li>
            <li className="text-gray-400 pb-7">
              Phone:{" "}
              <span className=" text-white font-semibold">
                &nbsp;+917305194044
              </span>
            </li>
            <li className="text-gray-400 pb-7">
              LinkedIn:{" "}
              <span className=" text-white font-semibold">
                &nbsp;Aadhi Saravanan S
              </span>
            </li>
          </ul>
        </div>
        <div className="text-white pr-48">
          <ul>
            <li className="text-gray-400 pb-7">
              Last Name:{" "}
              <span className=" text-white font-semibold">
                &nbsp;Saravanan S
              </span>
            </li>
            <li className="text-gray-400 pb-7">
              Nationality:{" "}
              <span className=" text-white font-semibold">&nbsp;India</span>
            </li>
            <li className="text-gray-400 pb-7">
              Address:{" "}
              <span className=" text-white font-semibold">&nbsp;Chennai</span>
            </li>
            <li className="text-gray-400 pb-7">
              Email:{" "}
              <span className=" text-white font-semibold">
                &nbsp;mr.aadhi2005@gmail.com
              </span>
            </li>
            <li className="text-gray-400 pb-7">
              Languages:{" "}
              <span className=" text-white font-semibold">
                &nbsp;English, Tamil
              </span>
            </li>
          </ul>
        </div>
      </>
    );
  };

  const informationChart: any = () => {
    return (
      <>
        <div className="flex pb-10">
          <div>
            <div className="flex flex-col pr-48">
              <div className="flex pb-1">
                <p className="text-yellow-500 text-4xl font-semibold"> 1</p>
                <p className="text-2xl text-yellow-500">+</p>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="border border-zinc-600 w-8 mb-6" />
                </div>
                <div>
                  <p className="text-zinc-100 pl-5">
                    YEARS OF <br /> EXPERIENCE
                  </p>
                </div>
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
                <div>
                  <p className="border border-zinc-600 w-8 mb-6" />
                </div>
                <div>
                  <p className="text-zinc-100 pl-3">
                    COMPLETED
                    <br /> PROJECTS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          <div>
            <div className="flex flex-col pr-48">
              <div className="flex pb-1">
                <p className="text-yellow-500 text-4xl font-semibold"> 12</p>
                <p className="text-2xl text-yellow-500">+</p>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="border border-zinc-600 w-8 mb-6" />
                </div>
                <div>
                  <p className="text-zinc-100 pl-5">
                    {" "}
                    MASTERY <br /> SKILLS
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col">
              <div className="flex pb-1">
                <p className="text-yellow-500 text-4xl font-semibold"> 10</p>
                <p className="text-2xl text-yellow-500">+</p>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="border border-zinc-600 w-8 mb-6" />
                </div>
                <div>
                  <p className="text-zinc-100 pl-3">
                    MONTHS OF
                    <br /> INTERNSHIP
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const Button: any = () => {
    return (
      <>
        <button
          className="bg-transparent p-2 flex justify-between items-center text-white font-semibold   
              rounded-full border border-white hover:border-yellow-400 mt-4"
        >
          <p className="pl-2">DOWNLOAD CV</p>
          <div className="pl-5">
            <img
              src={Download}
              height={30}
              width={30}
              className="bg-yellow-500 rounded-3xl p-1 hover:scale-150 transition-transform duration-200"
              alt="Right Arrow"
            />
          </div>
        </button>
      </>
    );
  };
  return (
    <>
      <div className="flex-col p-10 relative max-w-full">
        <div>{headers()}</div>
        <h2 className=" text-gray-100 text-xl font-semibold pt-16 pb-10 pl-10 ">
          PERSONAL INFOS
        </h2>
        <div className="flex pl-10">
          <div className="flex">{personalDetailsList()}</div>
          <div className="flex-col">{informationChart()}</div>
        </div>
        <div className="pl-10">{Button()}</div>
      </div>
    </>
  );
}

export default PersonalInfos;
