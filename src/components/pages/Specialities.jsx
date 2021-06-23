import React,{useEffect} from 'react'
import Banner from '../organisms/Banner'
import Card from '../organisms/Card'
import { getAllSpecialities } from '../../redux/actionCreators'
import store from '../../redux/store'
import {connect} from 'react-redux'
const Specialities = ({specialities}) => {
  useEffect(()=>{
    store.dispatch(getAllSpecialities())
  },[])
  return(
    <>
      <Banner
        color="first-color" 
        image={{
          src: "https://images.unsplash.com/photo-1562097365-e24bb4c0479c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
          alt: "Specialities Banner"
        }}
        title="Our specialities"
        subtitle="this is a subtitle"
      />
      {
        specialities && 
        <main className="ed-grid m-grid-3">
        {
          specialities.map(s => (
            <Card 
            key={s.id}
            cardId={s.id}
            path="specialities"
            picture={s.picture}
            name={s.name}
            />
          ))
        }
        </main>
      }
    </>
  )
}
const mapStateToProps = state => ({
  specialities: state.specialityReducer.specialities
})

export default connect(mapStateToProps,{})(Specialities)
