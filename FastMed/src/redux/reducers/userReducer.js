import { 
	UPDATE_USER
} from '../actions/userActions'

const initialState = {
	user: {
		name: '',
		DOB: '',
		medicalConditions: '',
		medicalNotes: '',
		allergiesReaction: '',
		medications: '',
		bloodType: '',
		weight: ''
	}
}

export default user = (state = initialState, action) => {
	switch (action.type) { 
		case UPDATE_USER: {
			return Object.assign({}, state, {
				user:: action.payload.user
			})
		}
		default: return state
	}
}