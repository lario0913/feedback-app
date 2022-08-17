import PropTypes from 'prop-types'
import FeedbackItem from "./FeedbackItem"

function FeedbackList({feedback}) {
    if(!feedback || feedback.length === 0){
        return <p>No Feedback Yet</p>
    }
    return (
        <div className="feedback-list">
            {feedback.map((item) => (
                <FeedbackItem item={item} key={item.id} />
            ))}
        </div>
    )
}

FeedbackList.feedback ={
    feedback : PropTypes.array.isRequired
}

export default FeedbackList