/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createWatchList = /* GraphQL */ `
  mutation CreateWatchList(
    $input: CreateWatchListInput!
    $condition: ModelWatchListConditionInput
  ) {
    createWatchList(input: $input, condition: $condition) {
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
export const updateWatchList = /* GraphQL */ `
  mutation UpdateWatchList(
    $input: UpdateWatchListInput!
    $condition: ModelWatchListConditionInput
  ) {
    updateWatchList(input: $input, condition: $condition) {
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
export const deleteWatchList = /* GraphQL */ `
  mutation DeleteWatchList(
    $input: DeleteWatchListInput!
    $condition: ModelWatchListConditionInput
  ) {
    deleteWatchList(input: $input, condition: $condition) {
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
export const createMovies = /* GraphQL */ `
  mutation CreateMovies(
    $input: CreateMoviesInput!
    $condition: ModelMoviesConditionInput
  ) {
    createMovies(input: $input, condition: $condition) {
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
export const updateMovies = /* GraphQL */ `
  mutation UpdateMovies(
    $input: UpdateMoviesInput!
    $condition: ModelMoviesConditionInput
  ) {
    updateMovies(input: $input, condition: $condition) {
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
export const deleteMovies = /* GraphQL */ `
  mutation DeleteMovies(
    $input: DeleteMoviesInput!
    $condition: ModelMoviesConditionInput
  ) {
    deleteMovies(input: $input, condition: $condition) {
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
