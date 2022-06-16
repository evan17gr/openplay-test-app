import {useState} from 'react';
import {useParams} from 'react-router-dom';

import Activity from '../components/activity/Activity';
import SpinnerOrError from '../components/common/SpinnerOrError';
import {orderArray, getUniqueOccurences} from '../util';
import useFetch from '../hooks/useFetch';
import CenteredSection from 'components/common/CenteredSection';
import Navbar from '../components/common/Navbar';
import useFilter from '../hooks/useFilter';

const Activities = () => {
  const {facilityId} = useParams();
  const {data: activities, isLoading, error} = useFetch('activities.json');
  const activityTags = activities && orderArray(getUniqueOccurences(activities, 'tags', 'id'), 'name', 'text');

  const [selectedTag, setSelectedTag] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState(null);
  const {filteredData} = useFilter({
    selectedTag,
    searchKeyword,
    originalArray: activities,
    filterOptions: {prop: 'start_time', type: 'time'},
  });
  const filteredActivities = filteredData && filteredData.filter((o) => o.facility_id === Number(facilityId));

  return (
    <>
      <CenteredSection style={{height: '10vh'}}>
        <Navbar setSelectedOption={setSelectedTag} setInputValue={setSearchKeyword} dropdownOptions={activityTags} />
      </CenteredSection>
      <SpinnerOrError isLoading={isLoading} error={error} />
      <CenteredSection style={{flexDirection: 'column'}}>
        {filteredActivities && filteredActivities.length > 0 ? (
          filteredActivities.map((activity) => <Activity key={activity?.id} activity={activity} />)
        ) : (
          <section>No Results</section>
        )}
      </CenteredSection>
    </>
  );
};

export default Activities;
