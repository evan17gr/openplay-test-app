import {render} from '@testing-library/react';
import '@testing-library/jest-dom';

import Activity from '../activity/Activity';

const exampleProps = {
  id: 1,
  name: 'Diving',
  start_time: '9:00',
  end_time: '10:00',
  level: 'Experienced',
  location: 'Swimming pool 2',
  facility_id: 84,
  tags: [
    {
      id: 540,
      name: 'Swimming',
    },
  ],
};

describe('Activity', () => {
  test('is rendered', () => {
    const {container} = render(<Activity />);
    expect(container).toBeInTheDocument();
  });

  test('Check props', () => {
    const component = render(<Activity {...exampleProps} />);
    expect(component).toMatchSnapshot();
  });
});
