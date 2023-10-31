import searchIcon from '../assets/icons/search-icon.svg';
import messageIcon from '../assets/icons/messages.svg'
import notificationIcon from '../assets/icons/notifications.svg'
import homeIcon from '../assets/icons/home.svg'
import groupsIcon from '../assets/icons/groups.svg'
import newsIcon from '../assets/icons/news.svg'

const Header = () => {
    return (
        <header className="nav-header flex h-20 w-full items-center pr-5 pl-5 justify-around">
            <h1 className="header-nav-brand text-2xl font-extrabold">it-junior.ru</h1>
            <ul className="flex nav-links">
                <li className="mr-8 h-10 flex">
                    <a href="#" className="header-nav-element p-2 pl-3 pr-3 rounded-md text-md font-medium"><img src={homeIcon}alt="Домой" /></a>
                </li>
                <li className="mr-8 h-10 flex">
                    <a href="#" className="header-nav-element p-2 pl-3 pr-3  rounded-md text-md font-medium"><img className='w-full h-full' src={newsIcon} alt="Новости" /></a>
                </li>
                <li className="mr-2 h-10 flex">
                    <a href="#" className="header-nav-element p-2 pl-3 pr-3  rounded-md text-md font-medium flex"><img src={groupsIcon} alt="Сообщества" /></a>
                </li>
            </ul>
            <div className="header-search w-1/4 h-1/2 flex rounded-lg pr-5 pl-5 justify-between mr-2">
                <input className="outline-none bg-transparent text-white w-10/12" type="text" placeholder="Поиск"/>
                <img className='w-5 cursor-pointer' src={searchIcon} alt="search" />
            </div>
            <div className="messages-group flex">
                <a href="#"><img className='p-2 rounded-lg mr-4 w-10' src={messageIcon} alt="messages" /></a>
                <a href="#"><img className='p-2 rounded-lg mr-4 w-10' src={notificationIcon} alt="notifications" /></a>
            </div>
            <div className="nav-profile flex items-center">
                <div className="nav-profile-picture w-10 h-10 rounded-md bg-cyan-300 flex items-center justify-center mr-3">
                    <a href="#">P</a>
                </div>
                <p className='text-white text-lg'>Nickname</p>
            </div>
        </header>
    );
}
 
export default Header;