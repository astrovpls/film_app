import { makeAutoObservable } from "mobx"
import RootStore from '../RootStore'
import { IMovieList } from '../services'
import {getData, Services} from '../services' 

export class MovieStore {
  movies: any = {}

  constructor (_root: RootStore, initialState: any) {
    makeAutoObservable(this)
    this.movies = initialState?.movies.results.length ? initialState.movies : {}
  }
  
  async fetchData (query?: Services) {
    const defaultQuery = { page: 1 }
    const a = await getData(query || defaultQuery).then()
    await this.init(a)
    await console.log(this.movies);
  }
  
  init (list: IMovieList): void {
    this.movies = list
  }
}