import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getFilteredCategory } from "../api";
import { Preloader } from "../components/Preloader";
import { MealList } from "../components/MealList";

function Category() {
    const {name} = useParams();
    const navigate = useNavigate();
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        getFilteredCategory(name).then(data => setMeals(data.meals));
    }, [name]);

    return <>
        <button className="btn red darken-1" onClick={() => navigate(-1)}>Go back</button>
        {!meals.length ? <Preloader/> : <MealList meals = {meals}/>}
    </>
}

export {Category}