const Footer = () => {
    return (
        <footer className="bg-white text-gray-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">

                    <div className="space-y-4">
                        {/* Logo */}
                        <p className="text-sm leading-6">
                            Our paper is sourced from FSC-certified nails. We plant enough trees to more than double our paper usage.
                        </p>
                    </div>


                    <div className="col-span-2">
                        <h3 className="text-lg font-bold text-primary uppercase mb-4">COMPANY</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <a href="" className="block text-sm hover:text-gray-900">About us</a>
                                <a href="" className="block text-sm hover:text-gray-900">Partner program</a>
                                <a href="" className="block text-sm hover:text-gray-900">Career</a>
                                <a href="" className="block text-sm hover:text-gray-900">Contact us</a>
                                <a href="" className="block text-sm hover:text-gray-900">Privacy Policy</a>
                            </div>
                            <div className="space-y-2">
                                <a href="" className="block text-sm hover:text-gray-900">Pricing</a>
                                <a href="" className="block text-sm hover:text-gray-900">Reviews</a>
                                <a href="" className="block text-sm hover:text-gray-900">Direct Mail Academy</a>
                                <a href="" className="block text-sm hover:text-gray-900">Success stories</a>
                                <a href="" className="block text-sm hover:text-gray-900">Terms & conditions</a>
                            </div>
                        </div>
                    </div>


                    <div className="space-y-4">
                        <h3 className="text-lg font-bold uppercase text-primary">CONTACT</h3>
                        <a href="mailto:support@postpilot.com" className="text-sm hover:text-gray-900 block">
                            mohamedehamza32@gmail.com
                        </a>
                    </div>
                </div>


                <div className="border-t border-gray-200 mb-8"></div>


                <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
                    <div className="space-y-2">
                        <p className="text-xs text-gray-500">
                            {/* logo */}
                        </p>
                        <div className="flex items-center space-x-4">
                            <span className="text-sm font-medium">MailMagnet</span>
                            <span className="text-xs text-gray-500">
                                © 2025 MailMagnet, Inc. All rights reserved.
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button className=" btn-primary ">
                            Login
                        </button>
                        <button className="btn-secondary">
                            Try it for free
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;