export const addArtboard = (id, name) => ({
    type: 'ADD_ARTBOARD',
    id,
    name
});
export const logoutAction = () => ({
    type: 'LOG_OUT'
});
export const signupAction = (name, email) => ({
    type: 'LOG_IN',
    name,
    email
});
