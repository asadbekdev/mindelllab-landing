import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function Page() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center">
          <h1 className="text-xl font-normal">Mindell Lab</h1>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 text-center">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-5xl md:text-6xl font-normal mb-6">Innovating the future of technology.</h2>
            <p className="text-gray-600 text-lg mb-8">Pushing boundaries and creating solutions that shape tomorrow.</p>
            <Button className="rounded-full gap-2 bg-black text-white hover:bg-black/90">
              App portfolio coming soon <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-24 bg-gray-50/50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Portfolio Card 1 */}
              <Card className="overflow-hidden border-0 shadow-lg">
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=450&width=800"
                    alt="Project 1"
                    width={800}
                    height={450}
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Project One</h3>
                  <p className="text-gray-600 mb-4">
                    An innovative solution for modern challenges. Built with cutting-edge technology.
                  </p>
                  <Link href="#" className="text-black hover:underline inline-flex items-center gap-2">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Card>

              {/* Portfolio Card 2 */}
              <Card className="overflow-hidden border-0 shadow-lg">
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=450&width=800"
                    alt="Project 2"
                    width={800}
                    height={450}
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Project Two</h3>
                  <p className="text-gray-600 mb-4">
                    Revolutionizing user experience through intelligent design and seamless integration.
                  </p>
                  <Link href="#" className="text-black hover:underline inline-flex items-center gap-2">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Name */}
            <div>
              <h3 className="font-semibold mb-4">Mindell Lab</h3>
            </div>

            {/* About */}
            <div>
              <h3 className="font-semibold uppercase mb-4">About</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    History
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Privacy */}
            <div>
              <h3 className="font-semibold uppercase mb-4">Privacy</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Terms and Conditions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="font-semibold uppercase mb-4">Social</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Twitter/X
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

