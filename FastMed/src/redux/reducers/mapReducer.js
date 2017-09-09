import { 
	ADD_MARKER
} from '../actions/mapActions'

const initialState = {
	marker:{}
}

export default user = (state = initialState, action) => {
	switch (action.type) { 
		case ADD_MARKER: {
			return Object.assign({}, state, {
				marker: action.payload.marker
			})
		}

		default: return state
	}
}