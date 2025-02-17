import localFont from "next/font/local";

/* Import Fonts */
export const Heebo = localFont({
  src: [
    {
      path: "./heebo/Heebo-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./heebo/Heebo-Bold.woff2",
      weight: "700",
      style: "normal",
    }
  ],
});

export const Chaney = localFont({
  src: [
      {
      path: "./chaney/CHANEY-Regular.woff2",
      weight: "400",
      style: "normal",
      }
  ],
});