import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import  Button  from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img
          src={offer}
          alt='Shoe Promotion'
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-palanquin font-bold'>
          <span className='text-coral-red'>Special </span>
          Offer
        </h2>
        <p className='mt-4 info-text'>
        Set forth on a shopping expedition that revolutionizes the way you perceive deals. 
        With an array of top-tier choices and astounding discounts, we present a value that is unmatched, 
        distinguishing us from the rest.
        </p>
        <p className='mt-6 info-text'>
        Explore a realm of boundless opportunities meticulously crafted to satisfy your individual wishes, 
        outshining even the grandest anticipations. 
        Your adventure in our domain is truly extraordinary, exceeding all benchmarks.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='Shop now' iconURL={arrowRight} />
          <Button
            label='Learn more'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;