import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useState } from 'react';
import { getContacts } from 'redux/contacts/selectors';
import { addContact } from '../../redux/contacts/contactsOperations';
import s from './ContactForm.module.css';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const onFormChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const readyContact = name => {
    return contacts.find(
      data => data.name.toLowerCase() === name.toLowerCase()
    );
  };

  const onFormSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    if (readyContact(name)) {
      Notify.failure('This contact is already there!');
      form.reset();
      return;
    }
    dispatch(addContact({ name, number }));
    form.reset();
  };
  return (
    <>
      <form className={s.form} onSubmit={onFormSubmit}>
        <input
          onChange={onFormChange}
          type="text"
          name="name"
          placeholder="Don Quixote"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <input
          onChange={onFormChange}
          type="tel"
          name="number"
          placeholder="+38(033)-11-22"
          required
        />
        <button className={s.formButton} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};
