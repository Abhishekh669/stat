import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Mail, MapPin, Phone } from 'lucide-react'

function ContactInformation() {
  return (
    <div className="space-y-8">
    <div>
      <h2 className="text-3xl font-serif font-bold mb-6">
        Get in Touch
      </h2>
      <p className="text-muted-foreground mb-8">
        To stay connected, Whether you have a question about
        our products, need help with an order,
        our team is here to assist you.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardContent className="p-6">
          <div className="flex items-start">
            <MapPin className="h-6 w-6 text-primary mr-4 mt-1" />
            <div>
              <h3 className="font-medium mb-2">Visit Our Store</h3>
              <p className="text-sm text-muted-foreground">
                123 George Street
                <br />
                Sydney, NSW 2000
                <br />
                Australia
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-start">
            <Phone className="h-6 w-6 text-primary mr-4 mt-1" />
            <div>
              <h3 className="font-medium mb-2">Call Us</h3>
              <p className="text-sm text-muted-foreground">
                +61 2 1234 5678
                <br />
                Monday - Friday: 9am - 5pm
                <br />
                Saturday: 10am - 4pm
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-start">
            <Mail className="h-6 w-6 text-primary mr-4 mt-1" />
            <div>
              <h3 className="font-medium mb-2">Email Us</h3>
              <p className="text-sm text-muted-foreground">
                General Inquiries:
                <br />
                info@writefullyyours.com
                <br />
                <br />
                Customer Support:
                <br />
                support@writefullyyours.com
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-start">
            <svg
              className="h-6 w-6 text-primary mr-4 mt-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
            <div>
              <h3 className="font-medium mb-2">Follow Us</h3>
              <p className="text-sm text-muted-foreground">
                Stay updated with our latest products, events, and
                promotions by following us on social media.
              </p>
              <div className="flex space-x-4 mt-3">
                <a
                  href="#"
                  className="text-primary hover:text-primary/80"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="text-primary hover:text-primary/80"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="text-primary hover:text-primary/80"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
  )
}

export default ContactInformation
