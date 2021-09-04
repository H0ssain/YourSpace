import React from 'react'
import ProjectttSummary from './ProjectttSummary'
import { Link } from 'react-router-dom'

const ProjectttList = ({projecttts}) => {
  
  return (
    <div className="project-list section">
      { projecttts && projecttts.map(projecttt => {
        return (
          <Link to={'/projecttt/'+projecttt.id} key={projecttt.id} style={{textDecoration:"none"}}>
            <ProjectttSummary projecttt={projecttt} />
          </Link>
        )
      })}  
    </div>
  )
}

export default ProjectttList