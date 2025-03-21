import ContactSectionPage from '@/components/contact/Contact-section'
import React from 'react'

function ContactPage() {
  return (
    <div>
       <div className="bg-primary/10 py-12">
        <div className="container px-4">
          <h1 className="text-4xl font-serif font-bold text-center">Contact Us</h1>
        </div>
      </div>
      <ContactSectionPage />
    </div>
  )
}

export default ContactPage
