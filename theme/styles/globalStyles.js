import {useMemo} from "react";
import {colors} from "./colors";
import {Chaney, Heebo} from "../../fonts/fonts";

export const globalStyles = (theme) => {
  const config = useMemo(() => ({
    ":root": {
      "--navbar-height": "60px",
      // convert colors to css vars
      ...Object.entries(colors())
        .reduce(
          (cssVars, [colorKey, colorValue]) => ({...cssVars, [`--${colorKey}`]: colorValue}),
          {},
        ),
    },
    "*, *::before, *::after": {
      boxSizing: "border-box",
    },
    html: {
      scrollBehavior: "smooth",
      scrollSnapType: "y mandatory",
      [theme.fn.smallerThan("lg")]: {
        scrollSnapType: "none",
      },
    },
    body: {
      ...theme.fn.fontStyles(),
      position: "relative",
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      backgroundColor: "var(--primary-bg)",
    },
    ".main-container": {
      paddingTop: "calc(var(--navbar-height) * 1.5)",
      paddingBottom: "calc(var(--navbar-height) * 1.5)",
      width: "100%",
      minHeight: "80vh",
    },
    ".d3plus-tooltip": {
      backgroundColor: theme.colors["primary-bg"],
      zIndex: "1000 !important",
      minWidth: "250px",
      "& table": {
        minWidth: "95% !important",
        width: "95% !important",
        margin: "10px auto !important"
      },
      "& tbody": {
        width: "100% !important"
      },
      "& tbody tr": {
        borderTop: "1px solid var(--primary-bg) !important",
        "&:first-of-type": {
          borderTop: "0 !important"
        }
      },
      "& td, & th": {
        textAlign: "right",
        padding: "5px 5px",
        "&:first-of-type": {
          textAlign: "left",
          fontWeight: 400
        }
      },
      "& thead tr": {
        borderTop: "0 !important"
      },
      "& th": {
        whiteSpace: "nowrap"
      },
      border: "none !important",
      boxShadow: "2px 2px 10px black"
    },
    ".d3plus-tooltip-title-wrapper": {
      display: "flex",
      alignItems: "flex-start",
      "& .icon": {
        marginRight: "10px",
        width: "40px",
        height: "40px",
        flexShrink: 0,
        "& img": {
          width: "40px",
          height: "40px"
        }
      },
      "& .title": {
        minHeight: "40px",
        display: "flex",
        alignItems: "center",
        "& span": {
          display: "-webkit-box",
          overflow: "hidden",
          textOverflow: "ellipsis",
          WebkitLineClamp: 4,
          WebkitBoxOrient: "vertical"
        }
      }
    },
    ".d3plus-Line-group .d3plus-Line-text text": {
      fill: "white",
    },
    "#nprogress .bar": {
      background: "var(--accent) !important",
    },
    "#nprogress .peg": {
      boxShadow: "0 0 10px var(--accent), 0 0 5px var(--accent)",
    },
    "#nprogress .spinner-icon": {
      borderTopColor: "var(--accent)",
      borderLeftColor: "var(--accent)",
      marginTop: "5px",
    },
    "#Profile":{
      "& .mantine-Text-root": {
        margin: 0,
        "& a":{
          color: "white",
          textDecoration: "underline",
        }
      },
      "& .mantine-Title-root": {
        fontFamily: Heebo.style.fontFamily,
      },
      ".bespoke-stat-wrapper":{
        ".mantine-Group-root:first-of-type":{
          flexWrap: "nowrap"
        }
      },
      "& .section-bespoke-loader": {
        // zIndex: 1000,
      },
    },
    "small.bespoke-timestamp": {
      width: "100%",
      textAlign: "center",
      color: "#444",
      display: "block"
    },
    ".bespoke-explore-reports-selector": {
      "& button:last-child": {
        width: "175px",
        position: "relative",
        display: "flex",
      }
    },
    ".bespoke-explore-reports-selector, .bespoke-explore-variant-selector": {
      "& button .mantine-Button-icon svg": {
       color: "black"
      }
    }
  }), []);

  return config;
};