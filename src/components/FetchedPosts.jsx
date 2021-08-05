import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts } from "../redux/actions"
import { Loader } from "./Loader"
import Post from "./Post"

export default function FetchedPosts () {
    const dispatch = useDispatch()
    const posts = useSelector(state=> state.postsReducer.fetchedPosts)
    const loading = useSelector(state => state.app.loading)
    
    if (loading){
        return <Loader/>
    }
    if (!posts.length){
        return <button 
        className="btn-primary btn"
        onClick={()=> dispatch(fetchPosts())}
        >Download</button>
    }

    return posts.map(post => <Post post={post} key={post.id}/>)

}