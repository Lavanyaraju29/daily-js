const promise1 = Promise.resolve("One");
const promise2 = new Promise((resolve) => setTimeout(() => resolve("Two"), 1000));
const promise3 = Promise.reject("Three");
 Promise.allSettled([promise1, promise2, promise3]).then((results) => console.log(results));