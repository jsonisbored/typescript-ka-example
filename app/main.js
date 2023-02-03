
const canvas = document.querySelector("#mycanvas");
const instance = new Processing(canvas, instance => {
    with (instance) {
        size(400, 400);
        frameRate(60);
        (() => {
  // src/lib-example.ts
  function foo() {
    return "bar";
  }

  // src/main.ts
  console.log(foo());
})();
;
    }
});