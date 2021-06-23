import React, {useEffect} from 'react'
import Banner from '../organisms/Banner'
import {connect} from 'react-redux'
import {getAllPosts} from '../../redux/actionCreators'
import store from '../../redux/store'
import Publication from '../organisms/Publication'
const Home = ({posts}) => {
  
  useEffect(()=>{
    store.dispatch(getAllPosts())
  },[])

  return (
    <>
    <Banner 
    color="dark-color"
    title="Welcome to this website"
    subtitle="You'll find all you need to increase your abilities"
    home
    poster = "https://www.belenclaver.com/wp-content/uploads/2019/03/dadd68398c59f6934c1cfe23ef820bcb_welcoming-new-leo-house-employees-in-2016-the-leo-house-new-_1200-450.jpeg"
    />
    <main className="ed-grid m-grid-3">
      <div className="l-section m-cols-2">
        <h2>Latest publications</h2>
        {
          posts 
          ? 
          <div>
            {
              posts.map(
                p=><Publication 
                key={p.id}
                title={p.title}
                author={p.author}
                time={p.time}
                content={p.content}
                />
              )
            }
          </div>
          : 
          <p>
            There's no content
          </p>
        }
      </div>
      <div>
        <h3>Categories list</h3>
        <ul className="feature-list">
          <li><span>React.js</span></li>
          <li><span>React native</span></li>
          <li><span>Angular</span></li>
          <li><span>Vue.js</span></li>
          <li><span>HTML</span></li>
          <li><span>CSS</span></li>
        </ul>
      </div>
    </main>
 </>
  )
}
const mapStateToProps = state => ({
  posts: state.postReducer.posts
})
export default connect(mapStateToProps)(Home)
