import React, { useState } from 'react'

export default function Clicker () {
  let [num, setNum] = useState(0)
  let reset = () => {
    setNum(0)
  }
  let add = () => {
    setNum(num + 1)
  }
  let minus = () => {
    if (num !== 0) {
      setNum(num - 1)
    }
  }
  return (
    <div className='container d-flex align-items-center justify-content-center clicker'>
      <div className='border '>
        <div className='text-center num'>{num}</div>
        <div className='btn-group ' role='group' aria-label='Second group'>
          <button type='button' className='btn btn-success' onClick={add}>
            <i className='fa fa-plus icon' aria-hidden='true'></i>
          </button>
          <button type='button' className='btn btn-warning' onClick={reset}>
            <i className='fa fa-refresh icon' aria-hidden='true'></i>
          </button>
          <button type='button' className='btn btn-danger' onClick={minus}>
            <i className='fa fa-minus icon' aria-hidden='true'></i>
          </button>
        </div>
      </div>
    </div>
  )
}
