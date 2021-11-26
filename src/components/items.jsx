import { React, useState } from "react";
import '../App.css';
import Heading from './heading';
function GroceryItems()
{
    const [items, setItems] = useState([]);
    const[id,setId] = useState(1);
    const [inputValue, setInputValue]= useState('');
    const handleAddButtonClick = () => {
        var index = items.findIndex(x => x.itemName ===inputValue.trim());
        var newItems = items;
        if(inputValue=="")
        {
            newItems = [...items];
        }
        else if(index>-1)
        {
            items[index].quantity = items[index].quantity + 1;
            newItems = [...items];
        }
        else
        {
		    const newItem = {
			    itemName: inputValue,
			    quantity: 1,
                itemId:id
		    };
            newItems = [...items, newItem];
            setId(id+1);
        }
        setItems(newItems);
        setInputValue('');
        document.getElementById("addItem").value = "";
	};
    const handleDeleteButtonClick = (props) => {
      const newItemsList = items.filter((item) => item.itemName !== props.itemName)
      setItems(newItemsList);
    }
    const handleClearItemClick = () =>
    {
        setItems([]);
    }
    const handleTableRowClick = (item)=>
    {
        var row = document.getElementById("tr"+item.itemId);
        if(row.style.background!="red")
        {
            row.style.background = "red";
        }
        else
        {
            row.style.background = "white";
        }
    }
    return (
                    <div id = "app">
                        <Heading className ="heading" heading = {"My Grocery List"}/>
                        <div id = "inputItem">
                        <input id = "addItem" placeholder = "Add new item" onChange = {()=>{setInputValue(document.getElementById("addItem").value)}}></input>
                         <button id = "newItem" onClick={() => handleAddButtonClick()} >Add</button>
                         <button id = "clearItem" onClick = {()=> {handleClearItemClick()}}>Clear List</button>
                         </div>
                         <table id ="table">
                           <tr id = "tableHeader">
                               <th>Name</th>
                               <th>Quantity</th>
                               <th>Delete</th>
                           </tr>
                           {items.map((item) => 
                           <tr id = {"tr"+item.itemId} className = "item-row" onClick = {()=>{handleTableRowClick(item)}}>
                               <td>{item.itemName}</td>
                               <td>{item.quantity}</td>
                               <td><button id = "editButton" onClick = {()=> handleDeleteButtonClick(item)} > <img src="https://cdn.icon-icons.com/icons2/2098/PNG/512/trash_icon_128726.png" style = {{'height' : 25}}/></button></td>
                           </tr>)}
                         </table>
                        
                    </div>  
                )
}
export default GroceryItems;