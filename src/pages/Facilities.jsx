import {useState} from 'react';

import Facility from '../components/facility/Facility';
import SpinnerOrError from '../components/common/SpinnerOrError';
import {orderArray, getUniqueOccurences} from '../util';
import useFetch from '../hooks/useFetch';
import CenteredSection from 'components/common/CenteredSection';
import Navbar from '../components/common/Navbar';
import useFilter from '../hooks/useFilter';

const Facilities = () => {
  const {data: facilities, isLoading, error} = useFetch('facilities.json');
  const facilityTags = facilities && orderArray(getUniqueOccurences(facilities, 'tags', 'id'), 'name', 'text');

  const [selectedTag, setSelectedTag] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState(null);
  const {filteredData} = useFilter({
    selectedTag,
    searchKeyword,
    originalArray: facilities,
    filterOptions: {prop: 'name', type: 'string'},
  });
  const filteredFacilities = filteredData && orderArray(filteredData, 'name', 'text');

  return (
    <>
      {/* I think prop drilling up to 2 levels is fine*/}
      {/* If I find myself having to do more than 2 levels, then I rethink about my approach and avoid prop drilling*/}
      <CenteredSection style={{height: '10vh'}}>
        <Navbar setSelectedOption={setSelectedTag} setInputValue={setSearchKeyword} dropdownOptions={facilityTags} />
      </CenteredSection>
      <SpinnerOrError isLoading={isLoading} error={error} />
      <CenteredSection style={{flexDirection: 'column'}}>
        {filteredFacilities && filteredFacilities.length > 0 ? (
          filteredFacilities.map((facility) => <Facility key={facility?.id} facility={facility} />)
        ) : (
          <section>No Results</section>
        )}
      </CenteredSection>
    </>
  );
};

export default Facilities;
