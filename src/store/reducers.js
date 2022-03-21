import { createStore, combineReducers } from "redux";
// import { portfolioData } from "./portfolio.state.js";
// import { planData } from "./calendar.state";
import { data } from "./data";
const playlist = data.playlist;
const works = data.works;

const initState = {
  newDate: new Date(),
  clock: function () {
    const state = new Date();
    const h = state.getHours();
    const ampm = state < 12 ? "AM" : "PM";
    const minutes = String(state.getMinutes()).padStart(2, "0");
    const today = `${h > 13 ? `${h - 12}` : `${h}`} : ${minutes} ${ampm}`;
    return today;
  },
  todos: [
    {
      id: 0,
      text: "wordle 기능 추가하기",
      date: " 3월 13일",
      isChecked: false,
    },
    { id: 1, text: "투두리스트 기능", date: " 3월 14일", isChecked: false },
  ],
  playlist,
  works,
};

function timeReducer(state = initState.newDate, action) {
  if (action.type === "시간가져오기") {
    state = new Date();
    state = initState.clock();
    return state;
  } else {
    state = new Date();
    state = initState.clock();
    return state;
  }
}

function todoReducer(state = initState.todos, { type, payload }) {
  localStorage.setItem("todos", JSON.stringify(state));
  state = JSON.parse(localStorage.getItem("todos"));
  switch (type) {
    case "ADD_TODO":
      const addTodo = state.concat(payload);
      localStorage.setItem("todos", JSON.stringify(addTodo));
      return addTodo;
    case "REMOVE_TODO":
      const newTodo = state.filter((todo) => todo.id !== payload.id);
      localStorage.setItem("todos", JSON.stringify(newTodo));
      return newTodo;
    case "EDIT_TODO":
      const editTodo = state.map((todo) =>
        todo.id === payload.id ? { ...todo, text: payload.text } : todo
      );
      return editTodo;
    case "checked":
      const checked = state.map((todo) =>
        todo.id === payload.id
          ? { ...todo, isChecked: payload.isChecked }
          : todo
      );
      return checked;
    default:
      return state;
  }
}
function worksReducer(state = initState.works, { type, payload }) {
  state = [...initState.works];
  switch (type) {
    case "React":
      const reactArr = [...state].filter((item) => item.filter === "react");
      return reactArr;
    case "Vanilla JS":
      const jsArr = [...state].filter((item) => item.filter === "vanillaJS");
      return jsArr;
    case "jQuery":
      const jqueryArr = [...state].filter((item) => item.filter === "jquery");
      return jqueryArr;
    case "ect":
      const ectArr = [...state].filter((item) => item.filter === "ect");
      return ectArr;
    default:
      return state;
  }
}
// function planReducer(state = initState.planData, { type, payload }) {
//   switch (type) {
//     case "add":
//       let index = payload.index;
//       console.log(payload.index);
//       const prev = [...state];
//       if (index < state.length || index > 0) {
//         index--;
//       } else if (index === state.length - 1) {
//         index = 0;
//       }
//       console.log(prev);
//       console.log(prev[index]);
//       return index;

//     default:
//       return state;
//   }
// }
const store = createStore(
  combineReducers({
    timeReducer,
    todoReducer,
    worksReducer,
  })
);
export default store;
