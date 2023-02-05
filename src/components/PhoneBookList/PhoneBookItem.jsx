import { Item } from './PhoneBookList.styled';
export const PhoneBookItem = ({ name, number, id, onDelete }) => (
  <Item>
    <span>{name}:</span>
    <span>{number}</span>
    <button onClick={() => onDelete(id)}>Delete</button>
  </Item>
);
