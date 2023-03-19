import css from './ContactsList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({contacts, onDeleteContact}) => (
    <ul className={css.list}>
        {contacts.map(({id, name,number}) => {
            return <li key={id} className={css.item}>
                <p className={css.contact}>
                    {name}:{number}
                </p>
                <button className={css.btn} type='submit' onClick={()=> onDeleteContact(id)}> Delete </button>
            </li>
        })}
    </ul>
)

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired, 
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired  
        })
    ),
    onDeleteContact: PropTypes.func.isRequired
}

export default ContactList