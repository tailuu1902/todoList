import Storage from "../util/Storage.js";
console.log(Storage);
const init = {
  listTodo: Storage.get(),
  filter: "all",
  filters: {
    all() {
      return true;
    },
    active(todo) {
      return !todo.completed;
    },
    completed(todo) {
      return todo.completed;
    },
  },
  editIndex: null,
};

const actions = {
  Add({ listTodo }, title) {
    if (title) {
      listTodo.push({ title, completed: false });
      Storage.set(listTodo);
    }
  },
  completed({ listTodo }, index, checked) {
    listTodo[index].completed = checked;
    Storage.set(listTodo);
  },
  delete({ listTodo }, index) {
    if (index) {
      listTodo.splice(index, 1);
      Storage.set(listTodo);
    }
  },
  changeType(state, type) {
    state.filter = type;
  },
  clearCompleted(state) {
    state.listTodo = state.listTodo.filter(state.filters.active);
    Storage.set(state.listTodo);
  },
  edit(state, editIndex) {
    state.editIndex = editIndex;
  },
  editingEnded(state, newTitle) {
    if (newTitle) {
      state.listTodo[state.editIndex].title = newTitle;
    } else {
      state.listTodo.splice(state.editIndex, 1);
    }
    Storage.set(state.listTodo);
    state.editIndex = null;
  },
  escapeEditing(state) {
    state.editIndex = null;
  },
};

function reducer(state = init, action, args) {
  actions[action] && actions[action](state, ...args);
  return state;
}

export default reducer;
