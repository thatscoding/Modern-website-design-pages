gsap.from(".box4 p", {
  onStart: function () {
    $(".box4 p").textillate({ in: { effect: "rollIn" } });
  },
});
