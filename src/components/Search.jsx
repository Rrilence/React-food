import { useState } from "react";

function Search({cb = Function.prototype, cbArea = Function.prototype}) {
    const [value, setValue] = useState('');
    const [valueArea, setValueArea] = useState('');

    const handleKey = (e) => {
        if(e.key === 'Enter') {
            handleSubmit();
        }
    }

    const handleSubmit = () => {
        cb(value);
    }
    const handleKeyArea = (e) => {
        if(e.key === 'Enter') {
            handleSubmitArea();
        }
    }

    const handleSubmitArea = () => {
        cbArea(valueArea);
    }

    return <div className="row">
        <div className="input-fiels col s12" style={{position: 'relative'}}>
            <input type="search" 
            id="search-field"
            placeholder="Search category"
            onKeyDown={handleKey}
            onChange={(e) => setValue(e.target.value)}
            value={value}/>
            <button className="btn red darken-1" style={ {
                  position: 'absolute',
                  top: 0,
                  right: 0,  
                }} 
            onClick={handleSubmit}>Search</button>
        </div>
        <i class="material-icons restaurant">restaurant</i>
        <div className="input-fiels col s12" style={{position: 'relative'}}>
            <input type="search" 
            id="search-field"
            placeholder="Area"
            onKeyDown={handleKeyArea}
            onChange={(e) => setValueArea(e.target.value)}
            value={valueArea}/>
            <button className="btn red darken-1" style={ {
                  position: 'absolute',
                  top: 0,
                  right: 0,  
                }} 
            onClick={handleSubmitArea}>Search</button>
        </div>
    </div>

}

export {Search}