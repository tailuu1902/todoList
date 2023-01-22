import html from "../js/core.js";

function TodoItem({ todo, index, editIndex }) {
  return html`
    <li
      class="${todo.completed && "completed"} ${editIndex === index &&
      "editing"}"
    >
      <div class="view">
        <input
          class="toggle"
          type="checkbox"
          ${todo.completed && "checked"}
          onchange="dispatch('completed',${index},this.checked)"
        />
        <label ondblclick="dispatch('edit',${index})">${todo.title}</label>
        <button class="destroy" onclick="dispatch('delete',${index})"></button>
      </div>
      <input
        class="edit"
        onkeyup="event.keyCode === 13 && dispatch('editingEnded',this.value.trim()) || event.keyCode === 27 && dispatch('escapeEditing')"
        onblur="dispatch('editingEnded',this.value.trim())"
        value="${todo.title}"
      />
    </li>
  `;
}

export default TodoItem;
