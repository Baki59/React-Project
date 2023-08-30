const TOKEN = "6a61b88bf2cb386261163134cc833c52514e5efc";

export class API{

    static loginUser(body){
        return fetch(`http://127.0.0.1:8000/auth/`,{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify( body )
        }).then( resp => resp.json())
    }


    static updateMovie(mov_id,body){
        return fetch(`http://127.0.0.1:8000/api/movies/${mov_id}/`,{
        method: 'PUT',
        headers: {
            'Content-Type':'application/json',
            'Authorization':`Token ${TOKEN}`

        },
        body: JSON.stringify( body )
        }).then( resp => resp.json())
    }

    static createMovie(body){
        return fetch(`http://127.0.0.1:8000/api/movies/`,{
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            'Authorization':`Token ${TOKEN}`

        },
        body: JSON.stringify( body )
        }).then( resp => resp.json())
    }

    static deleteMovie(mov_id){
        return fetch(`http://127.0.0.1:8000/api/movies/${mov_id}/`,{
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json',
                'Authorization':`Token ${TOKEN}`
            }
        })
    }
}