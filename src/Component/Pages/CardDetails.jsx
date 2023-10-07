import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { saveCard } from "./savecard";
import  "./style2.css";

const CardDetails = () => {
    const cardsall = useLoaderData();
    const { id } = useParams()
    const intId= parseInt(id)
    const cards = cardsall.find(cards => cards.id === intId);

    
    const handleClick =() => {
        saveCard(intId);
        Swal.fire('Donation Successfully Added');
    }
    return (
        <div>
            <div className= "w-auto">
                <figure className="imgbckg">
                    <img className="w-[100%]" src={cards.image_url} alt="" />

                            <div>
                            <div className=" absolute top-[787px] justify-start bg-[rgba(0,0,0,0.5)] w-[1350px]  h-28 p-8">
                                <button onClick={handleClick} className="bg-[#FF444A]  lg:w-32 text-white font-bold  p-4 w-24 rounded absolute ">{cards.price}</button>
                            </div>
                        </div>
                    {/* <div className="price" id={cards.category}>                        
                        <button className="btn2" onClick={}>${}</button>
                    </div> */}
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{cards.title}</h2>
                    <p>{cards.description}</p>
                </div>
            </div>
        </div>
    );
}


export default CardDetails;