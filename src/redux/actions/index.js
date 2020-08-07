export const deleteElm = (id = 0) => {
    return {
        type: 'DELETE',
        id
    }
}