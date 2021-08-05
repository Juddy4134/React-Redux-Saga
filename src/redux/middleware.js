import { showAllert } from "./actions"
import { CREATE_POST } from "./types"

const forbidenWords = ['fuck','php','spam']

export function forbidenWordsMiddleWare ({dispatch}){
    return function(next){
        return function(action){
            console.log(next)
            console.log(action)
            if (action.type === CREATE_POST){
                const found = forbidenWords.filter(w => action.payload.title.includes(w))
                if (found.length){
                    return dispatch(showAllert('You are spamer'))
                }
            }
            return next(action)
        }
    }

}