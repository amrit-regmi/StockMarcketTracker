import React from 'react'
import { FC } from 'react'
import { useStore } from '../../Store/StoreProvider'
import ErrorMessage from './ErrorMessage'


const Error:FC = () => {
  const [{ errors, }] = useStore()

  return(
    <div className='errorContainer' >
      {errors && Object.keys(errors).map(key =>
        <ErrorMessage key={key} message={errors[key] as string} id={key}/>
      )}
    </div>
  )
}

export default Error