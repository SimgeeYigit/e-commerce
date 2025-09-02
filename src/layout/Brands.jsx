import aws from "../assets/homepage/logos/aws.svg";
import hooli from "../assets/homepage/logos/hooli.svg";
import lyft from "../assets/homepage/logos/lyft.svg";
import stripe from "../assets/homepage/logos/stripe.svg";
import x from "../assets/homepage/logos/x.svg";
import y from "../assets/homepage/logos/y.svg";

function Brands() {
    return (
        <div className="flex items-center py-[50px] gap-[30px] justify-around mx-[195px]" >
            <img src={hooli} alt="Hooli" />
            <img src={lyft} alt="Lyft" />
            <img src={x} alt="X" />
            <img src={stripe} alt="Stripe" />
            <img src={aws} alt="AWS" />
            <img src={y} alt="Y" />
        </div>
    )
}

export default Brands;