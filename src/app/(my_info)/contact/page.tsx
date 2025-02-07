import ContactForm from "@/components/ContactForm/ContactForm";
import Nav from "@/components/nav/nav";

const ContactPage = () => {
  return (
    <main className="">
      <div className=" sticky top-0 bg-white">
        <Nav />
      </div>
      <div className="bg-slate-100 min-h-screen flex items-center justify-center">

        <div className=" responsive-box py-10">
          <ContactForm />
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
