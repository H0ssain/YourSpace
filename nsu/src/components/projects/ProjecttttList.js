import React from 'react'
import ProjecttttSummary from './ProjecttttSummary'
import { Link } from 'react-router-dom'

const ProjecttttList = ({projectttts}) => {
  
  return (
    <div className="project-list section">
      { projectttts && projectttts.map(projectttt => {
        return (
          <Link to={'/projectttt/'+projectttt.id} key={projectttt.id} style={{textDecoration:"none"}}>
            <ProjecttttSummary projectttt={projectttt} />
          </Link>
        )
      })}  
    </div>
  )
}

export default ProjecttttList