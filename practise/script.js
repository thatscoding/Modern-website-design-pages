// gsap.from("button", {
//   opacity: 0,
//   duration: 5,
// });

// gsap.from("button", {
//   backgroundColor: "green",
//   duration: 10,
// });

// gsap.from(".nav1", {
//   y: 20,
//   duration: 2,
// });

var tl = gsap.timeline();

tl.from(".nav1", {
  opacity: 0,
  y: 20,
  duration: 1,
})
  .from(".nav2", {
    opacity: 0,
    y: 20,
    duration: 1,
  })

  .from(".center h1", {
    opacity: 0,
    scale: 1.5,
    duration: 1,
  })
  .from("button", {
    opacity: 0,
    scale: 0.1,
    duration: 1,
  })

  .from(".left img", {
    opacity: 0,
    x: -60,
    scale: 1.5,
    duration: 1,
  })

  .from(".right img", {
    opacity: 0,
    x: 60,
    scale: 1.5,
    duration: 1,
    // delay mean 1 second phle chal jayega
    delay: "-1",
  })

  .to("button", {
    y: 20,
    // inifte loop
    repeat: "-1",
    // for smoothling
    yoyo: "true",
  });
