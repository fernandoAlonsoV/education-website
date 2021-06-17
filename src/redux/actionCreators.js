import Axios from 'axios'
import { GET_ALL_COURSES, GET_ALL_POSTS, GET_ALL_SPECIALITIES, GET_ALL_TEACHERS, GET_FRAGMENT, GET_COURSE, GET_POST, GET_SPECIALITY } from './actions'

const API_URL = process.env.REACT_APP_API_URL

export const getAllPosts = () => dispatch => {
  Axios.get(`${API_URL}/posts`)
  .then(response=> {
    return dispatch({
      type: GET_ALL_POSTS,
      posts: response.data
    })
  })
}

export const getAllSpecialities = () => dispatch => {
  Axios.get(`${API_URL}/specialities`)
  .then(response=> {
    return dispatch({
      type: GET_ALL_SPECIALITIES,
      specialities: response.data
    })
  })
}

export const getAllCourses = () => dispatch => {
  Axios.get(`${API_URL}/courses`)
  .then(response=> {
    return dispatch({
      type: GET_ALL_COURSES,
      posts: response.data
    })
  })
}

export const getAllTeachers = () => dispatch => {
  Axios.get(`${API_URL}/teachers`)
  .then(response=> {
    return dispatch({
      type: GET_ALL_TEACHERS,
      posts: response.data
    })
  })
}


export const getPost = id => dispatch => {
  Axios.get(`${API_URL}/post/${id}`)
  .then(response=> {
    return dispatch({
      type: GET_POST,
      posts: response.data
    })
  })
}


export const getFragment = id => dispatch => {
  Axios.get(`${API_URL}/class/${id}`)
  .then(response=> {
    return dispatch({
      type: GET_FRAGMENT,
      posts: response.data
    })
  })
}

export const getCourse = id => dispatch => {
  Axios.get(`${API_URL}/course/${id}`)
  .then(response=> {
    return dispatch({
      type: GET_COURSE,
      posts: response.data
    })
  })
}

export const getSpeciality = id => dispatch => {
  Axios.get(`${API_URL}/speciality/${id}`)
  .then(response=> {
    return dispatch({
      type: GET_SPECIALITY,
      posts: response.data
    })
  })
}
