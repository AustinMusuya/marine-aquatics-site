// import React from 'react'

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white px-5">
        <section className="max-w-[1200px] mx-auto text-white">
            <div className="grid md:grid-cols-3 py-5">
                {/* first col */}
                <div className="py-8 px-4">
                    <h1 className="text-xl sm:text-3xl 
                    font-bold s,:text-left text-justify mb-3">
                        Be Ready To Grow
                    </h1>
                    <p>
                        Get Exclusive <span className="font-bold">Updates</span> straight to your mailbox
                    </p>
                    <br />
                    <div>
                        <input type="text" className="py-1 px-3 w-full h-[100%]
                        inline-block focus:outline-none 
                        focus:ring-2 focus:ring-sky-500 
                        bg-gray-800 border-gray-200 border-2"
                        placeholder="Email" />
                        <button className="primary-button">
                            OK
                        </button>
                    </div>
                </div>
                {/* second col */}
                <div className="grid grid-cols-2 sm:grid-cols-3 col-s[an-2 md:pl-10">
                    <div>
                        <div className="py-8 px-4">
                            <h1 className="text-xl font-bold mb-3">Quick Links</h1>
                            <ul className="flex flex-col gap-3">
                                <li>
                                    <a href="">Home</a>
                                </li>
                                <li>
                                    <a href="">About</a>
                                </li>
                                <li>
                                    <a href="">Services</a>
                                </li>
                                <li>
                                    <a href="">Login</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 col-s[an-2 md:pl-10">
                    <div>
                        <div className="py-8 px-4">
                            <h1 className="text-xl font-bold mb-3">Quick Links</h1>
                            <ul className="flex flex-col gap-3">
                                <li>
                                    <a href="">Home</a>
                                </li>
                                <li>
                                    <a href="">About</a>
                                </li>
                                <li>
                                    <a href="">Services</a>
                                </li>
                                <li>
                                    <a href="">Login</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer