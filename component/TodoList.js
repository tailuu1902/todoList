import html from "../js/core.js";
import { connect } from "../js/store.js";
import TodoItem from "./TodoItem.js";
function TodosList({ listTodo, filter, filters, editIndex }) {
  console.log(listTodo);
  return html`
    <section class="main">
      <input id="toggle-all" class="toggle-all" type="checkbox" />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        ${listTodo
          .filter(filters[filter])
          .map((todo, index) => TodoItem({ todo, index, editIndex }))}
      </ul>
    </section>
  `;
}

export default connect()(TodosList);
