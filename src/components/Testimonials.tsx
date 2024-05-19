import testi_1 from "./../assets/testi 1.webp";
import testi_2 from "./../assets/testi 2.webp";
import testi_3 from "./../assets/testi 3.webp";
import testi_4 from "./../assets/testi 4.webp";

const Testimonials = () => {
  return (
    <div className="my-11 md:px-8">
      <div className="w-11/12 p-4 mx-auto text-center md:w-1/2">
        <p className="text-xl text-center">Hear what my clients say</p>
        <p>
          I always identify client problems and solve them immediately using the
          right technology.{" "}
          <a
            className="link link-info"
            href="https://www.fiverr.com/yusufhabib164"
          >
            View on Fiverr.
          </a>
        </p>
      </div>
      <div className="flex items-center justify-start w-full px-4 py-2 mb-8 overflow-x-scroll gap-x-2 max-h-max">
        <img
          className="img-testimonial"
          src={testi_1}
          alt="testimonial-for-freelance-yusufhabib-webdev"
        />
        <img
          className="img-testimonial"
          src={testi_2}
          alt="testimonial-for-freelance-yusufhabib-webdev"
        />
        <img
          className="img-testimonial"
          src={testi_3}
          alt="testimonial-for-freelance-yusufhabib-webdev"
        />
        <img
          className="img-testimonial"
          src={testi_4}
          alt="testimonial-for-freelance-yusufhabib-webdev"
        />
      </div>
    </div>
  );
};

export default Testimonials;
