import collection from '../assets/img/collection.png';

const Collections = () => {
    return (
        <section className="h-screen lg:h-[70ch] flex flex-col justify-center items-center lg:flex-row bg-PrimaryColor mt-14 lg:px-32">
            <div className='flex justify-center w-full lg:w-2/4 pt-6'>
                <img src={collection} alt="Collection" />
            </div>

            <div className='w-full lg:w-2/4 space-y-4 pt-5 text-center lg:text-start'>
                <h1 className='font-semibold text-4xl text-ExtraDarkColor'>Best Summer Collection</h1>
                <h3 className='text-4xl font-medium text-DarkColor'>Sale Get Up To 60% off</h3>

                <p className='text-justify'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>

                <button className='bg-DarkColor hover:bg-ExtraDarkColor text-white px-4 py-2 font-medium'>
                    shop now
                </button>
            </div>
        </section>
    )
}

export default Collections