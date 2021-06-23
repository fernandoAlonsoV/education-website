import React, {useEffect} from 'react'
import { getAllTeachers } from '../../redux/actionCreators'
import store from '../../redux/store'
import Banner from '../organisms/Banner'
import {connect} from 'react-redux'
import Teacher from '../organisms/Teacher'
const Teachers = ({match, teachers}) => {
  
  useEffect(()=>{
    store.dispatch(getAllTeachers())
  },[match])

  return (
    <>
    <Banner 
    color="third-color"
    image={{
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVhY2hlcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
      alt: "banner teachers"
    }}
    title="Our teachers"
    subtitle="this is a subtitle"
    />
    {
      teachers && 
      <main className="ed-grid m-grid-3 lg-grid-4 row-gap">
      {
        teachers.map( t => (
          <Teacher
          key={t.id}
          picture={t.picture}
          name={t.name}
          country={t.country}
          />
        ))
      }
      </main>
    }
    </>
  )
}
const mapStateToProps = state => ({
  teachers: state.teacherReducer.teachers
})
export default connect(mapStateToProps, {})(Teachers)
