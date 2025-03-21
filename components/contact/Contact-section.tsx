import React from "react";
import ContactInformation from "./contact-information";
import ContactForm from "./contact-form";

function ContactSectionPage() {
  return (
    <main className="flex-1 py-16">
      <div className="container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInformation />
          <ContactForm />
        </div>
      </div>
    </main>
  );
}

export default ContactSectionPage;
