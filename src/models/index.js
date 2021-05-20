// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { WatchList, Movies } = initSchema(schema);

export {
  WatchList,
  Movies
};