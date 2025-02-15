import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Page() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center">
          <h1 className="text-xl font-semibold">Mindell Lab</h1>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 pb-12 text-center">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-5xl md:text-6xl mb-6">Powering the apps that power your life.</h2>
            <p className="text-gray-600 text-lg mb-8">Building intuitive tools that make your everyday life easier and more productive.</p>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-semibold mb-12">Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* AudioPad Card */}
              <div className="group border border-gray-200 rounded-xl p-6 hover:border-gray-400 transition-all hover:shadow-sm">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file%20cover%20-%202-OodJBCSfJ5QK62Q02mu2I2SmaaCK7O.png"
                      alt="AudioPad Logo"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">AudioPad</h3>
                  <p className="text-gray-600 text-sm">Messy thoughts into clear summary</p>
                </div>
                <Link
                  href="https://audiopad.co"
                  className="inline-flex items-center justify-center rounded-full bg-black text-white px-6 py-3 hover:bg-black/90 text-sm font-medium"
                >
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              {/* Vocab Card */}
              <div className="group border border-gray-200 rounded-xl p-6 hover:border-gray-400 transition-all hover:shadow-sm">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vocablogo-oSiaCLT0aOEZSq4xYYWOjIrwnqnkmV.png"
                      alt="Vocab Logo"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Vocab</h3>
                  <p className="text-gray-600 text-sm">Tinder, but to boost your vocab</p>
                </div>
                <Link
                  href="https://vocabapp.co"
                  className="inline-flex items-center justify-center rounded-full bg-black text-white px-6 py-3 hover:bg-black/90 text-sm font-medium"
                >
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
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
                  <Link href="/privacy-policy" className="text-gray-600 hover:text-gray-900">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link 
                    href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900"
                  >
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

