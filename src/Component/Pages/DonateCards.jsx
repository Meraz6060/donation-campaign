import { Link } from "react-router-dom";
import  "./style.css";

const DonateCards = ({card}) => {
    const {id, image_url, category, title, price } = card || {};

    console.log(card);

    return (
        <Link to={`/DataCard/${id}`}>
            <div className="card w-70 shadow-xl" id={category}> 
                    <figure><img src={image_url} alt="000000000"/></figure>
                    <div className="py-5 pl-4">
                        <button className="btn1">{category}</button>
                        <h2>{title}</h2>
                        <p>${price}</p>

                </div>
            </div>
        </Link>
    );
};

export default DonateCards;