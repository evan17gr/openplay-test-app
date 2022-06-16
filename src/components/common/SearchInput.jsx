import propTypes from 'prop-types';
import {Input} from 'antd';

const SearchInput = ({setInputValue}) => {
  return <Input placeholder="Please type a word" onChange={(e) => setInputValue(e.target.value)} />;
};

SearchInput.propTypes = {
  setInputValue: propTypes.func.isRequired,
};

export default SearchInput;
