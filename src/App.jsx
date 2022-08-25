// import { useState, useEffect } from 'react'
// import axios from 'axios'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Home from './pages/Home'
import Posts from './pages/Posts'
import { Layout } from './components/Layout/Layout'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  // const [posts, setPosts] = useState([])

  // const getPosts = async () => {
  //   const response = await axios.get('https://jsonplaceholder.typicode.com/posts').catch(err => console.error(err.message))
  //   setPosts(response?.data)
  // }

  // useEffect(() => {
  //   getPosts()
  // }, [])
  return (
    // <div>
    //   <h1 className='text-3xl font-bold bg-slate-600 underline hover:text-cyan-400 hover:bg-slate-400'> hello world</h1>

    //   {posts?.map(post => (
    //     <p key={post.id} className='text-fuchsia-200'>
    //       {post.body}
    //     </p>
    //   ))}
    // </div>

    <Layout>
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pages/posts' element={<Posts />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </Layout>
  )
}

export default App
