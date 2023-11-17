import searchIcon from '../assets/icons/search-icon.svg';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';

const Header = ({search,setSearch,filterPosts}) => {


    function enterSearchHandler(e) {
        if(e.key=='Enter') {
            filterPosts()
        }
    }


    return (
        <div className="wrapper sticky top-0 z-50">
            <header className="nav-header flex h-20 w-full items-center pr-8 pl-8 justify-between">
                <h1 className="header-nav-brand text-2xl font-extrabold">it-junior.ru</h1>
                <ul className="flex nav-links w-1/2 justify-start">
                    <li className="mr-2 h-10 flex">
                        <Link to="/" className="header-nav-element p-2 pl-3 pr-3 rounded-md text-md font-normal">Домой</Link>
                    </li>
                    <li className="mr-2 h-10 flex">
                        <a href="#" className="header-nav-element p-2 pl-3 pr-3  rounded-md text-md font-normal flex">Подборки</a>
                    </li>
                    <li className="mr-2 h-10 flex">
                        <Link to="/bookmarks" className="header-nav-element p-2 pl-3 pr-3  rounded-md text-md font-normal flex">Закладки</Link>
                    </li>
                </ul>
                <div className="header-search w-1/3 h-1/2 flex rounded-lg pr-5 pl-5 justify-between mr-2">
                    <input className="outline-none bg-transparent text-white w-10/12" type="text" placeholder="Поиск" value={search} onChange={((e)=>setSearch(e.target.value))} onKeyDown={enterSearchHandler}/>
                    <img className='w-5 cursor-pointer' src={searchIcon} alt="search" onClick={filterPosts}/>
                </div>
            </header>
        </div>
    );
}
 
export default Header;