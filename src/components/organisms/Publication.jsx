import React from 'react'

const Publication = ({title, author, time, content}) => {
  return (
    <article className="publication l-block">
      <div className="publication__container">
        <h2 className="publication__tile t3">
          {title}
        </h2>
        <span>
          <b>
            {author}
          </b> {time}
        </span>
        <div className="publication__content">
          <p>{content}</p>
        </div>
      </div>
    </article>
  )
}

export default Publication
