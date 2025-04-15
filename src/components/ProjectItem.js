import React from 'react';
import { Link } from 'react-router-dom';

function ProjectItem({ id, name, image }) {
    return (
        <div className="projectItem">
            <Link to={`/project/${id}`}>
                <div 
                  style={{ 
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/${image})` 
                  }} 
                  className="bgImage" 
                />
                <h1>{name}</h1>
            </Link>
        </div>
    );
}

export default ProjectItem;