import noImage from '../assets/images/noimage.jpg'
import { ReactEventHandler, useEffect, useState } from 'react';


const Body = () => {

    function searchPost(e:ReactEventHandler) {

    }



    const [postsBase, setPostBase] = useState([
        {   
            id:Math.random(),
            title: 'Как быстро изучить JavaScript?',
            tags: ['JavaScript','ES6'],
            image: noImage,
            content: '',
            information: {
                views: 10000,
                likes: 332,
                comments: 29,
            }
        },
        {
            id:Math.random(),
            title: 'Основы React',
            tags: ['React','Redux'],
            image: noImage,
            content: '',
            information: {
                views: 3423,
                likes: 54,
                comments: 9,
            }
        },])

    const [posts,setPosts] = useState([...postsBase])

    return (
        <>
            <div className="main-body parent mt-5">
                <div className="block sticky sidebar"></div>
                <div className="block central-block">
                    <div className="central-block-create-post w-full h-20 bg-slate-200 rounded-2xl flex p-5 gap-4">
                        <div className="nav-profile-picture w-10 h-10 rounded-md bg-cyan-300 flex items-center justify-center mr-3">
                            <a href="#">P</a>
                        </div>
                        <div className="central-block-create-post w-4/6">
                            <input className="central-block-create-post-input w-full h-11 rounded-md p-3 outline-none" type="text" placeholder="О чем пишем?"/>
                        </div>
                        <div className="central-block-create-post-button">
                            <button className="h-11 bg-white p-0 rounded-lg pl-3 pr-3 font-medium">Создать пост</button>
                        </div>
                    </div>
                    <div className="central-block-posts mt-5 w-full">
                        {posts.map((post)=>{
                            return(<>
                                <div className="central-block-post h-52 w-full p-5 rounded-2xl" key={post.id}>
                                    <img src={post.image}  alt={post.title} className="central-block-post-image w-full h-full rounded-2xl" />
                                    <div className="post-right-side flex flex-col justify-around">
                                        <h1 className='central-block-post-title text-white font-medium text-xl max-h-14 mb-1'>{post.title}</h1>
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
                            </>)
                        })}

                    </div>
                </div>
                <div className="block sticky rightbar"></div>
            </div>
        </>
    );
}
 
export default Body;