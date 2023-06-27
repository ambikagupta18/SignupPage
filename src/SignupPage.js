import React,{useState} from "react";
import { useHistory } from "react-router-dom"
// import SuccessPage from "./SuccessPage";

const SignupPage =()=>{
    const history = useHistory()
//   const [message, setMessage]= useState("submit")
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [mobilenumber, setMobilenumber] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [countryCityData, setCountryCityData] = useState("");
//   const [countryObj, setCountryObj] = useState({});

const handleInputChange = (e) => {
    const {id , value} = e.target;
    if(id === "name"){
        setName(value);
    }
    if(id === "email"){
        setEmail(value);
    }
    if(id === "mobilenumber"){
        setMobilenumber(value);
    }

}



const handleClick=()=>{
    // alert("7")
    if((name && email && mobilenumber) == ""){
        // alert("6")
        console.log(name,email,mobilenumber,"098765")   
        return null
        
    }
    else 
    {
        // alert("0")
        console.log(name,email,mobilenumber,"9876543")
        history.push("/succespage") 
        
   
    }

}


return(
    <>
    <div>
        Register form
    </div>
    <div>
    <input id= "name" type="text" placeholder="Name" onChange={(e) => handleInputChange(e)}/>
    <input id="email" type="email" placeholder="Email" onChange={(e) => handleInputChange(e)}/>
    <input id="mobilenumber" type="number" placeholder="Mobile Number" onChange={(e) => handleInputChange(e)}/>       
    </div>
    <button type="button" style={{ cursor: "pointer"}}onClick={()=>handleClick()}>Submit</button>
    </>
)

}
export default SignupPage;
