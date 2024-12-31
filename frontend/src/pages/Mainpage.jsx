import React from 'react'
import { Link } from 'react-router-dom'

export default function Mainpage() {
  return (
    <div>
      <div className="text-white py-6 content-center width-full text-center ">
        <div className="bg-white container mx-auto px-4 py-6 rounded-lg border-2 border-black shadow-lg text-center shadow-lg">
        <h1 className="text-9xl font-bold text-primary ">Modico Technologies</h1>
        <h2 className="text-2xl text-secondary-100 font-bold">Your Trusted IT Partner</h2>
        <div className="flex justify-center mx-10">
          <Link to={'/products'} className="bg-transparent border border-secondary-200 text-black hover:bg-grey hover:text-secondary-100 font-bold text-3xl mt-3 mx-3 py-2 px-4 rounded-lg">Products</Link>
          <Link to={'/services'}className="bg-transparent border border-secondary-200 text-black hover:text-secondary-100 font-bold text-3xl mt-3 mx-3 py-2 px-4 rounded-lg">Services</Link>
        </div>
        </div>
      </div>
      <div className="bg-primary text-white py-6 px-6 flex-items justify-center rounded-lg my-5">
        <h1 className="text-4xl font-bold text-center my-2">Objective</h1>
        <span className="container mx-auto px-4">
        The main objective of the company is to serve customers both in public and private sector in
        such areas as production, trade, banks, government institutions and NGOs. 
        The idea of its creators is to offer its customers complete solutions from the study, design, hardware and software supply, tips on what and where to be purchased, service and training.
        </span>
        </div>

        <div className="bg-secondary-200 text-white py-6 px-6 flex-items justify-center rounded-lg my-5">
        <h1 className="text-4xl font-bold text-center my-2">Principles</h1>
        <span className="container mx-auto text-center">QUALITY – Modico Technologies invests time, money and resources necessary to ensure the desired quality and growth in terms of rapidly evolving market.<br/>
          SERVICE - The service must complement quality. Only by understanding the needs of its customers the company can provide high quality services and maintain its leading position on the market.<br/>
          EFFICIENCY – The company believes that the best way to improve productivity is to provide its people with the opportunity to learn and improve their personal skills, contribute to the work process and be satisfied with their achievements<br/>
          INNOVATION – Long-term success can only be assured by cultivating new ideas. That’s why the company encourages its employees to be creative, and gives them the means to see their ideas realized.<br/>
        </span>
        </div>
    </div>
  )
}
