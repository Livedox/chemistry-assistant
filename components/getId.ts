function createGetId() {
    let id = 0;
    return function() {
        return id++ + (new Date()).getTime().toString();
    }
}

function createNumberGetId() {
    let id = 0;
    return function() {
        return id++;
    }
}


const getId = createGetId();
export const getNumberId = createNumberGetId();

export default getId;
