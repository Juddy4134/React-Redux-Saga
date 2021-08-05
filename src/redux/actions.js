import { CREATE_POST, FETCH_POSTS, HIDE_ALLERT, HIDE_LOADER, REQUEST_POST, SHOW_ALLERT, SHOW_LOADER } from "./types";

export function createPost(post){
    return{
        type: CREATE_POST,
        payload: post
    }
}

export function fetchPosts(){
    return {
       type: REQUEST_POST
    }
    // return async dispatch =>{
    //     try {
    //         dispatch(showLoader())
    //         const response  = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    //         const json = await response.json()
    //         dispatch({type:FETCH_POSTS,payload:json})
    //         dispatch(hideLoader())
    //     } catch (error) {
    //         dispatch(showAllert("Shomething went wrong"))
    //         dispatch(hideLoader())
    //     }
    // }
}

export function showLoader(){
    return {
        type: SHOW_LOADER
    }
}


export function hideLoader(){
    return {
        type: HIDE_LOADER
    }
}

export function showAllert(text){
    return dispatch => {
        dispatch({
            type: SHOW_ALLERT,
            payload: text
        })
        setTimeout(()=>{
            dispatch(hideAllert())
        },2000)
    }
}


export function hideAllert(){
    return {
        type: HIDE_ALLERT
    }
}