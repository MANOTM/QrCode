import Logo from '../../assets/logo.png'
function Header() {
    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <nav
                className="flex items-center justify-between p-6 lg:px-8"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <img
                            className="h-8 w-auto"
                            src={Logo}
                            alt=""
                        />
                    </a>
                </div>
                <div className=" lg:flex lg:flex-1 lg:justify-end">
                    <a href="http://manotm.tk/" target='_blank' className="text-sm font-semibold leading-6 text-gray-900">
                        Manotm <span aria-hidden="true">→</span>
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Header