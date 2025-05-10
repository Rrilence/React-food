import { Link} from "react-router-dom";

function CategoryItem(props) {
    const { strCategory, strCategoryThumb, strCategoryDescription} = props;
    
    return  <div className="card">
        <div className="card-image red lighten-5" >
          <img src={strCategoryThumb} alt={strCategory}/>
        </div>
        <div className="card-content red lighten-5">
          <span className={"card-title"}>{strCategory}</span>
          <p>{strCategoryDescription.slice(0, 90)}...</p>
        </div>
        <div className="card-action  red darken-1">
            <Link to={`/category/${strCategory}`} className="btn red darken-4"> Watch category</Link>
        </div>

    </div>

}

export {CategoryItem}
