import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center min-h-96">
        <span className=" border-t-4 border-yellow-500 mr-5 mt-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <header className="text-yellow-500 text-center text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl ">
          I'm AADHI SARAVANAN.
        </header>
      </div>
      <NavBar />
    </>
  );
}
