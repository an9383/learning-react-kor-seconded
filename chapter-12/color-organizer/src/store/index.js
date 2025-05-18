import { createStore, combineReducers, applyMiddleware } from 'redux'
import { colors } from './reducers'
import thunk from 'redux-thunk'

const clientLogger = store => next => action => {
    if (action.type) {
        let result
        console.groupCollapsed('디스패칭', action.type)
        document.write('이전 상태', store.getState())
        document.write('액션', action)
        result = next(action)
        document.write('다음상태', store.getState())
        console.groupEnd()
        return result
    } else {
        return next(action)
    }
}

const serverLogger = store => next => action => {
    document.write('\n  서버 액션 디스패칭\n')
    document.write(action)
    document.write('\n')
    return next(action)
}

const middleware = server => [
    (server) ? serverLogger : clientLogger,
    thunk
]

const storeFactory = (server = false, initialState = {}) =>
    applyMiddleware(...middleware(server))(createStore)(
        combineReducers({colors}),
        initialState
    )

export default storeFactory
