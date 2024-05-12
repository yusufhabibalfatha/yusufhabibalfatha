import Photo_profile from "../assets/photo-profile-hero.jpeg";

const Header = () => {
  return (
    <header className="min-h-screen p-6 hero bg-base-200">
      <div className="flex-col hero-content lg:flex-row-reverse lg:gap-24">
        <img
          src={Photo_profile}
          className="rounded-lg shadow-2xl"
          alt="photo-profile"
        />
        <div className="flex flex-col gap-4">
          <h2 className="text-5xl font-bold">Hi, I'm Yusuf Habib</h2>
          <p>
            A Specialist in Website Development. <br></br>Quick and precise.
          </p>
          <p></p>
          <a href="#overview" className="btn btn-primary w-max">
            Let's jump!
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
