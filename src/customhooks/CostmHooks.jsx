import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const useCheckToken = () => {
  const [userData, setUserData] = useState(null)
  const [isVerified, setIsVerified] = useState(false)

  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem('Token')
      if (token) {
        try {
          const response = await axios.get(
            'http://localhost:1337/api/users/me',
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )

          setUserData(response.data)
          setIsVerified(true)
        } catch (err) {
          setIsVerified(false)
        }
      } else {
        console.log('he has no token')
      }
    }

    checkToken()
  }, [])

  return { userData, isVerified }
}

const useLogout = () => {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('Token')

    navigate('/logreg')
  }

  return { logout }
}

export default useLogout
