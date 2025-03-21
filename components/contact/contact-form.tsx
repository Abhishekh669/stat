import React from 'react'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Card, CardContent } from '../ui/card'
import { Button } from '../ui/button'

function ContactForm() {
  return (
    <div>
    <Card>
      <CardContent className="p-6">
        <h2 className="text-2xl font-serif font-bold mb-6">
          Send Us a Message
        </h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                htmlFor="first-name"
                className="text-sm font-medium flex items-center"
              >
                First Name <span className="text-red-500 ml-1">*</span>
              </label>
              <Input
                id="first-name"
                placeholder="Enter your first name"
                required
                aria-required="true"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="last-name"
                className="text-sm font-medium flex items-center"
              >
                Last Name <span className="text-red-500 ml-1">*</span>
              </label>
              <Input
                id="last-name"
                placeholder="Enter your last name"
                required
                aria-required="true"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium flex items-center"
            >
              Email Address <span className="text-red-500 ml-1">*</span>
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
              required
              aria-required="true"
            />
            <p className="text-xs text-muted-foreground">
              We&apos;ll never share your email with anyone else.
            </p>
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium">
              Phone Number (Optional)
            </label>
            <Input id="phone" placeholder="Enter your phone number" />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="subject"
              className="text-sm font-medium flex items-center"
            >
              Subject <span className="text-red-500 ml-1">*</span>
            </label>
            <Input
              id="subject"
              placeholder="Enter the subject of your message"
              required
              aria-required="true"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-sm font-medium flex items-center"
            >
              Message <span className="text-red-500 ml-1">*</span>
            </label>
            <Textarea
              id="message"
              placeholder="Enter your message here"
              rows={5}
              required
              aria-required="true"
            />
          </div>
          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              id="privacy-policy"
              className="mt-1"
              required
            />
            <label htmlFor="privacy-policy" className="text-xs">
              I agree to the{" "}
              <a
                href="/privacy-policy"
                className="text-primary hover:underline"
              >
                Privacy Policy
              </a>{" "}
              and consent to having my data processed as described.
            </label>
          </div>
          <Button type="submit" className="w-full">
            Send Message
          </Button>
          <p className="text-xs text-center text-muted-foreground">
            We typically respond within 24-48 business hours.
          </p>
        </form>
      </CardContent>
    </Card>
  </div>
  )
}

export default ContactForm
