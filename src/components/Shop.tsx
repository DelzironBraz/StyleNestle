import { useQuery } from "react-query"
import { getProductsByCategory } from "../utils/fetchFromApi"

import ProductCard from "./ProductCard"
import Slider from "react-slick";

const Shop = () => {
    const { isLoading, isError, error, data } = useQuery(['products'], () => (
        getProductsByCategory("women's clothing")
    ));

    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    if (data) {
        return (
            <section id="shop" className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-14">
                <div>
                    <h1 className="font-semibold text-4xl text-center text-ExtraDarkColor">Best sellers</h1>
                </div>

                <div className="mt-8">
                    <Slider {...settings}>
                        {data.map((product) => (
                            <ProductCard
                                key={product.id}
                                id={product.id}
                                title={product.title}
                                image={product.image}
                                price={product.price}
                            />
                        ))}
                    </Slider>
                </div>
            </section>
        )
    }
}

export default Shop