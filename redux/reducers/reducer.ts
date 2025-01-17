const initialState = {
  country: {},
  weather: {},
  capital:{}
}

export default (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_COUNTRY':
      return {...state, country: action.data.data[0]}
      break

    case 'SET_WEATHER':
      return {...state, weather: action.data,capital:action.data}

    default:
      return state
      break
  }
}
