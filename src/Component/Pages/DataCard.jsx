import DonateCards from "./DonateCards";

const DataCard = ({cardsData}) => {

    return (
        <div className="grid gap-4 grid-cols-1  md:grid-cols-2 lg:grid-cols-4 my-10">
            {
                cardsData.map(card =><DonateCards key={card.id} card ={card}></DonateCards>)
            }
        </div>
    );
};

export default DataCard;