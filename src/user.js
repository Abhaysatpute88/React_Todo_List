import React from 'react';
import "./index.css";

function user(props){
    const items=props.items
    const listItems=items.map(item =>
        {
            return <div key={item.key}>
                <p>{item.text}</p>
                <button id="button2" onClick={()=> props.deleteItem(item.key)}>X</button>
            </div>
        })
    return(
        <div id='show'>{listItems}</div>

    )
}
export default user;

