import { makeAutoObservable } from 'mobx'

export default function todoStore (_root, initialState) {
  return makeAutoObservable({
    items: initialState && initialState.items ? initialState.items : [],

    addItem (item) {
      this.items.push(item)
    },

    init (item) {
      this.items.push(item)
    },
  })
}
