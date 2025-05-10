import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getFilteredArea } from "../api";
import { Preloader } from "../components/Preloader";
import { MealList } from "../components/MealList";

function Area() {
    const navigate = useNavigate();
    const [meals, setMeals] = useState([]);
    const [searchParams] = useSearchParams();
    const areaName = searchParams.get('search'); // Получаем значение параметра

    const handleGoBack = () => {
        // Сброс параметра
        navigate(`/`, { replace: true }); // Укажите новый маршрут без параметров
    }

    useEffect(() => {
        getFilteredArea(areaName).then(data => setMeals(data.meals));
        }, [areaName]);

        return <>
        <button className="btn red darken-1" onClick={handleGoBack}>Go back</button>
        {!meals.length ? <Preloader/> : <MealList meals = {meals}/>}
    </>


} export {Area};