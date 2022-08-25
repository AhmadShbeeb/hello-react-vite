import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const Home = () => {
  useEffect(() => {
    // debugger
  }, [])

  const clickHandler = e => toast.info(e)

  return (
    <div className='flex flex-col'>
      <Link to='/pages/posts' className='underline font-bold text-2xl hover:text-cyan-500'>
        get posts
      </Link>
      <button type='button' className='bg-teal-400 rounded-full p-2' onClick={() => clickHandler('123')}>
        alert
      </button>
    </div>
  )
}
export default Home
