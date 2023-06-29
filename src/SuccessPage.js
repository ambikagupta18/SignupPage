import React from "react";
import { useHistory } from "react-router-dom";

const SuccessPage=()=>{
    const history = useHistory()

    return(
        <div>
           {history?.location?.state?.name} are successfully register.
        </div>
        
    )

}
export default SuccessPage;