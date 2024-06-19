import {useParams} from 'react-router-dom'

const CourseDetails = () => {
    const {detailsId} = useParams();

    return(
        <div className="transition-none"><h1>card details asdasd</h1>
             <h2>id {detailsId}</h2>
        </div>
    )
}

export default CourseDetails;