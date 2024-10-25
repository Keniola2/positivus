import React from 'react'

const FooterContact = () => {
  return (
    <>
    <div className="flex py-8 md:flex-col px-4 lg:px-8 sm:px-6 gap-8">
        {/* left */}
            <div className="flex-1 space-y-4">
                <button className='bg-primary text-secondary px-6 py-2 rounded-md font-medium'>Contact</button>
                <div className="text-white hover:text-primary">
                    <p><strong>Email:</strong> Positivus@gmail.com</p>
                    <p><strong>Phone:</strong> +234-9071-7521-43</p>
                    <p><strong>Address:</strong>1234 ExampleSt, City, Country</p>
                </div>
            </div>
            {/* right */}
            <div className="flex-1">
                <form className='flex gap-2 md:flex-col justify-center items-center md:justify-start md:items-start' >
                <input type="email" name="email" placeholder='Enter your email '  className='flex-1 px-4 py-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-2 focus:ring-primary'/>
                <button type='submit' className='inline-block px-4 py-2 bg-primary text-secondary font-semibold rounded-md transition-all duration-300'>Send Message</button>
                </form>
            </div>
    </div>
    </>
  )
}

export default FooterContact