import React, { useState } from 'react';
// import HomeService from "../../services/home"
// import PhotoFeed from "../../components/PhotoFeed"
import Header from '../../components/Header';

const Home = () => {
  // const initialHomeState = {
  //   data: { photos: [] },
  //   page: 1,
  //   loading: true,
  //   hasMore: true,
  // }

  // const [state, setState] = useState(initialHomeState);

  // const loadPhotos = async () => {
  //   const { page } = state
  //   await HomeService.getPhotos({ page })
  //     .then(({ data }) => {
  //       setState({
  //         data: { photos: state.data.photos.concat(data) },
  //         page: page + 1,
  //         loading: false,
  //         hasMore: true,
  //       })
  //     })
  //     .catch((err) => alert(err))
  // }
  return (
    <div>
      <Header />
      {/* <PhotoFeed
      loadMore={loadPhotos}
      hasMore={state.hasMore}
      // loader={<Spinner size="2x" key={0} />}
      threshold={1000}
      photos={state.data.photos}
      className="main"
    /> */}
    </div>
  )
}

export default Home;