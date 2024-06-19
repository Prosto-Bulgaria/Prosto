import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import * as coursesService from '../../../services/coursesService'

const initialValue = {
    id: '',
    title: '',
    description: '',
    imageUrl:'',
}

const CourseDetails = () => {
    const {detailsId} = useParams();


    const [course,  setCourse] = useState(initialValue);

    useEffect(() => {
        coursesService.getById(detailsId)
        .then(result => {
              (result);
            setCourse(result);
        })
    }, [])

    return(
        <div className="transition-none">
            <h1 className="text-large font-bold text">{course.title}</h1>
        </div>
    )
}

export default CourseDetails;