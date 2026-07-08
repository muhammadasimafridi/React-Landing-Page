import "./Hero.css"
import heroImage from "./assets/hero-img.jpeg";

function Hero() {
    return <>
        <div id="hero"></div>
        <section className="hero-sec">
            <div className="hero-details">
                <h1>React Landing Page</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, deleniti ipsa. Eveniet eligendi, ut accusantium et dignissimos mollitia ipsam minima. Iure veritatis omnis nostrum praesentium voluptates illum. Aut maiores ratione dolorem, ducimus, consequatur laborum sint labore, hic laudantium alias numquam? Eos quod, voluptatibus tempora officiis sed nostrum repellendus voluptas obcaecati.</p>
            </div>
            <div className="img-div"><img src={heroImage} alt="Hero Image" /></div>
        </section>
    </>
}

export default Hero;