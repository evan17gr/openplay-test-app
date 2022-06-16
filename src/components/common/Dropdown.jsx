import propTypes from 'prop-types';
import {Select} from 'antd';

const {Option} = Select;

const Dropdown = ({dropdownOptions, setSelectedOption}) => {
  const handleOptionChange = (value) => {
    value === 'All' ? setSelectedOption(null) : setSelectedOption(value);
  };

  return (
    <Select style={{width: 120}} onChange={handleOptionChange} defaultValue="All">
      <Option value="All">All</Option>
      {dropdownOptions &&
        dropdownOptions.map((tag) => (
          <Option key={tag?.id} value={tag?.id}>
            {tag.name}
          </Option>
        ))}
    </Select>
  );
};

Dropdown.propTypes = {
  dropdownOptions: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string.isRequired,
      id: propTypes.number.isRequired,
    }),
  ),
  setSelectedOption: propTypes.func.isRequired,
};

export default Dropdown;
