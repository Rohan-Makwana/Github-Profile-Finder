import {Link} from 'react-router-dom';
import {FaGithub} from "react-icons/fa";
import {PropTypes} from 'prop-types';


function Navbar({title}) {
    const toggleTheme = () => {
        const html = document.getElementsByTagName('html')[0];
        (html.hasAttribute('data-theme')) ? html.removeAttribute('data-theme'): html.setAttribute("data-theme", "light");
    }

    return (
        <nav className='navbar mb-12 shadow-lg bg-slate-800 text-neutral-content '>
            <div className="container mx-auto">
              <div className="flex-none mx-2 px-2">
                  <FaGithub className='inline pr-2 text-2xl md:text-3xl'/>
                  <Link to="/" className='text-sm font-bold align-middle md:text-lg'>
                      {title}
                  </Link>
              </div>
              <div className="flex-1 mx-1 px-1 md:mx-2 md:px-2">
                  <div className="flex justify-end">
                      <button onClick={toggleTheme} className="btn btn-ghost btn-xs md:btn-sm btn-rounded ml-1 md:ml-2">
                          🌕/☀️
                      </button>
                      <Link to="/" className='btn btn-ghost btn-xs rounded-btn md:btn-sm ml-1 md:ml-2'>
                          Home 
                      </Link>
                      <Link to="/about" className='btn btn-ghost btn-xs rounded-btn md:btn-sm ml-1 md:ml-2'>
                          About 
                      </Link>
                  </div>
              </div>
            </div>

        </nav>
    )
}

Navbar.defaultProps={
    title: "Github Profile Finder",
}

Navbar.propTypes={
    title: PropTypes.string,
}


export default Navbar;
