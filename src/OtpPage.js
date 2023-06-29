import React from "react";
import { useHistory } from "react-router-dom";

const OtpPage = ()=> {
    const history= useHistory()


    const handleSubmit = () =>{
        // if(history.location.state){
        //     console.log(history.location.state,"09876543321")
        //     // history.push("/succespage")
        //     history.push({pathname: "/succespage",
        //     state:(history.location.state)
        // })
        // }
        // else
        //     return
        history.push({pathname: "/succespage",
            state:(history?.location?.state)
    })
    }

    return(
        <div>
            {history?.location?.state?.name}! Enter your 6 digit otp
            <div>
                        <input
                        type="text"
                        pattern="\d*"
                        maxlength="6"
                        placeholder="Enter OTP"                      
                      />
                </div>
            <button type="button" style={{ cursor: "pointer"}}onClick={()=>handleSubmit()}>Proceed to Submit</button>
        </div>
    )
}
export default OtpPage;