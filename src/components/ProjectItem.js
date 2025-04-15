import React from 'react';
import { Link } from 'react-router-dom';

function ProjectItem({ id, name, image }) {
    return (
        <div className="projectItem">
            <div 
                className="bgImage" 
                style={{ 
                backgroundImage: `url(${process.env.PUBLIC_URL + image})` 
                }} 
            />
        </div>
    );
}

export default ProjectItem;