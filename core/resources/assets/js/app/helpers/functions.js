function listenFor(callback) {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      if (callback()) resolve();
      else listenFor(callback);
    }, 100);
  });
}
