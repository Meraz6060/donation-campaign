
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const Menubar = () => {
    return (
        <div>
            <nav className='flex justify-between items-center py-4 px-5 shadow-md'>
                <Logo></Logo> 
                <ul className='flex gap-5'>
                    <li>
                        <NavLink to="/ " className={({ isActive, isPending }) =>
                                isActive ? "text-green-400 underline"
                                : isPending ? "pending" : "" } >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/donation" className={({ isActive, isPending }) =>
                                isActive ? "text-green-400 underline"
                                : isPending ? "pending" : "" } >Donation</NavLink>
                    </li>
                    <li>
                        <NavLink to="/statistics" className={({ isActive, isPending }) =>
                                isActive ? "text-green-400 underline"
                                : isPending ? "pending" : "" } >Statistics</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Menubar;