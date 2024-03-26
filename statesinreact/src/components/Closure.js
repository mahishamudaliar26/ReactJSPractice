function Closure() {
  let a = 10;
  function innerFunction() {
    let b = 50;
    console.log(a + b);
  }
  innerFunction();
}
export default Closure;
