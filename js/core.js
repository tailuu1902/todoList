export default function html([first, ...restStrings], ...values) {
  //   console.log(first, restStrings, values);
  return values
    .reduce(
      (acc, curr) => {
        // console.log(curr, acc.concat(curr, restStrings.shift()));
        return acc.concat(curr, restStrings.shift());
      },
      [first]
    )
    .filter((x) => (x && x !== true) || x === 0)
    .join("");
}

export function creatStore(reducer) {
  //  Inital state
  let state = reducer();
  // Map is similar like Object but Map can set a key by any type of value
  const roots = new Map();

  function render() {
    for (const [root, component] of roots) {
      const output = component();
      root.innerHTML = output;
    }
  }

  return {
    // Set data (views) and render
    attach(component, root) {
      roots.set(root, component);
      render();
    },

    // Pass data from store to view
    // selector is choosen by default is state which we recieved from reducer()
    connect(selector = (state) => state) {
      return (component) =>
        //   props data which we want to pass
        (props, ...args) =>
          component(Object.assign({}, props, selector(state), ...args));
    },
    // Pass data when user have an action on the views
    dispatch(action, ...args) {
      state = reducer(state, action, args);
      render();
    },
  };
}
