// import { LabelFilter } from './Filter.styled';
import PropTypes from 'prop-types';

export function Filter({ value, changeFilter }) {
  return (
    <>
      <label>
        Find contacts by name
        <input type="text" value={value} onChange={changeFilter} />
      </label>
    </>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
