import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';
import ContactForm from '../../components/ContactForm/ContactForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SelectIsLoginIn } from 'redux/selectors';
import { fetchContacts } from 'redux/contacts/contacts_operations';

export const ContactsPage = ()=>{
    const isLogin = useSelector(SelectIsLoginIn)
    const dispatch = useDispatch()
    useEffect(()=>{
isLogin && dispatch(fetchContacts())
    })

    return(
        <>
        <ContactForm/>
        <Filter/>
        <ContactList/>
        
        </>
    )
}