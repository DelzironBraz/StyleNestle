import { useQuery } from "react-query";
import { getProductsByCategory } from "../utils/fetchFromApi";
import { Product } from "../interface/Product";
import ProductCard from "./ProductCard";

const Products = () => {
    const { data } = useQuery(['products'], () => (
        getProductsByCategory("men's clothing")
    ));

    if (data) {
        return (
            <section id="products" className="min-h-screen flex flex-col items-center justify-center pt-24">
                <h1 className="font-semibold text-4xl text-center text-ExtraDarkColor">New Arrivals</h1>

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

export default Products