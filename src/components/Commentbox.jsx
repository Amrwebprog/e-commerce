import { collection, onSnapshot, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../FireBaseDb.jsx'

export default function Commentbox() {
  const [comment, setComment] = useState([])
  const getComments = () => {
    const q = query(collection(db, 'Comments'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const comments = []
      querySnapshot.forEach((doc) => {
        comments.push(doc.data())
      })
      setComment(comments)
    })
    return unsubscribe
  }
  useEffect(() => {
    getComments()
    console.log(comment)
  }, [])
  return (
    <div className="card col-12 comment-box p-3">
      <div className="card p-2 d-flex  gap-2">
        <textarea
          className="form-control comment-textarea"
          placeholder="اكتب تعليقك هنا"
        ></textarea>
        <button className="btn btn-primary col-1"> نشر</button>
      </div>
      <div className="card col-12 d-flex flex-row-reverse p-3">
        <div className="d-flex flex-column">
          <a href="#" className="text-decoration-none ">
            Amr Samy
          </a>
          <h1>تعليقي</h1>
        </div>
      </div>
    </div>
  )
}
