import axios from 'axios'
import React from 'react'
import { TypeUserItem } from '../types'
import { Loader } from '../components/Loader'
import { UserList } from '../components/UserList'
import { Pagination } from '../components/Pagination'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { Link, Navigate, useLocation } from 'react-router-dom'

export const Home:React.FC = () => {  
  const auth = useTypedSelector((state) => state.auth.auth)
  const location = useLocation()

  if (!auth) {
    <Navigate to='/login' state={{from:location}}/>
  }

  const [users, setUsers] = React.useState<TypeUserItem[]>([])
  const [loaded, setLoaded] = React.useState<boolean>(true)
  const [value, setValue] = React.useState<string>('')

  const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage] = React.useState(5);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = users.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber:number) => setCurrentPage(pageNumber);

  const fetchUsers = async (limitPage:number) => {
    try {
      axios.get(`https://test.relabs.ru/api/users/list?limit=${limitPage}`).then((data) => {
        setUsers(data.data.items)
        setLoaded(false)
      })
    } catch (error) {
      console.log('Error:', error);
    }
  }

  const limit = 6

  React.useEffect(() => {
    fetchUsers(limit)
  }, [])

  const removeHandler = (id:number) => {
    setUsers(users.filter(item => item.id !== id))
  }

  const filteredSearch = currentPosts.filter(item => {
    return item.name.toLowerCase().includes(value.toLowerCase())
  })

  const searchHandler = (event:React.ChangeEvent<HTMLInputElement>):void => {
    setValue(event.target.value)
  }

  const [darkMode, setDarkMode] = React.useState(false)
   
  React.useEffect(() => {
    const body = document.body
    const toggle = document.querySelector('.form-theme-input')!
    if (toggle) {
      if(darkMode === true) {
        body.classList.add('dark-mode')
        toggle.classList.add('toggle-active')
      } else {
        body.classList.remove('dark-mode')
        toggle.classList.remove('toggle-active')
      }
    }
  }, [darkMode])

  return (
    <>
    
    {auth ? <div className='container'>
      <div className="form-check form-switch form-theme">
        <input 
          onClick={() => darkMode === false ? setDarkMode(true) : setDarkMode(false)} 
          className="form-check-input form-theme-input" 
          type="checkbox"/>
      </div>

      <input
        placeholder='Search...'
        className='mt-5 w-50 form-control' 
        onChange={searchHandler} 
        value={value} 
        type="text" 
      />
      <div>
        {loaded ? <Loader/> : (
          <>
            {filteredSearch.length ? (
              <UserList onRemoveItem={removeHandler} users={filteredSearch}/>
            ) : 
              <h3 className='mt-3'>Пользователей нет.</h3>
            }
          </>
        )}
        <div className="mb-3">
          <Pagination 
            totalPosts={users.length} 
            paginate={paginate} 
            postsPerPage={postsPerPage}
            currentButton={currentPage}
          />
        </div>
      </div>
    </div> : <h3 className='text-center mt-5'>Сначала нужно <Link to='/login'>Авторизаваться</Link></h3>}
    
    </>
  )
}
