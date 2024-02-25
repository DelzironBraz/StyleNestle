import { useQuery } from "react-query"
import { getAllProducts } from "../utils/fetchFromApi"
import ProductCard from "./ProductCard"
import { Product } from "../interface/Product";

const Features = () => {
    const { data } = useQuery(['products'], () => (
        getAllProducts()
    ));

    if (data) {
        console.log(data)
        return (
            <section id="features" className="min-h-screen flex flex-col items-center justify-center pt-24">
                <h1 className="font-semibold text-4xl text-center text-ExtraDarkColor">Exclusive Products</h1>

                <div className="flex flex-wrap justify-center items-center gap-5 pt-8 w-3/4">
                    {data.map((product: Product) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            image={product.image}
                            price={product.price}
                        />
                    ))}
                </div>
            </section>
        )
    }
}

export default Features