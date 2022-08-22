import {motion, AnimatePresence} from 'framer-motion'
import PropTypes from 'prop-types'
import FeedbackItem from "./FeedbackItem"

function FeedbackList({feedback, handleDelete}) {
    if(!feedback || feedback.length === 0){
        return <p>No Feedback Yet</p>
    }
    return (
        <div className="feedback-list">
                <AnimatePresence>
                {feedback.map((item) => (
                    <motion.div 
                      key={item.id}
                      initial={{opacity:0}}
                      animate={{opacity:1}}
                      exit={{opacity:0}}
                      >
                        <FeedbackItem 
                            item={item} 
                            key={item.id}
                            handleDelete={handleDelete} 
                        
                        />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )
}

FeedbackList.feedback ={
    feedback : PropTypes.array.isRequired
}

export default FeedbackList