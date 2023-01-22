const KEY_TODOLIST = "TODOLIST1";
const Storage = {
  set(TodoList) {
    localStorage.setItem(KEY_TODOLIST, JSON.stringify(TodoList));
  },
  get() {
    return JSON.parse(localStorage.getItem(KEY_TODOLIST)) || [];
  },
};

export default Storage;
