import html from "../js/core.js";
import { connect } from "../js/store.js";
function Footer({ listTodo, filter, filters }) {
  return html`
    <footer class="footer">
      <span class="todo-count"
        ><strong>${listTodo.filter((todo) => !todo.completed).length}</strong>
        item left</span
      >
      <ul class="filters">
        ${Object.keys(filters).map((type) => {
          return html` <li>
            <a
              onclick="dispatch('changeType','${type}')"
              class="${filter === type && "selected"}"
              href="#"
              >${type[0].toLocaleUpperCase()}${type.slice(1)}</a
            >
          </li>`;
        })}
      </ul>
      <button
        class="clear-completed"
        onclick="dispatch('clearCompleted','active')"
      >
        Clear completed
      </button>
    </footer>
  `;
}

export default connect()(Footer);
