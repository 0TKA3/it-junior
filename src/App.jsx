import { ReactEventHandler, useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import Body from './components/Body'
import './assets/style/style.css'
import CreatePostModal from './components/CreatePostModal'


function App() {

  const [modalVisibility,setModalVisibility] = useState('modal none')
  const [search, setSearch] = useState('')
  const [posts,setPosts] = useState([])
  const [postsList, setPostsList] = useState([])
  
  useEffect(()=>{
    axios
    .get('http://localhost:3001/posts')
    .then(data => {
        setPostsList(data.data)
    })
},[])

  useEffect(()=>{
    axios
    .get('http://localhost:3001/posts')
    .then(data => {
      setPosts(data.data)
    })
  },[])


  

  function filterPosts() {
    setPosts(postsList.filter((post)=>{
      if(post.title.toLowerCase().includes(search.toLowerCase())){
        return true
      }
      if(post.tags.map((el)=>el.toLowerCase()).includes(search.toLowerCase())) {
        return true
      }
       else {
        return false
      }
    }))
  }

  return (
    <>
      <div className="cont max-w-screen-xl mr-auto ml-auto">
        <Header search={search} setSearch={setSearch} filterPosts={filterPosts}></Header>
        <Body search={search} posts={posts} setPosts={setPosts} setModalVisibility={setModalVisibility} postsList={postsList} setPostsList={setPostsList}></Body>
        <CreatePostModal modalVisibility={modalVisibility} setModalVisibility={setModalVisibility}></CreatePostModal>
      </div>
    </>
  )
}

export default App