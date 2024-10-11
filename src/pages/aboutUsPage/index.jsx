import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import NavBar from '../../components/NavBar'
import './index.scss'

export default function AboutUs() {
  const branches = [
    {
      name: 'Branch 1',
      number: '001',
      address: '123 Main St, City A, Country',
      mapSrc:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0493705479326!2d144.95373531581686!3d-37.81627997975166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f70c73b%3A0x503f9b54cd12ed7e!2s1%20Collins%20St%2C%20Melbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1631819721870!5m2!1sen!2sus',
    },
    {
      name: 'Branch 2',
      number: '002',
      address: '456 Elm St, City B, Country',
      mapSrc:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0493705479326!2d144.95373531581686!3d-37.81627997975166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f70c73b%3A0x503f9b54cd12ed7e!2s1%20Collins%20St%2C%20Melbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1631819721870!5m2!1sen!2sus',
    },
    {
      name: 'Branch 3',
      number: '003',
      address: '789 Oak St, City C, Country',
      mapSrc:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0493705479326!2d144.95373531581686!3d-37.81627997975166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f70c73b%3A0x503f9b54cd12ed7e!2s1%20Collins%20St%2C%20Melbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1631819721870!5m2!1sen!2sus',
    },
    {
      name: 'Branch 4',
      number: '004',
      address: '321 Pine St, City D, Country',
      mapSrc:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0493705479326!2d144.95373531581686!3d-37.81627997975166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f70c73b%3A0x503f9b54cd12ed7e!2s1%20Collins%20St%2C%20Melbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1631819721870!5m2!1sen!2sus',
    },
  ]

  return (
    <div>
      <Header />
      <NavBar />
      <div className="container about-us">
        <h1 className="text-center my-4">About Us</h1>

        <div className="row mb-4">
          <div className="col-md-12">
            <h2 className="text-center">Our Story</h2>
            <p className="text-center">
              We are a dedicated team passionate about providing the best
              services to our customers. Our journey began with a vision to
              create an environment where quality meets customer satisfaction.
            </p>
          </div>
        </div>

        <h2 className="text-center my-4">Our Branches</h2>
        {branches.map((branch, index) => (
          <div className="row mb-4" key={index}>
            <div className="col-md-6 mb-3">
              <div className="branch-card p-3">
                <h3>
                  {branch.name} (Branch Number: {branch.number})
                </h3>
                <p>{branch.address}</p>
              </div>
            </div>
            <div className="col-md-6">
              <iframe
                src={branch.mapSrc}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  )
}
