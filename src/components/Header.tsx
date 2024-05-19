import projectHeaderImg from "./../assets/header-project.jpg";
import testiHeaderImg from "./../assets/testi 2 copy.jpg";

const Header = () => {
  return (
    <header className="flex flex-col gap-8 text-center pt-14">
      <div className="flex flex-col items-center gap-4">
        <h2 className="font-bold text-7xl max-sm:text-5xl">
          Transforming ideas into websites
        </h2>
        <p>
          A Specialist in Website Development. <br></br>Quick and precise.
        </p>
        <a href="#overview" className="btn btn-primary w-max">
          My Overview
        </a>
      </div>
      <div className="relative p-4">
        <img
          src={testiHeaderImg}
          alt=""
          className="absolute w-1/3 shadow-2xl md:w-1/5 rounded-xl top-28 left-1 md:left-16"
        />
        <img
          src={projectHeaderImg}
          alt=""
          className="mx-auto border-2 border-black rounded-xl md:w-3/4"
        />
      </div>
    </header>
  );
};

export default Header;
