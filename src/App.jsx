import React from 'react'
import cardData from './cardData'
import Cards from './components/Cards';
import img from './assets/hands-holding-smartphone.jpg'

export default function App() {
  return (
     <div className="min-h-screen bg-orange-200 p-8">
      <div className='flex '>
      <img src={img} className='w-1/3 m-8 inline'/>
      <div className='w-1/2 ml-12 h-1/3 my-4'>
         <h1 className='text-5xl font-bold my-4'>About Us</h1>
         <p className='text-2xl font-semibold my-2'>Sample Headline</p>
         <p className='text-lg my-4 tracking-wide leading-loose'>At Tech Solutions Inc., we are dedicated to providing innovative and high-quality solutions to meet the evolving needs of our customers. With a strong commitment to excellence, we leverage our expertise and industry knowledge to deliver outstanding products and services. Our team of passionate professionals works tirelessly to ensure customer satisfaction, fostering long-lasting relationships built on trust and transparency.</p>
         <button className='bg-black rounded-lg border mt-4 m-2 px-8 py-4 text-lg text-white'>Contact us</button>
      </div>
      </div>
      <div className='p-4'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardData.map(item => (
          <Cards key={item.title} logo={item.logo} title={item.title} description={item.description} />
        ))}
      </div>
      </div>
      
     </div>
    
  )
}
