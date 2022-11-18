// import {useState, useEffect, useContext} from 'react';
import {useReducer} from 'react'


//----- useState() -----

// export function ReactHook() {
//     // Declare a new state variable, which we'll call "count"
//     const [count, setCount] = useState(0);
//     return (
//         <div>
//         Current Cart Count: {count}
//             <div>
//             <button onClick={() => setCount(count + 1)}>Add to cart</button>
//             <button onClick={() => setCount(count - 1)}>Remove from cart</button>
//             </div>
//         </div>
//     );
// }


//----- useEffect () -----

// export function ReactHook() {
//     // Declare state variables
//     const [count, setCount] = useState(0);
//     const [product, setProduct] = useState("Eggs");

//     useEffect(() => {
//         console.log(`${product} will rule the world!`);
//     },[product]);

//     return (
//         <div>
//             <p>Current {product}'s count: {count} </p>           
//             <div>
//                 <button onClick={() => setCount(count + 1)}>Add to cart</button>
//                 <button onClick={() => setCount(count - 1)}>Remove from cart</button>
//                 <p>Change Product:{" "}</p>
//                 <input type="text" onChange={(e) => setProduct(e.target.value)} />
//             </div>
//         </div>
//     );
// }


//----- useContext() -----

// import { UserContext } from "./usersContext";

// export function UserProfile() {
//     const users = useContext(UserContext);
//     return (
//         <div>
//             {users.map((user) => ( // menampilkan semua data yang ada di UsersContext
//             <li key={user.name}>
//             I am {user.name} and I am a {user.occupation}!
//             </li>
//             ))}
//         </div>
//     );
// }

// export function ReactHook() {
//   const users = useContext(UserContext);
//   return (
//     <UserContext.Provider value={users}>
//     <UserProfile />
//     </UserContext.Provider>
//   )
// }


//----- useReducer() -----

//buat dulu initial state untuk digunakan di useReducer
const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },{
    id: 3,
    title: "Todo 3",
    complete: false,
  },
];

//buat reduser untuk digunakan di useReducer
//fungsi reducer ini menerima state dan action. Berdasarkan argumen ini menentukan bagaimana nilai state akan berubah.
const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};


export function ReactHook() {
  const [todos, setTodos] = useReducer(reducer, initialTodos);

  const handleComplete = (todo) => {
    setTodos({ type: "COMPLETE", id: todo.id });
  };

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </div>
  );
}
