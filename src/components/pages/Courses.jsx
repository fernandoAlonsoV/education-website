import React,{useEffect} from 'react'
import Banner from '../organisms/Banner'
import Card from '../organisms/Card'
import {connect} from 'react-redux'
import store from '../../redux/store'
import {getAllCourses} from '../../redux/actionCreators'
const Courses = ({courses}) => {
  useEffect(()=>{
    store.dispatch(getAllCourses())
  },[])
  return (
    <>
      <Banner
        color="dark-color" 
        image={{
          src: "https://images.unsplash.com/photo-1610484826967-09c5720778c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
          alt: "Courses Banner"
        }}
        title="Our courses"
        subtitle="this is a subtitle"
      />
      {
        courses && 
        <main className="ed-grid m-grid-5">
        {
          courses.map(c=>(
            <Card 
            key={c.id}
            cardId={c.id}
            path="course"
            picture={c.picture}
            name={c.name}
            />
          ))
        } 
        </main>
      }
    </>
  )
}
const mapStateToProps = state => ({
  courses: state.courseReducer.courses
})
export default connect(mapStateToProps,{})(Courses)
