onmessage = e => {

  const start = performance.now();
  let time = 0;
  let counter = e.data.counter;
  let step = e.data.step;

  function instance() {
    counter++;
    postMessage(counter);
    time += step;
    const diff = (performance.now() - start) - time;
    setTimeout(instance, step - diff);
  }

  setTimeout(instance, step);
}


