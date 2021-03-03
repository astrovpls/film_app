import todoStore from './domain/TodoStore'

const model = {
  todoStore: {
    items: [],
  },
}

class RootStore {
  todoStore

  constructor (initialState = model) {
    this.todoStore = todoStore(this, initialState.todoStore)
  }

  init (hui) {
    switch (hui.type) {
    case 'todoStore':
      this.todoStore.init(hui?.payload)
      break
    default:
      break
    }
  }
}

export default RootStore
