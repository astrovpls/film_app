import { MovieStore } from './domain/MovieStore'
import { IMovieList } from './services'

class RootStore {
  movieStore: MovieStore

  constructor (initialState?: any) {
    this.movieStore = new MovieStore(this, initialState?.movieStore)
  }

  init (action: {type: string, payload: IMovieList}): void {
    switch (action.type) {
    case 'movieStore':
      this.movieStore.init(action.payload)
      break
    default:
      break
    }
  }
  
}

export default RootStore
