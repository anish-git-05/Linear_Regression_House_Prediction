import {useState} from "react";
import "./App.css"
import API_URL from "./api.js"
function Predict(){
  const [output, setOutput] = useState(null);
  const [input, setInput] = useState({
    furnishing: 0,
    location: 0
  });
  const handleChange = async (e) => {
    e.preventDefault();
    if (
  input.bhk === undefined ||
  input.size === undefined ||
  input.bathroom === undefined ||
  input.furnishing === undefined ||
  input.location === undefined
) {
  alert("Please fill all fields");
  return;
}
    let arr=[Number(input.bhk),Number(input.size), Number(input.bathroom), Number(input.furnishing)];
    let arr_loc=[0,0,0,0,0,0];
    arr_loc[Number(input.location)]=1;
    arr=arr.concat(arr_loc);
    console.log(arr);
    const response=await fetch(`${API_URL}/predict`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({features:arr}),
    });
    const data = await response.json();
    setOutput(data.prediction);
  };
  let f_type = {"Unfurnished":0, "Semi-Furnished":1, "Furnished":2};
  let location={"Kolkata":0, "Delhi":1, "Mumbai":2, "Chennai":3, "Bangalore":4, "Hyderabad":5};
  return(
    <div className="UI">
      <h2>House Rent Prediction</h2>
      <div className="input">
        <form onSubmit={handleChange}>
          <input type="number" placeholder="BHK" onChange={(e) => setInput({...input, bhk: e.target.value})} />
          <input type="number" placeholder="Size in acres" onChange={(e) => setInput({...input, size: e.target.value})} />
          <input type="number" placeholder="No of Bathrooms" onChange={(e) => setInput({...input, bathroom: e.target.value})} />
          <select onChange={(e) => setInput({...input, furnishing: e.target.value})}>
            <option value={f_type["Unfurnished"]}>Unfurnished</option>
            <option value={f_type["Semi-Furnished"]}>Semi-Furnished</option>
            <option value={f_type["Furnished"]}>Furnished</option>
          </select>
          <select onChange={(e) => setInput({...input, location: e.target.value})}>
            <option value={location["Kolkata"]}>Kolkata</option>
            <option value={location["Delhi"]}>Delhi</option>
            <option value={location["Mumbai"]}>Mumbai</option>
            <option value={location["Chennai"]}>Chennai</option>
            <option value={location["Bangalore"]}>Bangalore</option>
            <option value={location["Hyderabad"]}>Hyderabad</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="output">
        {output!=null &&(<h2>Predicted Rent: Rs {output}</h2>)}
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Predict/>    
    </div>
  );
}

export default App;
// BHK,SIZE,BATHROOM,FURNISHING VALUE
//Kolkata,Delhi,Mumbai,Chennai,Bangalore,Hyderabad