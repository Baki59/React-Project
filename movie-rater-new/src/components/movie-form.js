import React, {useState,useEffect} from "react";
import { API } from "../api-service";


function MovieFrom(props){

    const[ title, setTitle ] = useState('');
    const[ description, setDescription ] = useState('');

    useEffect( () => {
        setTitle(props.movie.title);
        setDescription(props.movie.description);
    }, [props.movie])


    const updateClicked = () => {
        //console.log('update here');
        API.updateMovie(props.movie.id,{title,description})
        .then(resp => props.updatedMovie(resp))
        .catch(error => console.log(error))
    }

    const createClicked = () => {
        //console.log('update here');
        API.createMovie({title,description})
        .then(resp => props.movieCreated(resp))
        .catch(error => console.log(error))
    }


    return(
        <React.Fragment>
            {props.movie ? (
                //<h1>{props.movie && props.movie.title} edit</h1>
                <div>
                    <label htmlFor="title">Title</label><br/>
                    <input id="title" type="text" placeholder="title" value={title} onChange={evt => setTitle(evt.target.value)}/><br/>
                    <label htmlFor="description">Description</label><br/>
                    <textarea id="description" type="text" placeholder="Description" value={description} onChange={evt => setDescription(evt.target.value)}></textarea><br/>

                    { props.movie.id ?
                        <button onClick={updateClicked}>Update</button> :
                        <button onClick={createClicked}>Create</button>

                    }

                    
                </div>

            ) : null }
        </React.Fragment>
        
    )
} 

export default MovieFrom