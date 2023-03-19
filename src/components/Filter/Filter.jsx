import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({value, onChange}) => (
    <div className={css.filter}>
    <label className={css.labelFilter}>
      Filter
      <input
        type="name"
        value={value}
        onChange={onChange}
        className={css.filterInput}
      />
    </label>
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;