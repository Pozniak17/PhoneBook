import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import PageTitle from "../components/PageTitle/PageTitle";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading } from "../redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contacts/operations";
import { Text } from "../components/ContactList/ContactList.styled";

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <PageTitle>Your contacts</PageTitle>
      <ContactForm />
      <div>
        {isLoading ? <Text>Request in progress...</Text> : <ContactList />}
      </div>
    </>
  );
}
