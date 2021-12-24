import React, {Component} from "react";
import User from "./user";

export default class App extends Component{
    constructor(props){
        super(props);
        this.state={
            items:[],
            currentItem:{
                text:"",
                key:""
            }
        }
        
        this.handleInput=this.handleInput.bind(this)
        this.AddItem=this.AddItem.bind(this)
        this.deleteItem=this.deleteItem.bind(this)
    }
    handleInput(e){
        this.setState({
            currentItem:{
                text:e.target.value.substr(0,15),
                key:Date.now()
            }
        })
    }
    AddItem(e){
        e.preventDefault();
        const newItem=this.state.currentItem;
        if(newItem.text!==""){
            const newItems=[...this.state.items, newItem]
            this.setState({
                items:newItems,
                currentItem:{
                    text:"",
                    key:""
                }
            })
        }

    }
    deleteItem(key){
        const filterItems=this.state.items.filter(item =>
            item.key!==key);
            this.setState({
                items:filterItems
            })

    }
    render(){
        return(
                <div className="main_div">
                    <h3 align="top">Todo List</h3>
                   <form align="center" onSubmit={this.AddItem}>
                       <input type="text" placeholder="Enter Item Name" value={this.state.currentItem.text} onChange={this.handleInput} />
                       <button type="submit" id="button1">Add</button>

                    </form>
                    <User items={this.state.items} deleteItem={this.deleteItem}></User>
                </div>
                
            
        )
    }
}
