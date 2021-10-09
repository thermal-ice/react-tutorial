import React from 'react';


//This is used for the Communicating with props part of the Udemy course

type ApprovalCardProps = {
    children: React.ReactChild;
}


const ApprovalCard = (props: ApprovalCardProps) =>{
    return (
        <div className="ui card">

            <div className="content"> {props.children}</div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button"> Approve </div>
                    <div className="ui basic red button"> Reject</div>
                </div>
            </div>
        </div>
    );

};

export default ApprovalCard;