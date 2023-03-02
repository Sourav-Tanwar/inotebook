import React, {useContext, useEffect} from 'react'
import noteContext from '../context/notes/noteContext'

export const About = () => {
  const a = useContext(noteContext)
  useEffect(() => {
    return () => {
      a.update();
      
    }
    // eslint-disable-next-line
  }, [])
  
  return (
    <div>This is About {a.state.name} and he is on {a.state.class}</div>
  )
}
export default About