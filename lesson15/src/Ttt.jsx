import React, { useState } from "react";

const Ttt = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);


  
function LikeButton({ likes, onLike }) {
  return <button onClick={onLike}>Like {likes} ❤️</button>;
}

function DislikeButton({ dislikes, onDislike }) {
  return <button onClick={onDislike}>Dislike {dislikes} 💔</button>;
}


  function handleLike() {
    setLikes(likes + 1);
  }

  function handleDislike() {
    setDislikes(dislikes + 1);
  }

  return (
    <div>
      <LikeButton likes={likes} onLike={handleLike} />
      <DislikeButton dislikes={dislikes} onDislike={handleDislike} />
    </div>
  );
};




    // return (
    //     <div>
    //         <h2>Counter is: {count}</h2>
    //         <button onClick={() => setCount(count + 1)}> +1 </button>
    //         <button onClick={() => setCount(count - 1)}> -1 </button>
    //         <button onClick={() => setCount(count * 2)}> *2 </button>
    //         <button onClick={() => setCount(count * 5)}> *5 </button>
    //         <button onClick={() => setCount(count / 5)}> /5 </button>
    //         <button onClick={() => setCount(count / 10)}> /10 </button>
            
    //         <div className="name">
    //             <div>
    //                 <input 
    //                 placeholder="Enter name"
    //                 onChange={(e) => setName(e.target.value)}    />
    //                 <h2>Hello {name}</h2>
    //              </div>
    //         </div>
    //     </div>
    // )
// }


export default Ttt