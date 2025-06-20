import { merge } from './merge';

const collection_1 = [9, 7, 5, 3];
const collection_2 = [1, 2, 6, 10];
const collection_3 = [0, 4, 8];

const result = merge(collection_1, collection_2, collection_3);
console.log('Merged Result:', result);