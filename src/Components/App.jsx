import React,{useState} from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import CreateArea from "./CreateArea";
import { useDebugValue } from "react/cjs/react.production.min";

function App() {

    const [items,setItems]= useState([]); 

    function addItem(passed_object){
        setItems([...items,passed_object]);
        
    }

    function deleteItem(passed_id){
        setItems(
            items.filter(function (item, index) {
              return index !== passed_id;
            })
          );
    }

    var a=0;
    function display(val){
        a++;
        if(val.title.length > 0 && val.info.length >0){
            return(    
                <Note key={a} id={a-1} title_name = {val.title} content_info = {val.info} deleteFunction={deleteItem}/>
            )
        }
            
    }
    return (
        <div>
            <Header />
            <CreateArea addFunction={addItem}/>
            {items.map(display)}
            <Footer />
        </div>
    );
}

export default App;



