import localforage from 'localforage'
import { isEmpty } from 'lodash'

export const setToken = ({commit}, payload) => {
    const token = (isEmpty(payload) ? null : payload.token || payload)
    commit('SET_TOKEN', token)
    return Promise.resolve(token)
}

export const logout = ({commit}) => {
    commit('LOGOUT')
    localforage.removeItem('USER_TOKEN')
    // dispatch('checkUserToken')
}

export const login = ({commit}, payload) => {
    commit('LOGIN', payload)
    localforage.setItem('USER_TOKEN', payload)
}

export const setUser = ({commit}, user) => {
    commit('SET_USER', user)
}

export const loadUser = () => {
    dispatch('setUser', { name: 'Administrador' })
}

export const checkUserToken = ({dispatch, state}) => {
    if (!isEmpty(state.token)) {
        return Promise.resolve(state.token)
    }

    return localforage.getItem('USER_TOKEN')
        .then(token => {
            if (isEmpty(token)) {
                return Promise.resolve('NO_TOKEN')
            }
            return dispatch('setToken', token)
        })
        .then(() => dispatch('loadUser'))

}