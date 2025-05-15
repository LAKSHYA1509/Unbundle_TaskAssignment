
Shery.mouseFollower();
Shery.makeMagnet(".main-header" /* Element to target.*/, {
  //Parameters are optional.
});

Shery.imageEffect("/images/root1.png", {
  style: 1 /*OR 5 for different variant */,
  debug: true,
});

Shery.makeMagnet(".logo-clove" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});