/*
Import the React and ReactDOM libraries
 */

import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from "./components/CommentDetail";
import ApprovalCard from "./components/ApprovalCard";

//Create a react component


//This is the part of the communicating with Props part of the Udemy course
// const App = () => {
//     return (
//         <div className="ui container comments">
//             <ApprovalCard> hi there
//             </ApprovalCard>
//
//             <ApprovalCard>
//                 <CommentDetail author="Sam" timeAgo="Today at 4:45 PM" commentText="Hi there" avatar={faker.image.avatar()}/>
//             </ApprovalCard>
//             <ApprovalCard>
//             <CommentDetail author="Alex" timeAgo="Today at 2:00 AM" avatar={faker.image.avatar()}/>
//             </ApprovalCard>
//             <ApprovalCard>
//             <CommentDetail author="Jane" timeAgo="Yesterday at 5:00 PM" avatar={faker.image.avatar()}/>
//             </ApprovalCard>
//         </div>
//     );
// }

const App = () =>{

    window.navigator.geolocation.getCurrentPosition(
        position => console.log(position),
        err => console.error(err)
    );


    return(
        <div>Hi there!</div>
    );
}

class AppClass extends React.Component<any,any>{
    constructor(props:any) {
        super(props); //Calls the parent's constructor

        this.state = {lat:null, errorMessage: ''};



    }
    //
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({lat:position.coords.latitude}) //Pass in new object to be the new state.
            },
            err => {
                this.setState({errorMessage: err.message})
            }
        );
    }
    // componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
    //     console.log('My component go updated, it re-rendered!');
    // }

    render() {

        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>;
        }


        return <div>Loading</div>;


    }
}



//Take react component, show it on the screen


// ReactDOM.render(<App/>, document.querySelector('#root'));
ReactDOM.render(<AppClass/>, document.querySelector('#root'));