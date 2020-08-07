const myReduser = (state = ["a", 'b', 'c', 'd'], {type, id}) => {
    switch(type) {
        case 'DELETE':
            return state.filter(elm => elm !== id);
        case 'ADD':
            return [...state, id];
        default:
            return state;
    }
}

export default myReduser;