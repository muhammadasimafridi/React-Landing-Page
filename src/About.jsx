import "./About.css"
import aboutImage from "./assets/about-img.jpeg"

function About() {
    return <>
        <div id="about"></div>
        <section className="about-sec">
            <div className="img-dev"><img src={aboutImage} alt="Watch Image" className="about-img" /></div>
            <div className="about-details">
                <h2>About Me</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum vel recusandae tempora esse dolorum eligendi veniam asperiores error corrupti? Quae, asperiores. Vitae eos, doloremque maxime tempora ullam, modi optio enim, quidem quae perferendis ipsum vel incidunt aut dolores beatae! Quas porro id quasi consectetur dolorum obcaecati, ducimus perferendis molestiae aliquid dolores magnam culpa reprehenderit? Iste dolores vel eius asperiores necessitatibus aperiam labore, qui, quae vitae perspiciatis, culpa quas quo! Tenetur alias voluptas laborum mollitia in autem, excepturi eveniet amet neque molestias, commodi eos recusandae, animi nulla deserunt optio. Consequuntur animi nemo placeat earum quod suscipit rem rerum totam ipsum architecto?</p>
            </div>
        </section>
    </>
}

export default About;