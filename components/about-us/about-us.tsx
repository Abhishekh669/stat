import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Heart, Leaf, Award } from "lucide-react"

export default function AboutUsPage() {

    const aboutMembers = [
        {
          name: "Emma Thompson",
          role: "Founder & Creative Director",
          bio: "With a background in graphic design and a lifelong love of stationery, Emma founded Writefully Yours to share her passion with others.",
          image: "/placeholder.svg?height=400&width=400",
        },
        {
          name: "David Chen",
          role: "Store Manager",
          bio: "David ensures our store runs smoothly and that every customer leaves with exactly what they need.",
          image: "/placeholder.svg?height=400&width=400",
        },
        {
          name: "Sarah Williams",
          role: "Product Curator",
          bio: "Sarah travels the world to discover unique and high-quality stationery products for our collection.",
          image: "/placeholder.svg?height=400&width=400",
        },
      ]
    const aboutMe = [
        {
          icon: <Users className="h-10 w-10 text-primary" />,
          title: "Customer First",
          description:
            "We prioritize your needs and strive to exceed your expectations with every interaction.",
        },
        {
          icon: <Heart className="h-10 w-10 text-primary" />,
          title: "Passion for Quality",
          description: "We carefully select each product for its craftsmanship, functionality, and design.",
        },
        {
          icon: <Leaf className="h-10 w-10 text-primary" />,
          title: "Sustainability",
          description: "We're committed to environmentally responsible practices and products.",
        },
        {
          icon: <Award className="h-10 w-10 text-primary" />,
          title: "Community",
          description: "We support local artists and foster a community of stationery enthusiasts.",
        },
      ]
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-primary/10 py-12">
        <div className="container px-4">
          <h1 className="text-4xl font-serif font-bold text-center">About Us</h1>
        </div>
      </div>

      <main className="flex-1">
        <section className="py-16">
          <div className="container px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-serif font-bold">Our Story</h2>
                <p className="text-muted-foreground">
                  Writefully Yours was born from a passion for beautiful stationery and the belief that the right tools
                  can inspire creativity and productivity. Founded in 2015 by Sydney-based designer Emma Thompson, our
                  journey began as a small pop-up shop in Surry Hills.
                </p>
                <p className="text-muted-foreground">
                  What started as a curated collection of Emma's favorite notebooks and pens quickly grew into a beloved
                  destination for stationery enthusiasts across Sydney. Today, Writefully Yours has expanded to our
                  flagship store in the heart of Sydney, while maintaining our commitment to quality, craftsmanship, and
                  personal service.
                </p>
                <p className="text-muted-foreground">
                  We believe that in our increasingly digital world, there's something special about putting pen to
                  paper. Whether you're jotting down ideas, planning your week, or writing a heartfelt note, we're here
                  to provide the perfect tools for your journey.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Writefully Yours founder in the store"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container px-4">
            <h2 className="text-3xl font-serif font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {aboutMe.map((value, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">{value.icon}</div>
                    <h3 className="text-xl font-medium mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container px-4">
            <h2 className="text-3xl font-serif font-bold text-center mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {aboutMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="relative h-[300px] w-[300px] mx-auto rounded-full overflow-hidden mb-6">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl font-medium">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm max-w-xs mx-auto">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Store */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Writefully Yours store interior"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-serif font-bold">Visit Our Store</h2>
                <p className="text-muted-foreground">
                  Our flagship store in Sydney is designed to be a haven for stationery lovers. Browse our carefully
                  curated collection, test pens at our writing station, or join one of our regular workshops and events.
                </p>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="text-muted-foreground">123 George Street, Sydney, NSW 2000, Australia</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Hours</h3>
                    <p className="text-muted-foreground">Monday - Friday: 10am - 7pm</p>
                    <p className="text-muted-foreground">Saturday: 10am - 6pm</p>
                    <p className="text-muted-foreground">Sunday: 11am - 5pm</p>
                  </div>
                </div>
                <Button>Get Directions</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container px-4 text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">Ready to Explore?</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Discover our collection of premium stationery products and find the perfect tools for your writing,
              planning, and creative needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Shop Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

