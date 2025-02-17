import {Chaney, Heebo} from "../../fonts/fonts";

export const components = () => ({
  Badge: {
    styles: (theme, params, { variant }) => ({
      root: {
        color: variant === 'filled'
          ? theme.colors.black
          : theme.colors.white,
      },
    }),
  },
  Button: {
    styles: (theme, params, { variant }) => ({
      root: {
        border: "transparent",
        "&[data-selected='true']": {
          backgroundColor: theme.colors["accent"],
          "& .mantine-Button-label": {
            color: `${theme.colors.black} !important`,
            "& span": {
              color: `${theme.colors.black} !important`,
            }
          }
        },
      },
      label: {
        color: variant === 'filled'
          ? theme.colors.black
          : theme.colors.white,
      },
      
    }),
  },
  Container: {
    defaultProps: {
      sizes: {
        xs: 540,
        sm: 720,
        md: 960,
        lg: 1500,
        xl: 1500,
      },
    },
    styles: (theme, props) => ({
      root: {
        // background: "transparent",
        // maxWidth: "100%",
        // width: props && props.fluid ? "100%" : 1300,
      },
    }),
  },
  Drawer: {
    styles: (theme) => ({
      drawer: {
        borderBottom: `5px solid ${theme.colors["gradient-1"]}`,
      },
    }),
  },
  /*Menu: {
    styles: (theme) => ({
      dropdown: {
        border: "none",
        borderRadius: 0,
      },
      item: {
        textDecoration: "none",
        itemLabel: {
          color: `red !important`,
          "&, &:hover": {
            color: `${theme.colors.black} !important`,
          },
        },
        "&[data-hovered]": {
          color: `${theme.colors.black} !important`,
          "&, &:hover": {
            textDecoration: "none",
            backgroundColor: theme.colors["accent"],
            color: `green !important`,
            "& .mantine-Menu-itemLabel": {
              fontColor: `${theme.colors.black} !important`,
              color: `black !important`
            }
          },
        },
      },
    }),
  },*/
  Pagination: {
    styles: (theme, params, { variant }) => ({
      control: {
        border: "transparent",
        backgroundColor: "transparent",
        "&[data-active='true']": {
          backgroundColor: theme.colors["accent"],
          color: `${theme.colors.black} !important`,
        }
      },
    }),
  },
  Paper: {
    styles: (theme) => ({
      root: {
        "& .cms-section-gradient-bg": {
          background: "red",
          background: `linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 28%, rgba(0,0,0,0.6) 100%)!important`,
          opacity: "1!important",
        },
        // Subnav
        "&.bespoke-Section-5, &.bespoke-Section-8, &.bespoke-Section-61" : {
          padding: 0,
          border: "none",
          [theme.fn.smallerThan("lg")]: {
            padding: "0px 25px",
          },
          [theme.fn.smallerThan("md")]: {
            padding: "0px 12.5px",
          },
          "& .bespoke-section-col": {
            padding: 0,
          },
          "& .mantine-Group-root": {
            margin: 0,
          },
        },
        // Options
        "& .cms-section-options": {
          "& .mantine-Button-root": {
            
            "&:hover": {
             
            },
          },
        },

        "& .description": {
          
        },

        "& .data-source": {
          
          "& a": {
            
          },
        },

        "& .bespoke-Viz-title": {
          "& .click-to-select": {

          },
        },
        "& .mantine-Group-root": {
          "& .cms-section-options": {
            "& .mantine-Button-root": {
              "& .mantine-Button-label": {

              },
            },
          },
        },
      },
    }),
  },
  Text: {
    styles: (theme) => ({
      root: {
        color: theme.white,
        lineHeight: 1.3,
        fontFamily: Heebo.style.fontFamily,
      }
    }),
  },
  Title: {
    styles: (theme) => ({
      root: {
        fontFamily: Chaney.style.fontFamily,
        textTransform: "uppercase",
        "span": {
          fontFamily: Chaney.style.fontFamily,
          textTransform: "uppercase",
        },
        fontWeight: "normal",
      }
    }),
  },
  SegmentedControl: {
    styles: (theme) => ({
      root: {
        gap: "0.5rem"
      },
      label: {
        color: theme.colors.white,
        
      },
      input: {
        
      },
      control: {
        border: `1px solid ${theme.colors["accent"]} !important`,
        borderRadius: "5px",
        "&.mantine-SegmentedControl-control+.___ref-control": {
          borderLeftColor: `${theme.colors["accent"]} !important`,
        }
      },
      controlActive: {
        backgroundColor: theme.colors["accent"],
        "label": {
          color: `${theme.colors.black} !important`,
        }
      },
      indicator: {
        
      }
    }),
  },
  Select: {
    styles: (theme) => ({
      label: {
        color: theme.colors.white,
        textTransform: "uppercase"
      },
      input: {
        color: theme.colors.white,
        backgroundColor: theme.colors.black,
      },
      wrapper: {
        borderRadius: "5px",
        border: `1px solid ${theme.colors["accent"]} !important`,
        color: theme.colors.white,
        "& svg": {
          stroke: theme.colors["accent"],
        }
      },
      item: {
        color: theme.colors.white,
        "&[data-selected=true]": {
          color: `${theme.colors.black} !important`,
          "& .mantine-Text-root": {
            color: `${theme.colors.black} !important`,
          }
        },
        // applies styles to hovered item (with mouse or keyboard)
        "&[data-hovered=true]": {
          color: `${theme.colors.black} !important`,
        },
      }
    }),
  }
});
