import { Section } from './section/Section';
import { ContactForm } from './form/ContactForm ';
import { Filter } from './list/List';

export const App = () => {
  return (
    <div>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
      </Section>
    </div>
  );
};
