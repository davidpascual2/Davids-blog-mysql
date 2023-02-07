import { Link } from 'react-router-dom'

const Navbar = () => {
    return ( 
        // <nav className="navbar">
        //     <h1>Davids Blog</h1>
        //     <div className="links">
        //         <Link to='/'>Home</Link>
        //         <Link to='/create'>New Blog</Link>
        //     </div>
        // </nav>
        <div className='navbar'>
            <div className='container'>
                <div className='logo'>logo</div>
                <div className='links'>links</div>
            </div>
        </div>
     );
}
 
export default Navbar;