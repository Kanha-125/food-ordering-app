import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data,showItems, setShowIndex}) => {
    const [showSingleItem, setShowSingleItem] = useState(false);
  const handleClick = ()=>{
    setShowIndex();
    setShowSingleItem(!showSingleItem);
  }  
  return (
    <div>
        <div className=" w-6/12 mx-auto my-4 bg-gray-100 rounded-lg shadow-xl p-4 " >
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
            <span>🔽</span>   
        </div>
        {showSingleItem && showItems && <ItemList items={data.itemCards} />} 
        </div>
        
    </div>
  )
}
export default RestaurantCategory;