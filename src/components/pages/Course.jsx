import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import store from '../../redux/store'
import {getCourse} from '../../redux/actionCreators'
const Course = ({course}) => {

  useEffect(()=>{
    store.dispatch(getCourse(1))
  },[])

  return (
    <>
      {
        course &&
        <>
          <main className="ed-grid lg-grid-10">
            <div className="lg-cols-7">
              <div className="course-features ed-grid lg-grid-3 s-border s-pxy-2 s-radius s-bg-white l-block s-shadow-bottom row-gap">
                <div>
                  <h3 className="t4">What you'll learn?</h3>
                  <ul dangerouslySetInnerHTML={{__html: course.you_learn}}>
                  </ul>
                </div>
                <div>
                  <h3 className="t4">Knowledge required</h3>
                  <ul dangerouslySetInnerHTML={{__html: course.requirements}}></ul>
                </div>
                <div>
                  <h3 className="t4">Level</h3>
                  <p>{course.level}</p>
                </div>
              </div>
              <h2>Course's topics</h2>
              <div className="s-border s-pxy-2 lg-pxy-4 s-radius s-bg-white l-block l-section s-shadow-bottom">
                {
                  course.data.classes.map(cl=>(
                    <div className="course-class l-section" key={cl.class.id}>
                      <h3>{cl.class.title}</h3>
                      <p>{cl.class.description}</p>
                      <ul>{
                      cl.subjects.map(s=>(
                        <li key={s.subject.id}>{s.subject.title}</li>
                        ))
                      }</ul>
                    </div>
                  ))
                }
              </div>
            </div>
          </main>
        </>
      }
    </>
  )
}
const mapStateToProps = state => ({
  course: state.courseReducer.course
})
export default connect(mapStateToProps)(Course)
