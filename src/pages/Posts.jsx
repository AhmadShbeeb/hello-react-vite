import axios from 'axios'
import { useEffect, useState } from 'react'

const Posts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // debugger
    // let subscribed = true
    const source = axios.CancelToken.source()
    const getPosts = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts', { cancelToken: source.token }).catch(err => console.error(err.message))
      if (response) setPosts(response.data)
    }

    getPosts()

    // on 2nd render OR when component unmount
    return () => {
      source.cancel()
      // subscribed = false
    }
  }, [])

  console.count('posts rendered')
  return (
    <div>
      <h1 className='text-3xl font-bold bg-slate-600 underline hover:text-cyan-400 hover:bg-slate-400'> hello world</h1>

      {posts?.map(post => (
        <p key={post.id} className='text-fuchsia-200'>
          {post.body}
        </p>
      ))}
    </div>
  )
}
export default Posts
