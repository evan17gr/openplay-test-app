import propTypes from 'prop-types';

import Dropdown from './Dropdown';
import SearchInput from './SearchInput';

const Navbar = ({dropdownOptions, setSelectedOption, setInputValue}) => {
  return (
    <>
      <Dropdown dropdownOptions={dropdownOptions} setSelectedOption={setSelectedOption} />
      <SearchInput setInputValue={setInputValue} />
    </>
  );
};

Navbar.propTypes = {
  dropdownOptions: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string.isRequired,
      id: propTypes.number.isRequired,
    }),
  ),
  setSelectedOption: propTypes.func.isRequired,
  setInputValue: propTypes.func.isRequired,
};

export default Navbar;
