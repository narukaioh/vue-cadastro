export default {
    'LOGOUT' (state) {
        state.token = ''
    },
    'LOGIN' (state, payload) {
        state.token = payload
    },
    'SET_TOKEN' (state, token) {
        state.token = token
    },
    'SET_USER' (state, user) {
        state.user = user
    }
}