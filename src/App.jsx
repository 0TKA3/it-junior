import { ReactEventHandler, useState } from 'react'
import Header from './components/Header'
import Body from './components/Body'
import './assets/style/style.css'
import noImage from './assets/images/noimage.jpg'


function App() {

  const [search, setSearch] = useState('')
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

  function filterPosts() {
    setPosts(postsBase.filter((post)=>{
      if(post.title.toLowerCase().includes(search.toLowerCase())){
        return true
      } else {
        return false
      }
    }))
  }

  return (
    <>
      <div className="cont max-w-screen-xl mr-auto ml-auto">
        <Header search={search} setSearch={setSearch} filterPosts={filterPosts}></Header>
        <Body search={search} posts={posts} setPosts={setPosts}></Body>
      </div>
    </>
  )
}

export default App