import Count from '@/hooks/Count'
import Parent from '@/components/Parent'
import { StudentContext } from '@/StudentContext'

const About = () => {
  return (
    <div>
      <StudentContext.Provider value="Subha">
        <Parent />
      </StudentContext.Provider>
      <Count />
    </div>
  )
}

export default About