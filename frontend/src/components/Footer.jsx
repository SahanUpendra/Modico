import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer className="bg-gray-800 text-white py-6 flex">
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold">Modico Technologies</h1>
          <p className="text-sm">© 2023 Modico Techonogies. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
          <a href="#" className="text-gray-400 hover:text-white">Contact Us</a>
        </div>
      </div>
    </div>
  </footer></div>
  
  )
}
