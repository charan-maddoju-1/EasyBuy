import Header from "../Header/index.js"

import "./index.css"

const Home=()=>(
    <>
        <Header/>
        <div className="home-container">
            <div className="home-content">
                <h1 className="home-heading"> Cloths That Get YOU Noticed</h1>
                <img 
                    src="https://img.freepik.com/free-photo/young-teen-woman-sunglasses-hat-holding-shopping-bags-her-hands-feeling-so-happiness-isolated-green-wall_231208-2681.jpg?uid=R132005142&ga=GA1.1.777678278.1745931066&semt=ais_hybrid&w=740"
                    alt="dresses to be noticed"
                    className="home-mobile-img"
                />
                <p className="home-description">
                Discover the latest trends in fashion with our curated collections for men, women, and kids. From everyday essentials to runway-inspired outfits, we bring you high-quality clothing that fits your lifestyle. Whether you're looking for bold streetwear, timeless classics, or comfortable loungewear, our styles are designed to empower self-expression and elevate your wardrobe.<br/>
                Explore new arrivals every week, enjoy seamless shopping, and get doorstep delivery with easy returns. Join a community that values sustainability, individuality, and effortless style.
                <br/>
                Stay trendy. Shop smart. Dress with purpose.
                </p>
                <button type="button" className="shop-now-button">Shop Now</button>
            </div>

            <img 
                src="https://img.freepik.com/free-photo/spring-wardrobe-switch-still-life_23-2150176694.jpg?uid=R132005142&ga=GA1.1.777678278.1745931066&semt=ais_hybrid&w=740"
                alt="dresse to be noticed"
                className="home-desktop-img"
            />

        </div>
    </>
)

export default Home;