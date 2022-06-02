import { GET_FILTER, CARS_ERROR } from './types'

export const filterCar = (data) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token')
    // sending query
    const response = await fetch(
      'http://localhost:8000/api/v1/cars?' +
        new URLSearchParams({
          time: data.time,
          date: data.date,
          capacity: data.capacity,
        }),
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    )
    let result = await response.json()
    dispatch({
      type: GET_FILTER,
      payload: result.data,
    })
  } catch (error) {
    dispatch({
      type: CARS_ERROR,
      payload: error.response,
    })
  }
}
