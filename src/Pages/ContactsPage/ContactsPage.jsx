import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';
import ContactForm from '../../components/ContactForm/ContactForm';

export const ContactsPage = ()=>{

    return(
        <>
        <ContactForm/>
        <Filter/>
        <ContactList/>
        
        </>
    )
}