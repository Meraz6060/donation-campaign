const getstoreCard = () =>{
    const storeCardApp = localStorage.getItem('save-Card');
    if(storeCardApp){
        return JSON.parse(storeCardApp);
    }
    return [];
}


const saveCard = id=>{
    const storeCardApp = getstoreCard();
    const exists = storeCardApp.find(cardID => cardID === id)
    if(!exists){
        storeCardApp.push(id);
        localStorage.setItem('save-Card', JSON.stringify(storeCardApp))
    }
}
export{getstoreCard, saveCard}