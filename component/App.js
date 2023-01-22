import html from "../js/core.js";
import Header from "./Header.js";
import TodoList from "./TodoList.js";
import Footer from "./Footer.js";
import { connect } from "../js/store.js";
function App({ listTodo }) {
  return html` <section class="todoapp">
    ${Header()}${listTodo.length > 0 && TodoList()}${listTodo.length > 0 &&
    Footer()}
  </section>`;
}

export default connect()(App);
