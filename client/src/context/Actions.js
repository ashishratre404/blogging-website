export const LoginStart = (userCredentials) => ({
    type: "LOGIN_START"
})

export const LoginSuccess = (user) => ({
    tyep:"LOGIN_SUCCESS",
    payload: user
})

export const LoginFailure = () => ({
    type:"LOGIN_FAILURE"
})