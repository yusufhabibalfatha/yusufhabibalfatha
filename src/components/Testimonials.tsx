import testi_1 from "./../assets/testi-1.png"
import testi_2 from "./../assets/testi-2.png"
import testi_2_2 from "./../assets/testi-2-2.png"
import testi_2_3 from "./../assets/testi-2-3.png"
import testi_3 from "./../assets/testi-3.png"

const Testimonials = () => {
    return (
        <div className="flex flex-wrap items-center justify-start w-full px-4 py-2 overflow-x-scroll gap-x-2 max-h-52">
            <p className="w-full text-center">Testimonials</p>
            <img className="max-h-36" src={testi_1} alt="" />
            <img className="max-w-44 max-h-36" src={testi_2} alt="" />
            <img className="max-w-44 max-h-36" src={testi_2_2} alt="" />
            <img className="max-w-44 max-h-36" src={testi_2_3} alt="" />
            <img className="max-w-44 max-h-36" src={testi_3} alt="" />
        </div>
    );
}
 
export default Testimonials;