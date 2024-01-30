import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function ImageGallerly () {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)
  let baseURL = 'https://picsum.photos/v2/list'
  useEffect(() => {
    setLoading(true)
    axios
      .get(baseURL)
      .then(response => {
        setImages(response.data)
        setLoading(false)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
        setLoading(false)
      })
  }, [])

  return (
    <>
      <div className='bg-dark p-3 mb-4'>
        <h1 className='text-light text-center h-1 font-weight-bold mb-4'>
          Image Gallerly
        </h1>
      </div>
      {loading ? (
             <div className='container  d-flex justify-content-center align-items-center'>

                 <p className='text-center'>loading...</p>

             </div>
      ) : (
        <div className='container  d-flex justify-content-center align-items-center'>
          <div className='row'>
            {images.length !== 0 &&
              images.map(image => (
                <div key={image.id} className='col-lg-4 col-md-12 mb-4 mb-lg-0'>
                  <img
                    src={image?.download_url}
                    className='w-100 shadow-1-strong rounded mb-4'
                    alt={image?.author}
                  />
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  )
}
