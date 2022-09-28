import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { Bars3Icon } from '@heroicons/react/24/solid'
const Navbar = () => {
    return (
        <div className='drawer'>
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">

                <nav className="w-full navbar bg-base-100">
                    <div className="navbar-start">
                        <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
                            <Bars3Icon className='h-8 w-8 '></Bars3Icon>
                        </label>
                        <h1 className="btn btn-ghost normal-case text-2xl">
                            <span className='text-primary mr-2'>Adam</span>
                            <span className=''>Shaker</span>
                        </h1>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            <li>
                                <span>
                                    <ChevronDownIcon className="inline-block w-4 h-4 ml-1" />
                                </span>
                                <ul className="p-2">
                                    <li><span>Submenu 1</span></li>
                                    <li><span>Submenu 2</span></li>
                                </ul>
                            </li>
                            <li><a>Projects</a></li>
                            <li><a>Info</a></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <button className="btn">Contact ME</button>
                    </div>
                </nav>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>

                </ul>
            </div>
        </div>
    )
}

export default Navbar;