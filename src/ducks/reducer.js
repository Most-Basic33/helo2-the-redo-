


const initialState = {
    user: {}
}
const GET_USER = 'GET_USER';
const CLEAR_USER = 'CLEAR_USER';
const HOME = 'HOME';
 

export function goHome(userData){
    return{
        type: HOME,
        payload: userData.history.pathname('/')
    }
}
export function getUser(userData){
  // console.log(userData, "reducer")
    return {
        type: GET_USER,
        payload: userData
    }
}
export function clearUser(){
    return {
        type: CLEAR_USER,
        payload: {}
    }
}


export default function reducer(state = initialState, action){
    const {type, payload} = action;
    switch (type) {
        case GET_USER:     
            return{...state, user: payload};
            case CLEAR_USER:
                return{...state, user: payload};
                case HOME:
                return {...state, user: payload};
        default:
           return state;
    }
}