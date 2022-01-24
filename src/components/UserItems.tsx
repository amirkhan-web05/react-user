import React from 'react'
import { TypeUserItem } from '../types'

interface IRemoveUser extends TypeUserItem {
  onRemove: (id:number) => void;
}

export const UserItems:React.FC<IRemoveUser> = ({id, name, role, ctime, onRemove}) => {
  return (
    <>
      <th scope="row">{id}</th>
      <td>{name}</td>
      <td>{role}</td>
      <td>{new Date(ctime * 1000).toLocaleDateString()} &nbsp;{new Date(ctime * 1000).getHours()}:{new Date(ctime * 1000).getMinutes()}</td>
      <td>
        <button onClick={() => onRemove(id)} className='btn btn-danger'>Удалить</button>
      </td>
    </>
  )
}
