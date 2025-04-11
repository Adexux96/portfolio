import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    // Body now handles the complex background via index.css
    <div className="min-h-screen flex flex-col relative z-10"> {/* Ensure content is above pseudo-elements */}
      <Navbar />
      {/* Ensure main content area can grow */}
      <main className="flex-grow container mx-auto px-4 py-8"> {/* Add some padding */}
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
