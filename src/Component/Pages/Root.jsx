
import { Outlet } from 'react-router-dom';
import Menubar from './Menubar';

const Root = () => {
    return (
        <div className='max-w-[1300px mx-auto]'>
            <Menubar></Menubar>
            <Outlet></Outlet>
        </div>
    ); 
};

export default Root;