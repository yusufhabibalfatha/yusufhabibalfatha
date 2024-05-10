import testi_1 from "./../assets/testi 1.png"
import testi_2 from "./../assets/testi 2.png"
import testi_3 from "./../assets/testi 3.png"
import testi_4 from "./../assets/testi 4.png"

const Testimonials = () => {
    return (
        <div className="flex items-center justify-start w-full px-4 py-2 mb-8 overflow-x-scroll gap-x-2 max-h-max bg-secondary">
            <img className="w-3/4 rounded-md md:w-2/4 lg:w-1/4" src={testi_1} alt="" />
            <img className="w-3/4 rounded-md md:w-2/4 lg:w-1/4" src={testi_2} alt="" />
            <img className="w-3/4 rounded-md md:w-2/4 lg:w-1/4" src={testi_3} alt="" />
            <img className="w-3/4 rounded-md md:w-2/4 lg:w-1/4" src={testi_4} alt="" />
        </div>
    );
}
 
export default Testimonials;