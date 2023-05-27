import { Item, List } from './Contacts.styled';
import PropTypes from 'prop-types';

export function Contacts({ contacts, deleteContact }) {
  return (
    <>
      <List>
        {contacts.map(contact => (
          <Item key={contact.id}>
            <p>
              {contact.name}: {contact.number}
            </p>
            <button onClick={() => deleteContact(contact.id)}>Удалить</button>
          </Item>
        ))}
      </List>
    </>
  );
}

Contacts.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};
