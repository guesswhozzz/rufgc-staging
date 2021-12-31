const colorThemeHandler = (nextTheme) => {
  const rootNode = document.querySelector(':root');
  const preparedClasses = rootNode.classList.value.split(' ').filter(c => Boolean(c))
  if (preparedClasses.includes(nextTheme)) {
    return;
  }
  const r1 = preparedClasses
    .filter(c => c !== 'dark')
    .filter(c => c !== 'light')
    .filter(c => Boolean(c));
  preparedClasses.forEach(c => rootNode.classList.remove(c));
  [nextTheme, ...r1].forEach(c => rootNode.classList.add(c));

} 


const colorAccentHandler = (nextAccent) => {
  const rootNode = document.querySelector(':root');
  rootNode.classList.toggle(nextAccent);
  console.log(rootNode);
  // const currentAccent = document.body.classList.value;
  // console.log(currentAccent);
  
  // if (nextAccent === currentAccent) {
  //   return;
  // }
  
  // if (currentAccent) {
  //   document.body.classList.toggle(currentAccent)
  // }
  
  // document.body.classList.toggle(nextAccent);
}

/* ===== */
export class PrefersSchemePub {
  #events; /* Array of sub */
  
  constructor() {
    this.#events = [];
  }

  add(eventName, f) {
    this.#events.push({eventName, f})
  }
  
  remove(eventName) {
    this.#events = this.#events.filter(sub.eventName !== eventName);
  }
  
  emit(eventName, payload) {
    this.#events.forEach(sub => {
        if(sub.eventName === eventName) {
            sub.f(payload);
        }
    })
  }
}

const colorSheme = new PrefersSchemePub();

// colorSheme.add('change_color_accent', colorAccentHandler);
colorSheme.add('change_color_theme', colorThemeHandler);

window.f1 = colorSheme.emit.bind(colorSheme);