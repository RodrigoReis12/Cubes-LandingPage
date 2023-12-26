import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className=''>
      <section className="bg-no-repeat bg-center h-screen " style={{ backgroundImage: 'url("img/cube2.png")', backgroundSize: 'cover' }}>
        <nav className='flex p-10 justify-between  '>
          <div className='flex gap-1 cursor-pointer items-center '>
            <p className='px-2 py-1 bg-gradient-to-r from-pink-300 to-pink-500 rounded-full font-extrabold text-white'>N</p>
            <h1 className='text-pink-100 font-extrabold'>essterm</h1>
          </div>
          <ul className='md:flex gap-4 text-gray-200 cursor-pointer items-center hidden'>
            <li><Link href="#about">About</Link></li>
            <li><Link href="#services">Services</Link></li>
            <li><Link href="#happyclients">Happy Clients</Link></li>
          </ul>
          <button className='text-white font-semibold bg-slate-700 px-4 py-1 rounded-md'>HireUs</button>
        </nav>
          <h1 className='font-extrabold text-4xl sm:text-5xl md:text-6xl  text-white tracking-tighter text-center'>Creative Websites <br />for your ideas</h1>      
      </section>

    {/* About */}

      <section id='about' className="pt-20 min-h-min w-full bg-gray-50">
        <div className='p-10 flex flex-col lg:flex-wrap lg:flex-row sm:w-full sm:items-center gap-6 lg:justify-between  text-center lg:text-start m-auto'>
          <div className=" ">
            <h1 className="font-bold text-[44px] sm:text-5xl md:text-6xl mb-5   ">Digital Innovation <br />at You</h1>
            <p className='flex-wrap max-w-[544px] text-gray-600 text-[16px] md:text-xl'>In the era of digital dominance, an online presence transcends mere necessity; it stands as a strategic advantage that propels the growth and visibility of businesses across all scales. Within this dynamic landscape, Nessterm Solutions stands out as a dedicated company, committed to translating ideas into extraordinary digital experiences.</p>
          </div>
          <Image width={600} height={500} src='/img/companyTeam.jpg' alt="testing" className='rounded-3xl' />
        </div>
      </section>

      {/* Services */}

      <section id='services' className='pt-20 min-h-min w-full bg-gray-50'>
        <div className='p-10 '>
          <h1 className='font-bold text-[44px] sm:text-5xl flex lg:justify-start justify-center  md:text-6xl mb-10 '>Services</h1>

            <div className='flex flex-wrap gap-5 justify-center lg:justify-normal'>
              <div className='w-[405px] shadow-md p-10 bg-[#5fb0e6] rounded-lg text-center '>
                <img src="/icons/webdesign.png" alt="webdesign"
                className='m-auto mb-8 ' />
                <h1 className='font-bold'>Web Design and Development</h1>
              </div>
              <div className='w-[405px] p-10 bg-[#5fb0e6] shadow-md rounded-lg text-center'>
                <img src="/icons/ecomerce.png" alt="ecommerce"
                className='m-auto mb-8 ' />
                <h1 className='font-bold'>E-Commerce Solutions</h1>
              </div>
              <div className='w-[405px] p-10 bg-[#5fb0e6] shadow-md rounded-lg text-center'>
                <img src="/icons/searchengine.png" alt="searchengine"
                className='m-auto mb-8 ' />
                <h1 className='font-bold'>Search Engine Optimization</h1>
              </div>
              <div className='w-[405px] p-10 bg-[#5fb0e6] shadow-md rounded-lg text-center'>
                <img src="/icons/webdevelopment.png" alt="webdevelopment"
                className='m-auto mb-8 ' />
                <h1 className='font-bold'>Custom Web Development</h1>
              </div>
              <div className='w-[405px] p-10 bg-[#5fb0e6] shadow-md rounded-lg text-center'>
                <img src="/icons/webmarketing.png" alt="webmarketing"
                className='m-auto mb-8 ' />
                <h1 className='font-bold'>Digital Marketing</h1>
              </div>
              <div className='w-[405px] p-10 bg-[#5fb0e6] shadow-md rounded-lg text-center'>
                <img src="/icons/cms.png" alt="cms"
                className='m-auto mb-8 ' />
                <h1 className='font-bold'>Content Management Systems</h1>
              </div>
          </div>
        </div>
      </section>

      {/* Happy Clients */}

      <section id="happyclients">
        <h1>test</h1>
      </section>
    </main>
  )
}
