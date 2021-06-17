import { GET_ALL_COURSES, GET_ALL_POSTS, GET_ALL_SPECIALITIES, GET_ALL_TEACHERS, GET_COURSE, GET_FRAGMENT, GET_POST, GET_SPECIALITY } from "./actions"

const postReducer = (state={},action) =>{
  if(action.type === GET_ALL_POSTS){
    return {
      ...state, 
      posts: action.posts
    }
  }
  if(action.type === GET_POST){
    return {
      ...state, 
      post: action.post
    }
  }
  return state
}
const specialityReducer = (state={},action) =>{
  if(action.type === GET_ALL_SPECIALITIES){
    return {
      ...state, 
      specialities: action.specialities
    }
  }
  if(action.type === GET_SPECIALITY){
    return {
      ...state, 
      speciality: action.speciality
    }
  }
  return state
}
const courseReducer = (state={},action) =>{
  if(action.type === GET_ALL_COURSES){
    return {
      ...state, 
      courses: action.courses
    }
  }
  if(action.type === GET_COURSE){
    return {
      ...state, 
      course: action.course
    }
  }
  return state
}

const teacherReducer = (state={},action) =>{
  if(action.type===GET_ALL_TEACHERS){
    return {
      ...state, 
      teachers: action.teachers
    }
  }
  return state
}
const classReducer = (state={},action) =>{
  if(action.type===GET_FRAGMENT){
    return {
      ...state, 
      class: action.class
    }
  }
  return state
}

export  
{
  postReducer, 
  specialityReducer,
  courseReducer,
  teacherReducer,
  classReducer
}
