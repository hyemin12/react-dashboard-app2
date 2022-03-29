import { createStore, combineReducers } from "redux";
import {
  TiWeatherSunny,
  TiWeatherStormy,
  TiWeatherShower,
  TiWeatherDownpour,
  TiWeatherSnow,
  TiWeatherWindyCloudy,
  TiWeatherCloudy,
} from "react-icons/ti";
import { data } from "./data";
const todos = data.todos;
const playlist = data.playlist;
const works = data.works;
const events = data.events;

const initState = {
  newDate: new Date(),
  todos,
  playlist,
  works,
  events,
  dDay: { title: "", date: "" },
};

function todoReducer(state = initState.todos, { type, payload }) {
  localStorage.setItem("todos", JSON.stringify(state));
  state = JSON.parse(localStorage.getItem("todos"));
  switch (type) {
    case "ADD_TODO":
      const addTodo = state.concat({
        id: payload.id,
        text: payload.text,
        isChecked: false,
        date: payload.date,
      });
      localStorage.setItem("todos", JSON.stringify(addTodo));
      return addTodo;
    case "REMOVE_TODO":
      console.log(payload.id);
      const newTodo = state.filter((todo) => todo.id !== payload.id);
      localStorage.setItem("todos", JSON.stringify(newTodo));
      return newTodo;
    case "EDIT_TODO":
      const editTodo = state.map((todo) =>
        todo.id === payload.id ? { ...todo, text: payload.text } : todo
      );
      return editTodo;
    case "checked":
      console.log(payload.isChecked);
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

function eventsReducer(state = initState.events, { type, payload }) {
  localStorage.setItem("events", JSON.stringify(state));
  state = JSON.parse(localStorage.getItem("events"));
  switch (type) {
    case "ADD_EVENT":
      const addEvent = state.concat({
        id: payload.id,
        title: payload.title,
        subtitle: payload.subtitle,
        start: payload.start,
        end: payload.end,
      });
      localStorage.setItem("events", JSON.stringify(addEvent));
      return addEvent;
    case "REMOVE_EVENT":
      const removeEvent = state.filter((event) => event.id !== payload.id);
      console.log(removeEvent);
      localStorage.setItem("events", JSON.stringify(removeEvent));
      return removeEvent;
    default:
      return state;
  }
}
function dDayReducer(state = initState.dDay, { type, payload }) {
  state = JSON.parse(localStorage.getItem("d-day"));
  switch (type) {
    case "CREATE_Dday":
      state = {
        title: payload.title,
        date: payload.date,
      };
      localStorage.setItem("d-day", JSON.stringify(state));
      return state;
    case "EDIT_Dday":
      state = {
        title: payload.title,
        date: payload.date,
      };
      localStorage.setItem("d-day", JSON.stringify(state));
      return state;
    case "REMOVE_Dday":
      state = null;
      localStorage.removeItem("d-day");
      return state;
    default:
      return state;
  }
}
const store = createStore(
  combineReducers({
    todoReducer,
    worksReducer,
    eventsReducer,
    dDayReducer,
  })
);

export default store;
