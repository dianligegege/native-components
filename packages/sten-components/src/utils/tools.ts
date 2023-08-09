export function debounce(func:Function, wait: number) {
  let timeId;
  return function(...args) {
    let _this = this;
    clearTimeout(timeId);
    timeId = setTimeout(function() {
      func.apply(_this, args);
    }, wait);
  }
}

export function throttle(func: Function, wait: number) {
  let lastTime, deferTimer;
  return function(...args) {
    let _this = this;
    let currentTime = Date.now();
    if (!lastTime || currentTime >= lastTime + wait) {
      lastTime = currentTime;
      func.apply(_this, args);
    } else {
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function() {
        lastTime = currentTime;
        func.apply(_this, args);
      }, wait);
    }
  }
}

export function rafThrottle(func: Function) {
  let lock = false;
  return function (...args) {
    if (lock) return;
    lock = true;
    window.requestAnimationFrame(() => {
      func.apply(this, args);
      lock = false;
    });
  };
}

export function combineThrottle(func: Function, wait: number) {
  if (wait === 0) {
    return rafThrottle(func);
  } else {
    return throttle(func, wait);
  }
}




