import {useState,useContext, useEffect} from 'react'
import FeedbackContext from '../context/FeedbackContext'
import RatingSelect from './RatingSelect'
import Button from './shared/Button'
import Card from './shared/Card'

function FeedbackForm() {
    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState(10)

    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

    useEffect(() => {
        if(feedbackEdit.edit === true) {
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    const handleTextChange = ({ target: { value } }) => {
        if(value === ''){
            setBtnDisabled(true)
            setMessage(null)
        }else if (value !== '' && value.trim().length <= 10){
            setMessage('text must be atleast 10 characters')
            setBtnDisabled(true)
            
        }else{
            setMessage(null)
            setBtnDisabled(false)
            
        }
        setText(value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if(text.trim().length > 10){
            const newFeedback = {
                text,
                rating
            }
            if(feedbackEdit.edit === true){
                updateFeedback(feedbackEdit.item.id, newFeedback)
            }else{
            addFeedback(newFeedback)
            }

            setText('')
        }
        

    }
  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate our services with you?</h2>
            <RatingSelect select={rating => setRating(rating)} />
            <div className="input-group">
                <input type="text" placeholder='Write a review' onChange={handleTextChange} value={text}/>
                <Button type="submit" isDisabled={btnDisabled}>Send</Button>
            </div>

            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm