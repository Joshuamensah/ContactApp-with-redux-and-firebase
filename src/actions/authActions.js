export const signup = (user) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        console.log(firebase);
        firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((UserCreds) => {
            console.log("User created successfully", UserCreds);
        })
        .catch((err) => console.log("something went wrong", err));
        };
};

export const loginUser = (email, password) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        console.log(firebase);
        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((UserCreds) => {
            console.log("User created successfully", UserCreds);
        })
        .catch((err) => console.log("something went wrong", err));
        };
};
export const logout = () => {
    return(dispatch,getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.logout()
    }
}