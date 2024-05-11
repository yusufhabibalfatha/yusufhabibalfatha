import testi_1 from "./../assets/testi 1.webp"
import testi_2 from "./../assets/testi 2.webp"
import testi_3 from "./../assets/testi 3.webp"
import testi_4 from "./../assets/testi 4.webp"

const Testimonials = () => {
    return (
        <>
            <p className="w-full p-4 mt-8 text-3xl text-center">Testimonials</p>
            <div className="flex items-center justify-start w-full px-4 py-2 mb-8 overflow-x-scroll gap-x-2 max-h-max bg-secondary">
                <img className="img-testimonial" src={testi_1} alt="testimonial-for-freelance-yusufhabib-webdev" />
                <img className="img-testimonial" src={testi_2} alt="testimonial-for-freelance-yusufhabib-webdev" />
                <img className="img-testimonial" src={testi_3} alt="testimonial-for-freelance-yusufhabib-webdev" />
                <img className="img-testimonial" src={testi_4} alt="testimonial-for-freelance-yusufhabib-webdev" />
            </div>
        </>
    );
}
 
export default Testimonials;