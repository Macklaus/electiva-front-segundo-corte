import React, {Component} from 'react'
import axios from 'axios';
import './album.css';
import { isNullOrUndefined } from 'util';

class Album  extends Component {

    constructor(){
        super();
        this.state = {
            albums: [],
            users: []
        };
    }

    componentDidMount(){
        this.getUsers();
        this.getAlbums();
    }

    getUsers(){
        axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
            this.setState({users: response.data});
        });
    }

    getAlbums(){
        axios.get('https://jsonplaceholder.typicode.com/albums').then(response => {
            let albums = [];
            let key = 1;
            response.data.forEach(data => {
                let autor = this.state.users.find(user => user.id === data.userId);
                if(!isNullOrUndefined(autor)){
                    albums.push({id: key,title: data.title, autor: autor.name});
                    key++;
                }
            });
            this.setState({albums: albums});
        });
    }



    render(){
        return(<div className="album-container">
            <div className="album-card-container">
                 {
                    this.state.albums.map(album =>
                        <div className="album-card">
                            <h1>{album.title}</h1>
                            <p>Autor: <em>{album.autor}</em></p>
                        </div>
                    )
                }
            </div>
        </div>);
    }
}

export default Album;