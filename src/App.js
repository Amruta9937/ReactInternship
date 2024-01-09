// App.js

import React, { useState , useEffect} from 'react';
import './App.css'; // Import your CSS file for styling

let hashmap = {
  "A-H" : 12 ,
  "A-U" : 15 ,
  "A-B" : 21 , 
  "A-P" : 25 , 
  "E-H" : 3 ,
  "E-U" : 5 , 
  "E-B" : 7 , 
  "E-P" : 13 , 
  "C-H" : 18,
  "C-U" : 23 , 
  "C-B" : 32 , 
  "C-P" : 38
}
let type = true;
const App = () => {
  const [cat,setcat] = useState("A");
  const [subcat,setSub] = useState("H");
  const [value , setValue] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [amt,setamt] = useState(quantity)
  return (  
    <div class="Parent">
      <div className="categories">
        {["Academic Writing","Editing and ProofReading","Calculations"].map(element => {
          return (
            <div className='catele' onClick={()=>{setcat(element[0])}}>
              <span>{element}</span>
            </div> 
          )
        })}   
      </div>


      <div className="categoriesSub">
        {["Highschool","Undergraduate","Bachelor","Professional"].map(element => {
          return (
            <div className='catsub' onClick={()=>{setSub(element[0]);}}>
              {element}
            </div> 
          )
        })}   
      </div>

      <div className="dropdown">
      <span className='dropdownname'>Type Of Paper</span>
      <select name="cars" id="cars" >
      <option value="" disabled selected>Select your option</option>

        <option value="Research Paper">Research Paper</option>
        <option value="Research Proposal">Research Proposal</option>
        <option value="Speech">Speech</option>
        <option value="Thesis">Thesis</option>
        <option value="Thesis Proposal">Thesis Proposal</option>
      </select>
      </div>

      <div class="Changer">
      <div className="quantity">
        <span class="innerquantity">Quantity</span>
        <input placeholder='1' type="number" name="" id="quantity" onChange={(e)=>{
        setQuantity(e.target.value);
        if(type){
          setamt(e.target.value)
        }else{
          setamt(e.target.value * 275)
        }
      }} />
        </div>
      <div className="deadline">
        <div class="innerdeadline">Deadline</div>

        <input value="2017-06-01" type="date" name="" id="datePicker" />
      </div>

      </div>

      <div className='buttons' onClick={
        ()=>{
          if(type){
            type = !type ;
            setamt(amt*275)
          }else{
            type = !type;
            setamt(amt/275)
          }
        }
      }>
        <div className='pages'>
          Pages
        </div>
        <div className="words">
          Words
        </div>
      </div>

      <div className="bottommost">
      <div className="result">
        <div className='Appr'>
          Approx 
          Price
        </div>
        <div className='Price'>{(quantity) * hashmap[cat + "-" + subcat]}</div>
      </div>
      <div className="cart">Proceed To Order</div>
      </div>
    </div>
    )
};

export default App;
