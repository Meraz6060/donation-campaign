import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getstoreCard } from "./savecard";
import  "./style.css";

const Donation = () => {
    const cards = useLoaderData();

    const [appliedCard, setappliedCard] = useState([]);
    const [cardlength, setcardlength] = useState(4);

    useEffect(() => {
        const storeCardId = getstoreCard();
        if (cards.length > 0) {

            // const cardApplied = cards.filter(card => storeCardId.includes(card.id));


            const cardApplied = [];
            for (const id of storeCardId) {
                const card = cards.find(card => card.id === id);
                if (card) {
                    cardApplied.push(card);
                }
            }
            setappliedCard(cardApplied);
        }
    }, [])
    return (
        <div>
            <ul className="grid gap-4 grid-cols-1  md:grid-cols-2 lg:grid-cols-2 my-5 mx-10">
                {
                    appliedCard.slice(0, cardlength).map(card =>
                        <div key={card.id} id={card.category} className="flex flex-gap-4 rounded-md w-[500px] h-[200px]">
                            <img className="w-[250px]" src={card.image_url} alt="" />
                            <div className="mx-2 my-3 ">
                                <button className="btn1 py-3">{card.category}</button>
                                <h1 className="font-bold py-3">{card.title}</h1>
                                <h2>${card.price}</h2>
                                <div className="py-5">
                                    <button className="btn2">View Details</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </ul>
            <div className="card-body items-center text-center">
                <div className={cardlength === appliedCard.length && 'hidden'}>
                         <button onClick={()=> setcardlength(appliedCard.length)} className="btn btn-primary">Show All</button>

                </div>
            </div>
        </div>
    );
};

export default Donation;