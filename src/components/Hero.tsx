import hero from '../assets/img/hero.png';

const Hero = () => {
    return (
        <section id='home' className="min-h-screen flex flex-col justify-center md:flex-row items-center lg:justify-between lg:px-32 px-5 pt-24 md:pt-10 bg-PrimaryColor">
            <div className='space-y-4'>
                <h1 className="text-5xl font-semibold leading-tight text-ExtraDarkColor w-full lg:w-3/4">
                    Discovering and Defining Your Own Fashion!
                </h1>
                <p className="w-full lg:w-3/5 text-DarkColor font-medium">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy
                </p>
                <button className="bg-ExtraDarkColor text-white px-4 py-2 font-medium active:bg-amber-800">
                    shop now
                </button>
            </div>
            <div className='bg-DarkColor rounded-tr-[290px] rounded-tl-3xl rounded-br-3xl p-5 mt-10'>
                <img className='-ml-5 -mb-5' width={600} src={hero} alt="hero" />
            </div>
        </section>
    )
}

export default Hero