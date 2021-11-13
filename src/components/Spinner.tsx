import React from 'react';

interface loadingReasonText{
    displayText:string;
}


const Spinner = (props:loadingReasonText)=>{
    return(
        <div className="ui active dimmer">
            <div className="ui big text loader">{props.displayText} </div>
        </div>
    );
}

Spinner.defaultProps={
    displayText: "Loading..."
} //Is now deprecated, can use default param values instaed.

export default Spinner;