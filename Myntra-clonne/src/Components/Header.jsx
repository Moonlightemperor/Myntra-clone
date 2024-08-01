import { IoIosPerson } from "react-icons/io";
import { FaClipboardList } from "react-icons/fa";
import { IoBagAdd } from "react-icons/io5";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";
const Header = ()=>{

    const bag = useSelector(store => store.bag);
  return <>
   <header>
        <div class="logo_container">
            <Link to="/"><img class="myntra_home" src="../Images/myntra_logo.webp" alt="Myntra Home"/></Link>
        </div>
        <nav class="nav_bar">
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Home & Living</a>
            <a href="#">Beauty</a>
            <a href="#">Studio <sup>New</sup></a>
        </nav>
        <div class="search_bar">
            <span class="material-symbols-outlined search_icon">search</span>
            <input class="search_input" placeholder="Search for products, brands and more"/>
        </div>
        <div class="action_bar">
            <div class="action_container">
            <IoIosPerson />
                <span class="action_name">Profile</span>
            </div>

            <div class="action_container">
            <FaClipboardList />
                <span class="action_name">Wishlist</span>
            </div>

            <Link to="/bag" class="action_container">
                
            <IoBagAdd />
                <span class="action_name">Bag</span>
                <span class="bag-item-count">{bag.length}</span>
            </Link>
        </div>
    </header></>
}

export default Header;