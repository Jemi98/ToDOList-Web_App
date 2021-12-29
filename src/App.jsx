import React, { useState } from 'react';
import './index.css';
import ToDoList from './ToDoList';

const App = () => {

    const [inputlist,setInputlist] = useState("");
    const [item,setItem] = useState([]);
    
    const inputItem = (event) =>{
        setInputlist(event.target.value);
    }
    const listitem = () =>{
        setItem((oldsitem)=>{
            return  [...oldsitem, inputlist];
        });
       setInputlist(" ");

    }
    const delitem = (id) =>{
        setItem((oldsitem)=>{
            return oldsitem.filter((arrElem,index)=>{
                return index !== id;
            })
        })
        
    }
    return(
    <>
      <div className="main_div">
          <div className="center_div">
              <h1>ToDo List </h1>
              <br/>
              <input  type="text" placeholder="Add a item" onChange={inputItem} value={inputlist}></input>
              
              <button onClick={listitem}>+</button>
              <ol>
                  {item.map((itemval,index)=>{
                      return <ToDoList 
                      key={index}
                      id={index}
                      text={itemval}
                      onSelect={delitem}
                      />
                  })}
              </ol>
              
          </div>
         
      </div>  
      <div><p className='footer'>Made with 🖤 | M.Jahangir</p></div>
    </>
    );
}

export default App;