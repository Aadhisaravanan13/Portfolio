function MySkill() {
  const skills = [
    { id: 1, name: "HTML" },
    { id: 2, name: "CSS" },
    { id: 3, name: "JAVASCRIPT" },
    { id: 4, name: "TYPESCRIPT" },
    { id: 5, name: "REACT JS" },
    { id: 6, name: "NEXT JS" },
    { id: 7, name: "REACT NATIVE" },
    { id: 8, name: "REST API" },
    { id: 9, name: "TAILWIND" },
    { id: 10, name: "JAVASCRIPT DOM" },
    { id: 11, name: "AWS" },
    { id: 12, name: "GIT" },
  ];

  const firstRow = skills.slice(0, 4);
  const secondRow = skills.slice(4, 8);
  const thirdRow = skills.slice(8);

  return (
    <>
      <div className="flex flex-col items-center justify-center px-4 sm:px-8">
        <div className="text-center pb-12">
          <h1 className="text-2xl font-bold text-white">MY SKILLS</h1>
        </div>
        <div className="space-y-14 w-full max-w-6xl">
          {/* First row of skills */}
          <div className="flex justify-between gap-4">
            {firstRow.map((item) => (
              <div
                key={item.id}
                className="flex justify-center items-center cursor-pointer w-28 h-28 border-2 border-yellow-500 
              rounded-full bg-transparent hover:bg-yellow-500 hover:text-gray-900 hover:scale-110 transition duration-700"
              >
                <p className="font-bold text-white text-center">{item.name}</p>
              </div>
            ))}
          </div>
          {/* Second row of skills */}
          <div className="flex justify-between  gap-4">
            {secondRow.map((item) => (
              <div
                key={item.id}
                className="flex justify-center items-center cursor-pointer w-28 h-28 border-2 border-yellow-500 
              rounded-full bg-transparent hover:bg-yellow-500 hover:text-gray-900 hover:scale-110 transition duration-500"
              >
                <p className="font-bold text-white text-center">{item.name}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-between gap-4">
            {thirdRow.map((item) => (
              <div
                key={item.id}
                className="flex justify-center items-center cursor-pointer w-28 h-28 border-2 border-yellow-500 
              rounded-full bg-transparent hover:bg-yellow-500 hover:text-gray-900 hover:scale-110 transition duration-700"
              >
                <p className="font-bold text-white text-center">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MySkill;
