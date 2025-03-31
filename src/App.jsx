import { useState } from "react"

export default function App() {


  return (
    <>
      <div className="container">
        <h1>Post Form</h1>

        <form method="POST">

          <div className="mb-3">
            <label htmlFor="author" className="form-label">Author</label>
            <input
              type="text"
              className="form-control"
              name="author"
              id="author"
              aria-describedby="helpId"
              placeholder="insert the name Author"
            />
            <small id="helpId" className="form-text text-muted">Type the name Author</small>
          </div>

          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              id="title"
              aria-describedby="helpId"
              placeholder="insert the Title"
            />
            <small id="helpId" className="form-text text-muted">Type the title of the post</small>
          </div>

          <div className="mb-3">
            <label htmlFor="" className="form-label">Content of the post</label>
            <textarea className="form-control" name="body" id="body" rows="3"></textarea>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="" />
            <label className="form-check-label" htmlFor=""> Make the post public </label>
          </div>

        </form>
      </div>
    </>
  )
}
