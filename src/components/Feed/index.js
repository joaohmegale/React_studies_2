import { useState } from "react";

function Feed() {
  const [feed, setFeed] = useState([
    { id: 1, username: 'joao', likes: 10, comments: 5 },
    { id: 2, username: 'manoel', likes: 20, comments: 10 },
    { id: 3, username: 'bob', likes: 30, comments: 15 },
    { id: 4, username: 'Marcelo', likes: 1, comments: 1 },
  ]);



  return(
    <div>
      {feed.map((item)=>{
        return(
        <div key={item.id}>
          <h3>{item.username}</h3>
          <h2>{item.likes > 1 ? item.likes + ' likes ' : item.likes + ' like '} 
            {item.comments > 1 ? item.comments + ' comments ' : item.comments + ' comment'}
          </h2>
          <hr/>
        </div>
        );
      })};
    </div>
  )
}
export default Feed;