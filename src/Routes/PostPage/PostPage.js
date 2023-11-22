
import React, { useEffect, useState } from 'react';
import './PostPage.css';
import { faPerson , faBuildingColumns, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link, useNavigate} from 'react-router-dom';

        
function PostPage() {
    const [title, setTitle] = useState('')
    const [institution, setInstitution] = useState('')
    const [comments, setComments] = useState('')
    const [improvements, setImprovements] = useState('')
    const [culture, setCulture] = useState(50)
    const [resource, setResource] = useState(50)
    
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Submitted")
        const newPost = {
            title: title,
            institution: institution,
            comments: comments,
            improvements: improvements,
            culture: culture,
            resource: resource


        }
        alert(JSON.stringify(newPost))
        

    }

    return (
        <div class="page-container">
                <div class="center-container">
                    <form class="form" onSubmit={handleSubmit}>
                        <label for="Title">Post Title:</label>
                        <input type="text" id="Title"  value={title} 
                        onChange={(event) =>
                            setTitle(event.target.value)}/><br/>

                        <label for="institution">Institution Name:</label>
                        <input type="text" id="institution"  value={institution}
                        onChange={(event) =>
                            setInstitution(event.target.value)} /><br/>

                        <label for="comments">Comments about Institution Mental Health Culture:</label>
                        <input type="text" id="comments"  value={comments}
                        onChange={(event) =>
                            setComments(event.target.value)}/><br/>

                        <label for="comments">Comments about Ideas for Improvement </label>
                        <input type="text" id="Improvement" value={improvements}
                        onChange={(event) =>
                            setImprovements(event.target.value)}/><br/>

                        <label for="culture-rating">Rating of Institution Mental Health Culture</label>
                        <div class="slidecontainer">
                            <input type="range" min="1" max="100" class="slider" id="culture-rating" value={culture}
                            onChange={(event) =>
                                setCulture(event.target.value)}/>
                            <div class="slide-value">
                                {culture}
                            </div>
                        </div> <br></br>

                        <label for="resources-rating">Rating of Institution Mental Health Resources</label>
                        <div class="slidecontainer">
                            <input type="range" min="1" max="100" value={resource} class="slider" id="resources-rating"
                            onChange={(event) =>
                                setResource(event.target.value)} />
                            <div class="slide-value">
                                {resource}
                            </div>
                        </div> <br/>
                        <input type='submit' value='Post'/>
                    </form>
                </div>
            </div>
    );
    }

    export default PostPage;