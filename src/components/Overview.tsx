import photo from "./../assets/photo-profile.webp";

const Sidebar = () => {
  return (
    <aside
      className="p-6 text-justify scroll-mt-12 sm:max-w-xs lg:max-w-md"
      id="overview"
    >
      <h2 className="text-3xl text-center">Overview</h2>
      <img
        className="pt-6 mx-auto max-h-60 md:max-h-96"
        src={photo}
        alt="photo-profile"
      />
      <p className="p-6 text-xs italic text-center text-gray-400">
        -this is when I gave counseling to my juniors about selecting a college.
      </p>
      <p>
        As a website developer, I have helped my clients solve website-related
        problems, from college assignments and creating basic scripts to custom
        websites and WordPress sites.{" "}
        <span className="text-accent">
          Working quickly and employing the right technology is a service I can
          provide.
        </span>
      </p>
      <p className="mt-4">
        While I specialize in developing websites, I occasionally take UI/UX or
        writing courses to expand my skill set.
      </p>
    </aside>
  );
};

export default Sidebar;
