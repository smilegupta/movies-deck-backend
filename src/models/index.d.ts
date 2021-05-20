import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class WatchList {
  readonly id: string;
  readonly userId: string;
  readonly watchListId: string;
  readonly name: string;
  readonly description?: string;
  constructor(init: ModelInit<WatchList>);
  static copyOf(source: WatchList, mutator: (draft: MutableModel<WatchList>) => MutableModel<WatchList> | void): WatchList;
}

export declare class Movies {
  readonly id: string;
  readonly watchListId: string;
  readonly movieId: string;
  readonly title: string;
  readonly genres?: (number | null)[];
  readonly isAdult?: boolean;
  readonly backdropPath: string;
  readonly posterPath: string;
  readonly releaseDate: string;
  readonly userId: string;
  constructor(init: ModelInit<Movies>);
  static copyOf(source: Movies, mutator: (draft: MutableModel<Movies>) => MutableModel<Movies> | void): Movies;
}