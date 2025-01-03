  import Right from "../assets/right-arrow.png"
  import Profile from "../assets/profile.png"
  export default function Home() {
    const description: any = () => {
      return (
        <p className="text-white text-center sm:text-start flex justify-center sm:justify-center   pb-5 text-sm sm:text-base md:text-lg">
          <br /> I'm a passionate Frontend Developer with expertise in ReactJS and
          React Native,
          <br /> crafting dynamic web and mobile applications. I deliver engaging,
          functional
          <br /> solutions by combining clean code, innovative design, and
          creativity.
        </p>
      );
    };

    return (
      <div className="flex flex-col sm:flex-row min-h-screen justify-center sm:justify-start items-center p-5">
        <div className="bg-transparent rounded-3xl mb-5 sm:mb-0 sm:ml-5">
          <img
            src={Profile}
            className="w-40 h-40 sm:w-80 sm:h-80 md:w-100 md:h-100 rounded-full"
            alt="Profile"
          />
        </div>

        {/* Content */}
        <div className="sm:pl-72 text-center sm:text-start">
          <header className="text-yellow-500 text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl">
            I'm AADHI SARAVANAN
          </header>

          <span className="text-white mt-1 text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl block">
            FRONTEND DEVELOPER
          </span>

          {description()}

          <button
            className="bg-transparent p-2 flex justify-between items-center text-white font-semibold   
              rounded-full border-2 border-white hover:border-yellow-400 mt-4"
              onClick={() => window.location.href = "#about"}
          >
            <p className="pl-2">MORE ABOUT ME</p>
            <div className="pl-5">
              <img
                src={Right}
                height={30}
                width={30}
                className="bg-yellow-500 rounded-3xl p-1 hover:scale-125 transition-transform duration-200"
                alt="Right Arrow"
              />
            </div>
          </button>
        </div>
      </div>
    );
  }
