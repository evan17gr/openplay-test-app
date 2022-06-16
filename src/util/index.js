// @ts-nocheck
import Fuse from 'fuse.js';

/**
 * Orders an array of a specific type based on an object property
 * @param  {Array<Object>} array - Array to be sorted
 * @param  {string} prop - Object property that the sorting is based on
 * @param  {'time' | 'text'} type - Object property that the sorting is based on
 * @returns {Array<Object>} - Alphabetically sorted array
 */

export const orderArray = (array, prop, type) => {
  if (type === 'text') return array.sort((a, b) => a[prop].localeCompare(b[prop]));
  else {
    return array.sort((a, b) => new Date('1970/01/01 ' + a[prop]) - new Date('1970/01/01 ' + b[prop]));
  }
};

/**
 * Filters a nested array by an object property
 * @param  {Array<Object>} array - Array to be filtered
 * @param  {string} prop - Object property which contains the nested array
 * @param  {string} filterProp - Object property in the nested array the filter is based on
 * @param  {string | number} filterValue - Value that the property in the nested array needs to be equal to
 * @returns {Array<Object>} - Filtered array
 */

export const filterNestedArray = (array, prop, filterProp, filterValue) => {
  const filteredArray = [];
  array.map((obj) => {
    if (obj[prop].find((nestedObj) => nestedObj[filterProp] === filterValue)) {
      filteredArray.push(obj);
    }
  });
  return filteredArray;
};

/**
 * Get unique occurences from a nested array based on an object property
 * @param {Array} array - Array to be filtered
 * @param {string} prop - Object property which contains the nested array
 * @param {string} filterProp - Property the filtering for unique occurences is based on
 * @returns {Array<Object>} - Array with unique occurences based on a property
 */

export const getUniqueOccurences = (array, prop, filterProp) => {
  const uniqueProps = [];
  const uniqueOccurences = [];

  array.forEach((obj) =>
    obj[prop].forEach((nestedObj) => {
      if (!uniqueProps.includes(nestedObj[filterProp])) {
        uniqueProps.push(nestedObj[filterProp]);
        uniqueOccurences.push(nestedObj);
      }
    }),
  );

  return uniqueOccurences;
};

export const fuzzySearch = (array, prop, filterValue) => {
  const fuse = new Fuse(array, {keys: [prop]});
  const results = fuse.search(filterValue);
  //Fuse.js returns each index within the item property, so we need to normalise the array
  const normalisedArray = [];
  results.forEach((obj) => normalisedArray.push(obj?.item));

  return normalisedArray;
};

/**
 * Get similar occurences from 2 arrays based on an object property
 * @param {Array<Object>} array - First array to be compared
 * @param {Array<Object>} array2 - Second array to be compared
 * @param {string} prop - Object property the comparison is based on
 * @returns {Array<Object>} - Array with unique occurences
 */
export const getSimilarOccurences = (array, array2, prop) => {
  const uniqueProps = [];
  const similarOccurences = [];

  array.forEach((obj) => {
    if (!uniqueProps.includes(obj[prop])) uniqueProps.push(obj[prop]);
  });

  array2.forEach((obj) => {
    if (uniqueProps.includes(obj[prop])) similarOccurences.push(obj);
  });

  return similarOccurences;
};
