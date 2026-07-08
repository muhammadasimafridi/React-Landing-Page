import "./CourseCard.css"
import Img1 from "./assets/img-1.jpeg"
import Img2 from "./assets/img-2.jpeg"
import Img3 from "./assets/img-3.jpeg"
import Img4 from "./assets/img-4.jpeg"
import Img5 from "./assets/img-5.jpeg"
import Img6 from "./assets/img-6.jpeg"
import Img7 from "./assets/img-7.jpeg"
import Img8 from "./assets/img-8.jpeg"

function CourseCard() {
    return <>
        <div id="courseCard"></div>
        <h2 className="courseCard-title">Products</h2>
        <div className="container">
            <div className="card">
                <img src={Img1} alt="" />
                <p>$30</p>
                <p>Brown Built</p>
            </div>
            <div className="card">
                <img src={Img2} alt="" />
                <p>$80</p>
                <p>Shoes</p>
            </div>
            <div className="card">
                <img src={Img3} alt="" />
                <p>$650</p>
                <p>Coat</p>
            </div>
            <div className="card">
                <img src={Img4} alt="" />
                <p>$350</p>
                <p>Paint & Shirt</p>
            </div>
            <div className="card">
                <img src={Img5} alt="" />
                <p>$400</p>
                <p>Watch</p>
            </div>
            <div className="card">
                <img src={Img6} alt="" />
                <p>$450</p>
                <p>Paint & Shirt</p>
            </div>
            <div className="card">
                <img src={Img7} alt="" />
                <p>$250</p>
                <p>Shoes</p>
            </div>
            <div className="card">
                <img src={Img8} alt="" />
                <p>$700</p>
                <p>Coat</p>
            </div>
        </div>
    </>
}

export default CourseCard;