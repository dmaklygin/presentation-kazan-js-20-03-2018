import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

export default function(middlewares = [thunk], data = {}) {
  const mockedStore = configureStore(middlewares)

  return mockedStore(data)
}
