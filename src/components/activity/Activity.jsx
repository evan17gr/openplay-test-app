import propTypes from 'prop-types';
import {Typography} from 'antd';

import Tag from '../common/Tag';
import Card from '../common/Card';
import CenteredSection from '../common/CenteredSection';

const {Text} = Typography;

const Activity = ({activity}) => {
  return (
    <Card title={activity?.name}>
      <CenteredSection style={{flexDirection: 'column'}}>
        <Text strong>Start time: {activity?.start_time}</Text>
        <Text strong> End time: {activity?.end_time}</Text>
        <Text strong>Level: {activity?.level}</Text>
        <Text strong>Location: {activity?.location}</Text>
        <CenteredSection style={{margin: '0.5rem 0'}}>
          {activity?.tags && activity.tags.map((tag) => <Tag key={tag?.id} tagName={tag?.name} />)}
        </CenteredSection>
      </CenteredSection>
    </Card>
  );
};

Activity.propTypes = {
  activity: propTypes.shape({
    name: propTypes.string.isRequired,
    id: propTypes.number.isRequired,
    start_time: propTypes.string.isRequired,
    end_time: propTypes.string.isRequired,
    level: propTypes.string.isRequired,
    location: propTypes.string.isRequired,
    facility_id: propTypes.number.isRequired,
    tags: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.number.isRequired,
        name: propTypes.string.isRequired,
      }).isRequired,
    ),
  }).isRequired,
};

export default Activity;
