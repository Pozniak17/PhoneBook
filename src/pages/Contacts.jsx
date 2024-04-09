import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import PageTitle from "../components/PageTitle/PageTitle";

export default function Contacts() {
  return (
    <>
      <PageTitle>Your contacts</PageTitle>
      <ContactForm />
      <ContactList />
    </>
  );
}
