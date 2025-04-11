import React from 'react'
import { Mail, Github, Twitter } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
            <div className="flex space-x-4">
              <a href="mailto:your-email@example.com" className="text-gray-400 hover:text-white">
                <Mail className="h-6 w-6" />
              </a>
              <a href="https://x.com/Adexux96" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://github.com/Adexux96" className="text-gray-400 hover:text-white">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
