import PropTypes from 'prop-types';
import { PhoneBookItem } from './PhoneBookItem';

export const PhoneBookList = ({ contactList, onDelete }) => {
  return (
    <ul>
      {contactList.map(({ id, name, number }) => (
        <PhoneBookItem
          onDelete={onDelete}
          key={id}
          name={name}
          number={number}
          id={id}
        ></PhoneBookItem>
      ))}
    </ul>
  );
};

PhoneBookList.propTypes = {
  phoneBookList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDelete: PropTypes.func,
};
