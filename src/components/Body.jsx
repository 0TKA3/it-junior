import { ReactEventHandler, useEffect, useState } from 'react';
import javascriptIcon from '../assets/icons/javascript.svg'
import axios from 'axios';
import userIcon from '../assets/icons/user.png'
import Article from '../pages/Article';
import {Link} from 'react-router-dom'



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
    function openArticleHandler(e) {
        localStorage.setItem('currentArticle', e.target.getAttribute('articleid'))
        let postToEdit
        axios
        .get(`http://localhost:3001/posts/${localStorage.getItem('currentArticle')}`)
        .then(function (data) {
            return postToEdit = data.data
          });
        setTimeout(()=>{
            postToEdit.information.views = postToEdit.information.views+1
            console.log(postToEdit.information.views)
            axios.put(`http://localhost:3001/posts/${e.target.getAttribute('articleid')}`, postToEdit)
        },50)
        
}

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
                    <div className="central-block-create-post w-full h-20 bg-slate-200 rounded-2xl flex p-5 gap-4">
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
                    <div className="central-block-posts mt-5 w-full" key={Math.random()}>
                        {posts.map((post)=>{
                            return(<div key={post.id}>
                                <div className="central-block-post h-52 w-full p-5 rounded-2xl">
                                    <img src={post.image}  alt={post.title} className="central-block-post-image w-full h-full rounded-2xl" />
                                    <div className="post-right-side flex flex-col justify-around">
                                        <Link to={'/article'} onClick={openArticleHandler}><h1 articleid={post.id}className='central-block-post-title text-white font-medium text-xl max-h-14 mb-1' >{post.title}</h1></Link>
                                        <div className="central-block-post-tags flex gap-3">
                                            {post.tags.map((tag)=>{
                                                return (
                                                    <div className="central-block-post-tag text-slate-400 p-1 pr-2 pl-2 rounded-3xl" key={tag}><p className='text-xs'></p>{tag}</div> 
                                                )
                                            })}
                                        </div>
                                        <div className="central-block-post-information flex gap-6">
                                            <p className='text-sm text-slate-300 '>{post.information.views} Просмотров</p>
                                            <p className='text-sm text-slate-300 '>{post.information.likes} Лайков</p>
                                            <p className='text-sm text-slate-300 '>{post.information.comments} Комментариев</p>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        })}
                        
                    </div>
                </div>
                <div className="block sticky rightbar"></div>
            </div>
        </>
    );
}
 
export default Body;