import { ReactEventHandler, useEffect, useState } from 'react';
import javascriptIcon from '../assets/icons/javascript.svg'
import axios from 'axios';
import Article from '../pages/Article';
import userIcon from '../assets/icons/user.png'
import {Link} from 'react-router-dom'
import Post from './Post';



const Body = ({search,posts,setPosts,setModalVisibility,postsList,setPostsList}) => {




    function searchTag(event) {
        const target = event.currentTarget
        const tagName = target.innerHTML.slice(1)
        console.log(postsList)
        setPosts(postsList.filter((post)=>{
            if(post.title.toLowerCase().includes(tagName.toLowerCase())){
                return true
            }
        }))

    }


    const [popularTags, setPopularTags] = useState([])
    useEffect(()=>{
        axios
        .get('http://localhost:3001/popular-tags')
        .then(data => {
            setPopularTags(data.data)
          })
    },[])

    return (
        <>
            <div className="main-body parent mt-5">
                <div className="sticky sidebar">
                    <div className="sidebar-popular-tags w-full h-auto rounded-2xl p-4 flex flex-col">
                        <h1 className='text-xl font-medium text-white mb-4'>Popular Tags</h1>

                        {popularTags.map((popTag)=>{
                            return(
                                <div className='tag flex h-11 mb-4 items-center' key={popTag.tagName}>
                                    <div className="pop-tag-image h-11 w-11 rounded-md p-2 bg-slate-700 mr-3 flex items-center justify-center"><img className='h-4/5' src={popTag.tagImage} alt="#" /></div>
                                    <div className="pop-tag-info flex flex-col">
                                        <h3 className='text-white text-lg font-medium cursor-pointer' onClick={searchTag}>#{popTag.tagName}</h3>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="block central-block">
                    <div className="central-block-create-post w-full h-20 bg-slate-200 rounded-2xl flex p-5 gap-4 mb-3">
                        <div className="nav-profile-picture w-10 h-10 rounded-md flex items-center justify-center mr-3">
                            <img className='h-5/6' src={userIcon} alt="" />
                        </div>
                        <div className="central-block-create-post w-4/6">
                            <input className="central-block-create-post-input w-full h-11 rounded-md p-3 outline-none" type="text" placeholder="О чем пишем?"/>
                        </div>
                        <div className="central-block-create-post-button">
                            <button className="create-post-button h-11 bg-slate-200 p-0 rounded-lg pl-3 pr-3 font-medium" onClick={()=>{setModalVisibility('modal')}}>Создать пост</button>
                        </div>
                    </div>
                    <div className="central-block-posts w-full" key={Math.random()}>
                    {posts.map((post)=>{
                        return(
                            <Post post={post} key={post.id}></Post>
                        )
                    })}
                    </div>
                </div>
                <div className="block sticky rightbar"></div>
            </div>
        </>
    );
}
 
export default Body;