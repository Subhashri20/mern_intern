import { useContext } from 'react'
import { StudentContext } from '@/StudentContext'

const Greeting = () => {
  const studentName = useContext(StudentContext)

  return <div>Greetings {studentName}</div>
}

export default Greeting