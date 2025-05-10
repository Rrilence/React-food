import { Link } from "react-router-dom";

function Meal(props) {
    const {strMeal, strMealThumb, idMeal} = props;

    return <div className="card">
    <div className="card-image red lighten-5" style={{padding: '15px'}}>
      <img src={strMealThumb} alt={strMeal}/>
    </div>
    <div className="card-content red lighten-5">
      <span className={"card-title"}>{strMeal}</span>
    </div>
    <div className="card-action red darken-1">
        <Link to={`/meal/${idMeal}`} className="btn red darken-4"> Watch recipe</Link>
    </div>

</div>

}

export {Meal}