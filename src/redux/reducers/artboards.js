const artboards = (state = {artboardsArray: []}, action) => {
    switch (action.type) {
        case 'ADD_ARTBOARD':
            return Object.assign({}, {
                activeArtboardId: action.id,
                artboardsArray: [
                    ...state.artboardsArray,
                    {
                        name: action.name,
                        id: action.id
                    }
                ]
            });
        default:
            return state
    }
};
export default artboards;
