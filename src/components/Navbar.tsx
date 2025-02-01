import { Link } from 'react-router-dom';

const _navItems = ["Home", "About", "Connect"];

interface INavItemBase {
    title: string,
    url: string
};

interface INavItem extends INavItemBase {
    subItem?: INavItemBase
};

const Navbar = () => {

  return (
    <nav className="w-full fixed top-0 left-0 z-30">
        <div className="w-full flex flex-row justify-center items-center text-theme m-auto shadow">
        {
            _navItems.map((item, ind)=> (
                <NavItem key={ind} title={item} url={"#"} />
            ))
        }
        </div> 
    </nav> 
  )
}

const NavItem = ({title, url} : INavItem) =>
{
    return (
        <Link 
            to={url} 
            className="px-2 m-2 font-bold hover:text-theme-alt transition-all duration-200"
        >
            {title}
        </Link>
    )
}

export default Navbar