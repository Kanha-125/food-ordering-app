import { useEffect,useState } from 'react';
import { MENU_API } from '../utils/constants';

const useRestaurantMenu = (resId) => {
    const [restInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchMenu();
      },[]) 

    const fetchMenu = async()=>{
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
        setResInfo(json.data);
    };

    return restInfo;
  
}

export default useRestaurantMenu;