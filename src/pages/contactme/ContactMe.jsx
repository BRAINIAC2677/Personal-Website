import PageTitle from "../../global-components/PageTitle";
import ContactCard from "./ContactCard";
import contactData from "./contactData";

function ContactMe() {
  const contactCards = contactData.map((data, index) => {
    return <ContactCard key={index} data={data} />;
  });

  console.log(contactCards.length);

  return (
    <div id="contact-me" className="h-auto w-full p-12">
      <PageTitle title="Contact Me" />
      <div className="flex flex-wrap justify-center items-center">
        {contactCards}
      </div>
    </div>
  );
}

export default ContactMe;
