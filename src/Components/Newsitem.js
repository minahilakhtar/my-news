import { getByTitle } from '@testing-library/react'
import React from 'react'

const Newsitem =(props)=> {
    let {title, discription, imageUrl , newsUrl, author, date, source}= props;
    return (
      <div className='my-3'>
        <div className="card" >
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"90%", zindex:"!"}}>
           {source}
         </span>
          <img src={!imageUrl?"https://static.reuters.com/resources/r/?d=20220907&i=OV343307092022RP1&r=OV343307092022RP1&t=2":imageUrl}
           className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{discription}...</p>
            <p className="card-text"><small className="text-muted">by {!author? "uknown person": author}
             on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
}

export default Newsitem