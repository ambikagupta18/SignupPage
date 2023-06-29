import React,{useState} from "react";
import { useHistory } from "react-router-dom"

const SignupPage = () => {
  const history = useHistory()
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [mobilenumber, setMobilenumber] = useState("");

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
    if((name && email && mobilenumber) == ""){  
        alert("Please fill all the details")       
    }
    else 
    {
        let data = { name, email, mobilenumber };
      
        history.push({pathname: "/otppage",
            state: data
            // {data:data  }
        })   
    }

}


return(
<>

  <div class="container">
    <h1>Register</h1>
    <p>Please fill in this form to create an account.</p>


    <label for="name"><b>Name</b></label>
     <div> <input id= "name" type="text" placeholder="Name" onChange={(e) => handleInputChange(e)} required/> </div>

     <label for="email"><b>Email</b></label>
     <div> <input id="email" type="email" placeholder="Email" onChange={(e) => handleInputChange(e)} required/> </div>

     <label for="mobilenumber"><b>Mobile Number</b></label>
     <div> <input id="mobilenumber" type="mobilenumber" placeholder="Mobile Number" onChange={(e) => handleInputChange(e)} required/>  </div>

    <div> <button type="button" style={{ cursor: "pointer"}}onClick={()=>handleClick()}>Register Now</button> </div>

  </div>
</>






















    // <>
    // <form>
    // <div>
    // <h1>Register Form</h1>
    // <hr></hr>
    // </div>
    // <div>
    // <label for="name"><b>Name</b></label>
    // <div> <input id= "name" type="text" placeholder="Name" onChange={(e) => handleInputChange(e)} required/> </div>
    // <label for="email"><b>Email</b></label>
    // <div> <input id="email" type="email" placeholder="Email" onChange={(e) => handleInputChange(e)} required/> </div>
    // <label for="mobilenumber"><b>Mobile Number</b></label>
    // <div> <input id="mobilenumber" type="mobilenumber" placeholder="Mobile Number" onChange={(e) => handleInputChange(e)} required/>  </div>

    // <button type="button" style={{ cursor: "pointer"}}onClick={()=>handleClick()}>Submit</button>
    // </div>
    // </form>
    // </>
)

}
export default SignupPage;
