import {useMemo} from 'react';
import {} from 'react-router-dom';

import {filterNestedArray, fuzzySearch, getSimilarOccurences, orderArray} from '../util';

/**
 * Filter data by tag and keyword
 * @param {{selectedTag:number,searchKeyword:string;originalArray:Array<Object>,filterOptions:{prop:string,type:"string" | "time"}}} filterData - Tag filter, keyword filter, non-filtered data, object property the filter is based on
 * @returns {{filteredData:Array<Object>}} - Filtered data
 */

//This code isn't very good, but of course in an actual application all this filtering and sorting,
//would be happening on the backend instead of us needing to do this so inefficiently

const useFilter = ({selectedTag, searchKeyword, originalArray, filterOptions}) => {
  const filteredDataByTag = useMemo(() => {
    if (selectedTag) {
      const filteredData = filterNestedArray(originalArray, 'tags', 'id', selectedTag);
      return filteredData;
    }
    return [];
  }, [selectedTag]);

  const filteredDataByKeyword = useMemo(() => {
    if (searchKeyword) {
      const filteredData = fuzzySearch(originalArray, 'name', searchKeyword);
      return filteredData;
    }
    return [];
  }, [searchKeyword]);

  const filteredData = useMemo(() => {
    if (selectedTag && searchKeyword) {
      return orderArray(
        getSimilarOccurences(filteredDataByKeyword, filteredDataByTag, 'id'),
        filterOptions.prop,
        filterOptions.type,
      );
    } else if (searchKeyword) return filteredDataByKeyword;
    else if (selectedTag) return filteredDataByTag;
    else if (originalArray) return orderArray(originalArray, filterOptions.prop, filterOptions.type);
  }, [searchKeyword, selectedTag, originalArray]);

  return {filteredData};
};

export default useFilter;
