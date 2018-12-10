const {name, email} = JSON.parse(localStorage.getItem('userData')) || {};

const auth = (state = {
    name,
    email
}, action) => {
    switch (action.type) {
        case 'LOG_IN':
            localStorage.setItem("userData", JSON.stringify({
                name: action.name,
                email: action.email
            }));
            return {
                name: action.name,
                email: action.email,
            };
        case 'LOG_OUT':
            localStorage.clear();
            return {};
        default:
            return state;
    }
}

export default auth;
