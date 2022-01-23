import React from 'react'

export const Loader:React.FC = () => {
  return (
    <div>
      <div className="spinner-border mt-5" role="status">
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>
  )
}
