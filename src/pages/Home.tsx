import Collections from "../components/Collections";
import Features from "../components/Features";
import Hero from "../components/Hero"
import Products from "../components/Products";
import Review from "../components/Review";
import Shop from "../components/Shop";

const Home = () => {
    return (
        <main>
            <Hero />
            <Shop />
            <Collections />
            <Features />
            <Products />
            <Review />
        </main>
    )
}

export default Home;