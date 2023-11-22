import { ReactEventHandler, useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import Body from './components/Body'
import './assets/style/style.css'
import CreatePostModal from './components/CreatePostModal'
import Article from './pages/Article'
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';
import Bookmarks from './pages/Bookmarks'


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
    <Router>
      <div className="cont max-w-screen-xl mr-auto ml-auto">
        <Header search={search} setSearch={setSearch} filterPosts={filterPosts}></Header>
        <Routes>
          <Route path='/' element={<Body search={search} posts={posts} setPosts={setPosts} setModalVisibility={setModalVisibility} postsList={postsList} setPostsList={setPostsList}></Body>}></Route>
          <Route path='/article/:id' element={<Article posts={posts} />} />
          <Route path='/bookmarks' element={<Bookmarks posts={posts} setPosts={setPosts}></Bookmarks>}></Route>
        </Routes>
      </div>
      <CreatePostModal modalVisibility={modalVisibility} setModalVisibility={setModalVisibility}></CreatePostModal>
    </Router>
  )
}

export default App