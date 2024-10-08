import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../FireBaseDb.jsx'

export default function Commentbox({ MyProduct }) {
  const [comment, setComment] = useState([])

  // دالة لجلب التعليقات من Firebase
  const getComments = async (productId) => {
    const productIdString = String(productId) // تحويل product_id إلى نص
    console.log(`جلب التعليقات لمنتج product_id: ${productIdString}`)

    const q = query(
      collection(db, 'Comments'),
      where('product_id', '==', productIdString) // مطابقة النص مع النص
    )

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const myComments = []
      querySnapshot.forEach((doc) => {
        console.log('بيانات التعليق من Firebase:', doc.data()) // طباعة كل تعليق يتم جلبه
        myComments.push(doc.data())
      })

      setComment(myComments)
      console.log('جميع التعليقات بعد الجلب:', myComments) // طباعة التعليقات بعد جلبها
    })

    return () => unsubscribe()
  }

  useEffect(() => {
    if (
      MyProduct &&
      MyProduct.length > 0 &&
      MyProduct[0].product_id !== undefined
    ) {
      getComments(MyProduct[0].product_id)
    } else {
      null
    }
  }, [MyProduct])

  return (
    <div className="card col-12 comment-box p-3">
      <div className="card p-2 d-flex gap-2">
        <textarea
          id="MyComment"
          className="form-control comment-textarea"
          placeholder="اكتب تعليقك هنا"
        ></textarea>
        <button className="btn btn-primary col-1">نشر</button>
      </div>
      <div className="card col-12 d-flex flex-row-reverse p-3">
        {comment && comment.length > 0 ? (
          comment.map((com, index) => (
            <div key={index} className="d-flex flex-column">
              <a href="#" className="text-decoration-none">
                {com.username || 'اسم المستخدم'}
              </a>
              <p>{com.comment || 'التعليق'}</p>
            </div>
          ))
        ) : (
          <p>لا توجد تعليقات بعد.</p>
        )}
      </div>
    </div>
  )
}
