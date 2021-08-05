import React from "react"
import { connect } from "react-redux"
import { createPost,showAllert } from "../redux/actions"
import { Allert } from "./Allert"

class PostForm extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            title: ""
        }
    }

    submitHandler = event => {
        event.preventDefault()
        const {title} = this.state

        if(!title.trim()){
            return this.props.showAllert('Title of post should be not empty')
        }

        const newPost = {
            title,
            id: Date.now().toString()
        }
        
        this.props.createPost(newPost)
        this.setState(prev => ({...prev,title:""}))
    }

    changeInputHandler = event => {
        this.setState( prev => ({...prev,[event.target.name]: event.target.value}))
    }
    
    render(){
        return (
            <form onSubmit={this.submitHandler}>

                {this.props.allert && <Allert text={this.props.allert}/>}
                
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="title"
                        value={this.state.title}
                        name="title"
                        onChange={this.changeInputHandler}
                    />
                </div>
                <button type="submit" className="btn btn-success">Create</button>
            </form>
        )
    }
}

const mapDispatchToProps = {
    createPost,showAllert
}

const mapStateToProps = state => ({
    allert: state.app.allert
}
)

export default connect(mapStateToProps,mapDispatchToProps)(PostForm)