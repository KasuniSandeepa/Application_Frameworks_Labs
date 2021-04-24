import React , {Component} from 'react';
import Posts from "./components/Posts";

const posts = [
    {
        id: 1,
        name: 'React',
        description: 'Best UI library'
    },{
        id:2,
        name:'Node',
        description: 'Server side JS'
    }
];

//This is a  React class level component
export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    /*render() {
        return <h1>Hello to React World</h1>;
    }
*/


    render(){
        return <div>
           <Posts posts={posts}/>
        </div>
    };
}

