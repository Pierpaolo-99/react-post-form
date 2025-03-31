import { useState } from "react"

export default function App() {

  const [formData, setFormData] = useState({
    author: '',
    title: '',
    body: '',
    public: false
  })

  const [errorMessage, setErrorMessage] = useState(null)

  function handleFormChange(e) {
    const type = e.target.type
    const key = type === 'checkbox' ? e.target.name : e.target.name
    const value = type === 'checkbox' ? e.target.checked : e.target.value

    setFormData({ ...formData, [key]: value })
  }

  function validateForm() {
    if (!formData.author.trim()) {
      return "Author is required."
    }
    if (!formData.title.trim()) {
      return "Title is required."
    }
    if (!formData.body.trim()) {
      return "Content of the post is required."
    }
    return null
  }

  function handleFormSubmit(e) {
    e.preventDefault()

    const validationError = validateForm()
    if (validationError) {
      setErrorMessage(validationError)
      setTimeout(() => setErrorMessage(null), 3000)
      return
    }

    console.log(formData);

    fetch('https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setErrorMessage(null)
      })
      .catch(err => {
        console.error(err);
        setErrorMessage("An error occurred while submitting the form.")
      })
  }

  return (
    <>
      <div className="container">
        <h1>Post Form</h1>

        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}

        <div className="row">

          <div className="col-md-8">

            <form method="POST" onSubmit={handleFormSubmit}>

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
                  placeholder="Insert the name Author"
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
                  placeholder="Insert the Title"
                />
                <small id="helpId" className="form-text text-muted">Type the title of the post</small>
              </div>

              <div className="mb-3">
                <label htmlFor="body" className="form-label">Content of the post</label>
                <textarea
                  className="form-control"
                  name="body"
                  value={formData.body}
                  onChange={handleFormChange}
                  id="body"
                  rows="3"
                ></textarea>
              </div>

              <div className="form-check mb-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="public"
                  checked={formData.public}
                  onChange={handleFormChange}
                  id="public"
                />
                <label className="form-check-label" htmlFor="public"> Make the post public </label>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
              >
                Send
              </button>

            </form>
          </div>

          <div className="col-md-4">

            <div className="card">
              <div className="card-header">{formData.author}</div>
              <div className="card-body">
                <h4 className="card-title">{formData.title}</h4>
                <p className="card-text">{formData.body}</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </>
  )
}
