import { Link } from 'react-router-dom'
// import Logo from "../images/"


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
                    <img src="" alt="" />
                <div className='links'>
                    <Link className='link' to="/?cat=art">
                        <h6>ART</h6>
                    </Link>
                    <Link className='link' to="/?cat=art">
                        <h6>SCIENCE</h6>
                    </Link>
                    <Link className='link' to="/?cat=art">
                        <h6>TECH</h6>
                    </Link>
                    <Link className='link' to="/?cat=art">
                        <h6>CINEMA</h6>
                    </Link>
                    <Link className='link' to="/?cat=art">
                        <h6>FOOD</h6>
                    </Link>
                    <Link className='link' to="/?cat=art">
                        <h6>DESIGN</h6>
                    </Link>
                    <span>John</span>
                    <span>Logout</span>
                    <span className='writePost'>
                        <Link className="link" to='/writePost'>Write</Link>
                    </span>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;