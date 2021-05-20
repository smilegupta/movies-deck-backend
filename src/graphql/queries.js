/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncWatchLists = /* GraphQL */ `
  query SyncWatchLists(
    $filter: ModelWatchListFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncWatchLists(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        userId
        watchListId
        name
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getWatchList = /* GraphQL */ `
  query GetWatchList($userId: ID!, $watchListId: ID!) {
    getWatchList(userId: $userId, watchListId: $watchListId) {
      userId
      watchListId
      name
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listWatchLists = /* GraphQL */ `
  query ListWatchLists(
    $userId: ID
    $watchListId: ModelIDKeyConditionInput
    $filter: ModelWatchListFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listWatchLists(
      userId: $userId
      watchListId: $watchListId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        userId
        watchListId
        name
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncMovies = /* GraphQL */ `
  query SyncMovies(
    $filter: ModelMoviesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMovies(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        watchListId
        movieId
        title
        genres
        isAdult
        backdropPath
        posterPath
        releaseDate
        userId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getMovies = /* GraphQL */ `
  query GetMovies($watchListId: ID!, $movieId: ID!) {
    getMovies(watchListId: $watchListId, movieId: $movieId) {
      watchListId
      movieId
      title
      genres
      isAdult
      backdropPath
      posterPath
      releaseDate
      userId
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listMoviess = /* GraphQL */ `
  query ListMoviess(
    $watchListId: ID
    $movieId: ModelIDKeyConditionInput
    $filter: ModelMoviesFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listMoviess(
      watchListId: $watchListId
      movieId: $movieId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        watchListId
        movieId
        title
        genres
        isAdult
        backdropPath
        posterPath
        releaseDate
        userId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
