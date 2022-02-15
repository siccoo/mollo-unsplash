import React from "react"
import InfiniteScroll from "react-infinite-scroller"
import { Container } from "./styles"

import PhotoFeedItem from "../PhotoFeedItem"

const PhotoFeed = (props) => {
  const { loading, photos, loadMore, hasMore, threshold, classname, columnCount } = props
  if (!loading) {
    let row = []

    row = photos.map((photo, i) => <PhotoFeedItem key={i} alt="placeholder" photo={photo} />)

    return (
      <InfiniteScroll
        loadMore={loadMore}
        hasMore={hasMore}
        threshold={threshold}
        className={classname}
      >
        <Container columnCount={columnCount}>{row}</Container>
      </InfiniteScroll>
    )
  } else {
    return (
      <>
        <Container>
        </Container>
      </>
    )
  }
}

export default PhotoFeed
