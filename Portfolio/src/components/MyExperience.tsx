import Description from "../assets/note-pad.png";
function MyExperience() {
  return (
    <>
      <div className="text-center pb-12">
        <h1 className="text-2xl font-bold text-white">
          EXPERIENCE &nbsp; & &nbsp; EDUCATION
        </h1>
      </div>
      <div className="flex-col space-y-16 px-24">
        <div className="flex justify-between ">
          <div className="flex">
            <div className="flex flex-col justify-center items-center ">
              <div className="p-3 rounded-full cursor-pointer bg-yellow-500">
                <img src={Description} alt="note" className="h-7 w-7" />
              </div>
              <div className="h-24 w-0 border border-zinc-800" />
            </div>
            <div className="flex flex-col pt-2 pl-7">
              <div>
                <p className="border-0 bg-zinc-800 rounded-full text-white w-14 text-center">
                  2023
                </p>
                <h3 className="text-white font-semibold pt-5 pb-5">
                  12th GRADE (CBSE){" "}
                  <span className="text-zinc-600 font-sans">
                    - VIVEKANANDA EDUCATIONAL SOCIETY
                  </span>{" "}
                </h3>
                <p className="text-zinc-600">
                  Successfully completed my schooling with a strong foundation
                  in <br /> high-quality education and valuable life skills.
                </p>
              </div>
            </div>
          </div>

          <div className="flex pr-10">
            <div className="flex flex-col justify-center items-center ">
              <div className="p-3 rounded-full cursor-pointer bg-yellow-500">
                <img src={Description} alt="note" className="h-7 w-7" />
              </div>
              <div className="h-24 w-0 border border-zinc-800" />
            </div>
            <div className="flex flex-col pt-2 pl-7">
              <div>
                <p className="border-0 bg-zinc-800 rounded-full text-white w-32 text-center">
                  2023 - PRESENT
                </p>
                <h3 className="text-white font-semibold pt-5 pb-5">
                  BACHELOR OF COMPUTER APPLICATION{" "}
                  <span className="text-zinc-600 font-sans">
                    {" "}
                    - MGR UNIVERSITY
                  </span>{" "}
                </h3>
                <p className="text-zinc-600">
                  Currently enrolled in an enriching BCA program at <br /> MGR
                  University in Chennai, enhancing my technical expertise.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between ">
          <div className="flex">
            <div className="flex flex-col justify-center items-center ">
              <div className="p-3 rounded-full cursor-pointer bg-yellow-500">
                <img src={Description} alt="note" className="h-7 w-7" />
              </div>
              <div className="h-24 w-0 border border-zinc-800" />
            </div>
            <div className="flex flex-col pt-2 pl-7">
              <div>
                <p className="border-0 bg-zinc-800 rounded-full text-white w-32 text-center">
                  2024 - PRESENT
                </p>
                <h3 className="text-white font-semibold pt-5 pb-5">
                  FRONT-END INTERNSHIP{" "}
                  <span className="text-zinc-600 font-sans">
                    - REVOLITE INFOTECH
                  </span>{" "}
                </h3>
                <p className="text-zinc-600">
                  Currently engaged in a dynamic frontend development
                  internship, <br />
                  honing my skills in creating interactive user interfaces.
                </p>
              </div>
            </div>
          </div>

          {/* <div className="flex">
            <div className="flex flex-col justify-center items-center ">
              <div className="p-3 rounded-full cursor-pointer bg-yellow-500">
                <img src={Description} alt="note" className="h-7 w-7" />
              </div>
              <div className="h-24 w-0 border border-zinc-800" />
            </div>
            <div className="flex flex-col pt-2 pl-7">
              <div>
                <p className="border-0 bg-zinc-800 rounded-full text-white w-14 text-center">
                  2023
                </p>
                <h3 className="text-white font-semibold pt-5 pb-5">
                  12th GRADE (CBSE){" "}
                  <span className="text-zinc-600 font-sans">
                    - VIVEKANANDHA EDUCATIONAL SCOCIETY
                  </span>{" "}
                </h3>
                <p className="text-zinc-600">
                  Successfully completed my schooling with a strong foundation
                  in <br /> high-quality education and valuable life skills.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default MyExperience;
