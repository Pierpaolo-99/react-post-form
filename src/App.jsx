import { useState } from "react"

export default function App() {

  const [formData, setFormData] = useState({
    author: '',
    title: '',
    body: '',
    public: ''
  })

  function handleFormChange(e) {

    const key = e.target.name
    const value = e.target.value

    setFormData({ ...formData, [key]: value })
  }

  return (
    <>
      <div className="container">
        <h1>Post Form</h1>

        <div className="row">

          <div className="col-md-8">

            <form method="POST">

              <div className="mb-3">
                <label htmlFor="author" className="form-label">Author</label>
                <input
                  type="text"
                  className="form-control"
                  name="author"
                  value={formData.author}
                  onChange={handleFormChange}
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
                  value={formData.title}
                  onChange={handleFormChange}
                  id="title"
                  aria-describedby="helpId"
                  placeholder="insert the Title"
                />
                <small id="helpId" className="form-text text-muted">Type the title of the post</small>
              </div>

              <div className="mb-3">
                <label htmlFor="body" className="form-label">Content of the post</label>
                <textarea className="form-control" name="body" value={formData.body} onChange={handleFormChange} id="body" rows="3"></textarea>
              </div>

              <div className="form-check">
                <input className="form-check-input" type="checkbox" name="public" value={formData.public} onChange={handleFormChange} id="public" />
                <label className="form-check-label" htmlFor=""> Make the post public </label>
              </div>

            </form>
          </div>

          <div className="col-md-4">

            <div class="card">
              <div className="card-header">{formData.author}</div>
              <div class="card-body">
                <h4 class="card-title">{formData.title}</h4>
                <p class="card-text">{formData.body}</p>
              </div>

            </div>

          </div>

        </div>


      </div>
    </>
  )
}
