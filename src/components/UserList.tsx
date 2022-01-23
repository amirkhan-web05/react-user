import React from 'react'
import { TypeUserItem } from '../types'
import { UserItems } from './UserItems'
import useWebSocket from 'react-use-websocket';

type TypeUserItemsArray = {
  users:TypeUserItem[],
  onRemoveItem: (id: number) => void
}

export const UserList:React.FC<TypeUserItemsArray> = ({users, onRemoveItem}) => {
  const [toggle, setToggle] = React.useState<number>(0)
  const listUser:string[] = ['Список Пользователей', 'События']
  const [socketUrl] = React.useState<string>('wss://test.relabs.ru/event');

  type Data = {event:string, ctime:number}

  const {lastMessage} = useWebSocket(socketUrl);  

  const [arr, setArr] = React.useState<Data[]>([]); 

  React.useEffect(() => {
    const messagesEvent = lastMessage?.data ? JSON.parse(lastMessage?.data) : []
    setArr(prev => [...prev, messagesEvent])
  }, [lastMessage])

  const changeHandler = (index:number) => {
    setToggle(index)
  }

  return (
    <div>
      <div className='d-flex align-items-center'>
        {listUser.map((list, index) => (
          <h3 key={list} onClick={() => changeHandler(index)} className={index === toggle ? `mt-3 list__item` : 'mt-3 list'}>{list}</h3>
        ))}
      </div>
      <table className={toggle === 0 ? `table table_list mt-3` : 'table_user'}>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Имя</th>
            <th scope="col">Роль</th>
            <th scope="col">Дата создания</th>
            <th scope="col">Действия</th>
          </tr>
        </thead>
        {users.map(item => (
          <tbody key={item.id} className='tbody'>
            <tr>
              <UserItems onRemove={onRemoveItem} {...item} />
            </tr>
          </tbody>
        ))}
      </table>
      <table className={toggle === 1 ? `table table_list mt-3` : 'table_user'}>
        <thead>
          <tr>
            <th scope="col">Дата</th>
            <th scope="col">События</th>
          </tr>
        </thead>
          <tbody className='tbody'>
            {arr.map((item, index) => (
              <tr key={index}>
                {item.event ? (
                  <>
                    <td>{new Date(item.ctime).toLocaleDateString()} &nbsp;{new Date(item.ctime).getUTCHours()} : {new Date(item.ctime).getMinutes()}</td>
                    <td>{item.event}</td>
                  </>
                ) : (
                  <></>
                )}
              </tr>
            ))}             
          </tbody>
      </table>
    </div>
  )
}
