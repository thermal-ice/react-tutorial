/*
Import the React and ReactDOM libraries
 */

import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
// import axios from 'axios';
import Unsplash from "./api/Unsplash";


import CommentDetail from "./components/CommentDetail";
import ApprovalCard from "./components/ApprovalCard";
import SeasonDisplay from "./components/SeasonDisplay";
import Spinner from "./components/Spinner"
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
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

/*
This App and the AppClass are a part of the State components and lifecycle methods part of the course
 */

// const App = () =>{
//
//     window.navigator.geolocation.getCurrentPosition(
//         position => console.log(position),
//         err => console.error(err)
//     );
//
//
//     return(
//         <div>Hi there!</div>
//     );
// }

// class AppClass extends React.Component<any,any>{
//     // constructor(props:any) {
//     //     super(props); //Calls the parent's constructor
//     //
//     //     this.state = {lat:null, errorMessage: ''};
//     //
//     //
//     //
//     // }
//     //
//     state= {lat:null, errorMessage:''}; //Alternate state initialization
//
//     componentDidMount() {
//         window.navigator.geolocation.getCurrentPosition(
//             position => {
//                 this.setState({lat:position.coords.latitude}) //Pass in new object to be the new state.
//             },
//             err => {
//                 this.setState({errorMessage: err.message})
//             }
//         );
//     }
//     // componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
//     //     console.log('My component go updated, it re-rendered!');
//     // }
//
//     renderContent(){
//         if (this.state.errorMessage && !this.state.lat) {
//             return <div>Error: {this.state.errorMessage}</div>;
//         }
//         if (!this.state.errorMessage && this.state.lat) {
//             // return <div>Latitude: {this.state.lat}</div>;
//             return <SeasonDisplay lat={this.state.lat}/>
//         }
//
//
//         return <Spinner displayText="Waiting for the location request"/>;
//     }
//
//     render() {
//         return(
//             <div>
//                 {this.renderContent()}
//             </div>
//         );
//
//     }
// }


class UserContentApp extends React.Component<any, any>{

    state = {images:[] };

    constructor(props:any) {
        super(props);
        this.onSearchSubmit = this.onSearchSubmit.bind(this); //Binding to ensure child components reference the correct `this`
    }

    async onSearchSubmit(term:string){
        // console.log(term);

        // const response: any = await axios.get('https://api.unsplash.com/search/photos',{
        //     params:{
        //        query: term
        //     },
        //     headers:{
        //         Authorization: "Client-ID xIuqxLOeTp6BteLA8flWgOb0-xH0k0RMluCZ2TlYT8A"
        //     }
        // });

        const response: any = await Unsplash.get('/search/photos',{
            params:{
                query: term
            }
        });

        // console.log(response.data.results);
        this.setState({images:response.data.results});
    }

    render() {
        return(
            <div className="ui container" style={{marginTop:"15px"}}>
                <SearchBar onClickSubmit = {this.onSearchSubmit}/>
                Found: {this.state.images.length} images!
                <ImageList images={this.state.images}/>
            </div>

        );

    }
}


//Take react component, show it on the screen


// ReactDOM.render(<App/>, document.querySelector('#root'));
// ReactDOM.render(<AppClass/>, document.querySelector('#root'));
ReactDOM.render(<UserContentApp/>, document.querySelector('#root'));