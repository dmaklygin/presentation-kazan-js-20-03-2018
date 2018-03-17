import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from 'reducers'

const configureStore = (history) => {
  const createStoreWithMiddleware = applyMiddleware(thunk.withExtraArgument(history))(createStore)

  return createStoreWithMiddleware(rootReducer)
}

export default configureStore
