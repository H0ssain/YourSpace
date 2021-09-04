import React from 'react'
import ProjecttSummary from './ProjecttSummary'
import { Link } from 'react-router-dom'

const ProjecttList = ({projectts}) => {
  
  return (
    <div className="project-list section">
      { projectts && projectts.map(projectt => {
        return (
          <Link to={'/projectt/'+projectt.id} key={projectt.id} style={{textDecoration:"none"}}>
            <ProjecttSummary projectt={projectt} />
          </Link>
        )
      })}  
    </div>
  )
}

export default ProjecttList