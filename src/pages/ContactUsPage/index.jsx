import axios from 'axios'
import React, { useRef } from 'react'
import Swal from 'sweetalert2'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import NavBar from '../../components/NavBar'
import './index.scss'

export default function ContactusPage() {
  const userName = useRef()
  const userNumber = useRef()
  const useremail = useRef()
  const userMessege = useRef()

  const InserMessege = (event) => {
    event.preventDefault()
    const Name = userName.current.value.trim()
    const Number = userNumber.current.value.trim()
    const email = useremail.current.value.trim()
    const messege = userMessege.current.value.trim()

    if (
      !Name ||
      !Number ||
      !email ||
      !messege ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      Swal.fire({
        icon: 'error',
        title: 'خطأ',
        text: 'يرجى ملء جميع الحقول بشكل صحيح، بما في ذلك البريد الإلكتروني.',
      })
    } else {
      const data = {
        username: Name,
        Email: email,
        Message: messege,
        phone_number: Number,
      }

      axios
        .post('http://localhost:1337/api/messages', { data })
        .then((res) => {
          Swal.fire({
            icon: 'success',
            title: 'Done',
            text: 'تم ارسال البينات ',
          })
        })
        .catch((er) => {
          Swal.fire({
            icon: 'error',
            title: 'خطأ',
            text: 'شئ ما غير متوقع حدث',
          })
        })
    }
  }

  return (
    <>
      <Header />
      <NavBar />
      <div className="container contact-us">
        <h1 className="text-center my-4">Contact Us</h1>

        <div className="row">
          <div className="col-md-6 mb-4">
            <h2>Get in Touch</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  ref={userName}
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  ref={useremail}
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  phone number
                </label>
                <input
                  ref={userNumber}
                  type="text"
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Your number"
                  required
                ></input>
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  ref={userMessege}
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>

              <button
                onClick={InserMessege}
                type="submit"
                className="btn btn-primary"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="col-md-6 mb-4">
            <h2>Contact Information</h2>
            <p>If you have any questions, feel free to reach out to us!</p>
            <ul className="list-unstyled">
              <li>
                <strong>Email:</strong> contact@example.com
              </li>
              <li>
                <strong>Phone:</strong> +1234567890
              </li>
              <li>
                <strong>Address:</strong> 123 Street Name, City, Country
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
