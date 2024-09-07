import { useContext } from 'react'
import Footer from '../../components/Footer'
import Login from '../../components/login'
import { LoginContext } from '../../components/loginContext'
import NavBar from '../../components/NavBar'
import Signup from '../../components/signup'
import './index.scss'
export default function LoginAndRegisterPage() {
  /*  let usersData = [
    {
      user_id: '0',
      user_name: 'amr samy',
      user_email: 'amr792134@gmail.com',
      user_password: 'Amr123456789@',
      user_phone: '01276267087',
      user_level: '1',
    },
    {
      user_id: '1',
      user_name: 'Evelyn Thompson',
      user_email: 'rileycummings@mcintosh.com',
      user_phone: '01276267087',
      user_password: 'Ff)7JzG1$r(c',
      user_level: '3',
    },
    {
      user_id: '2',
      user_name: 'Natalie Gonzalez',
      user_email: 'vfriedman@hotmail.com',
      user_phone: '01276267087',
      user_password: 'O)48cSz7mjDE',
      user_level: '3',
    },
    {
      user_id: '3',
      user_name: 'Lisa Mccullough',
      user_email: 'lauralucero@yahoo.com',
      user_phone: '01276267087',
      user_password: 'F50y@GoL@@DE',
      user_level: '1',
    },
    {
      user_id: '4',
      user_name: 'Jesse Mcdonald',
      user_email: 'james02@gmail.com',
      user_phone: '01276267087',
      user_password: 'qI2#Dg+oC!PA',
      user_level: '3',
    },
    {
      user_id: '5',
      user_name: 'Maria Rich',
      user_email: 'davisnatalie@hotmail.com',
      user_phone: '01276267087',
      user_password: ')6M%a+IuuLPQ',
      user_level: '1',
    },
    {
      user_id: '6',
      user_name: 'Elaine Church',
      user_email: 'esosa@gmail.com',
      user_phone: '01276267087',
      user_password: 'u$)7G9qzNONv',
      user_level: '2',
    },
    {
      user_id: '7',
      user_name: 'Jillian Murray',
      user_email: 'stephen36@yahoo.com',
      user_phone: '01276267087',
      user_password: 's1LzKkh8(kjG',
      user_level: '2',
    },
    {
      user_id: '8',
      user_name: 'Henry Costa',
      user_email: 'taylorsharon@porter.net',
      user_phone: '01276267087',
      user_password: '_HfNYE3wCC_1',
      user_level: '3',
    },
    {
      user_id: '9',
      user_name: 'Adam Combs',
      user_email: 'romanjoseph@dixon.com',
      user_phone: '01276267087',
      user_password: 'v5NHK6+k&15^',
      user_level: '3',
    },
    {
      user_id: '10',
      user_name: 'Erika Young',
      user_email: 'valerie37@tanner-meyer.net',
      user_phone: '01276267087',
      user_password: '@5TIc6i_FVm3',
      user_level: '2',
    },
  ] */

  const { hasAccount, setHasAccount } = useContext(LoginContext)
  return (
    <>
      <NavBar />
      <div className="col-12 h-100 d-flex justify-content-center align-items-center bg-body">
        {hasAccount ? <Login /> : <Signup />}
      </div>
      <Footer />
    </>
  )
}
