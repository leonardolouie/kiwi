const userReducer = (state = {
    status:false,
    username : "",
    userUUID:""
}, action) => {
    switch(action.type)
    {
        case "SIGN_IN":
            state = {
                ...state,
                status: action.payload.status,
                username: action.payload.username,
                userUUID: action.payload.userUUID
            };
            break;
        case "SIGN_OUT":
            state = {
                ...state,
                status: action.payload.status,
                username: "",
                userUUID: ""
            };
            break;
        default:
            return state;
    }
    return state;
}

export default userReducer;