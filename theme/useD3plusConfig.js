import {useMemo} from "react";
import {colorDefaults} from "d3plus-color";
import {useRouter} from "next/router";
import {colors as CustomColors} from "./styles/colors";
import D3plusColors from "./styles/D3plusColors";
import {formatAbbreviate} from "d3plus-format";
import {Heebo, Chaney} from "../fonts/fonts";
import {d3plusTranslation} from "../helpers/translations";

colorDefaults.light = CustomColors()["primary-text"];
colorDefaults.dark = CustomColors()["secondary-text"];

export const detectUniques = (arr, acc) => {
  const uniques = Array.from(new Set(arr.map(acc)));
  return uniques.length === 1 ? uniques[0] : uniques;
};

const labelStyle = {
  fontFamily: () => Heebo.style.fontFamily,
  fontSize: () => 14,
  fontWeight: () => 400,
  fontColor: (d) => CustomColors().white,
};

const axisStyles = {
  barConfig: {
    stroke: "transparent"
  },
  gridConfig: {
    stroke: (d) => "#444444",
    strokeWidth: 1
  },
  gridLog: true,
  labelConfig: labelStyle,
  shapeConfig: {
    labelConfig: labelStyle
  },
  tickSize: 5,
  titleConfig: {
    fontFamily: () => Heebo.style.fontFamily,
    fontSize: () => 20,
    fontWeight: () => 400,
    fontColor: () => CustomColors().white,
  }
};

export function useD3plusConfig() {
  const {locale} = useRouter();
  const config = useMemo(() => ({
    aggs: {
      "Flow ID": detectUniques,
    },
    colorScaleConfig: {
      axisConfig: {
        labelOffset: true,
        shapeConfig: {
          labelConfig: labelStyle
        },
        titleConfig: {
          fontFamily: () => Heebo.style.fontFamily,
          fontSize: () => 16,
          fontWeight: () => 400,
          fontColor: () => CustomColors().white,
        },
        tickFormat: d => formatAbbreviate(d)
      },
      color: D3plusColors.viridis,
      colorMin: "#ed108f",
      colorMid: "#c9c1ff",
      colorMax: "#2429e4",
      labelConfig: {
        fontSize: 16
      },
      legendConfig: {
        shapeConfig: {
          labelConfig: labelStyle,
          stroke: "transparent",
          height: () => 15,
          width: () => 15
        },
        titleConfig: {
          fontSize: 14,
          fontWeight: 600,
        },
      },
      scale: "linear",
    },
    colorScaleMaxSize: 800,
    colorScalePosition: "bottom",
    xConfig: axisStyles,
    yConfig: {...axisStyles, scale: "auto"},
    y2Config: {...axisStyles, scale: "auto"},
    barPadding: 0,
    layoutPadding: 1,
    legend: (config, arr) => arr.length > 1,
    legendConfig: {
      label: "",
      shapeConfig: {
        labelConfig: labelStyle,
        height: () => window.innerWidth < 500 ? 20 : 25,
        width: () => window.innerWidth < 500 ? 20 : 25
      }
    },
    legendPosition: "bottom",
    loadingHTML: `<div style="color: ${D3plusColors["primary-text"]}; left: 50%; top: 50%; position: absolute; transform: translate(-50%, -50%);">
      <svg class="cp-viz-spinner" width="60px" height="60px" viewBox="0 0 317 317" xmlns="http://www.w3.org/2000/svg">
        <path fill="${CustomColors()["accent"]}" class="outer" d="M16.43 157.072c0 34.797 12.578 66.644 33.428 91.277l-11.144 11.141c-23.673-27.496-37.992-63.283-37.992-102.418 0-39.133 14.319-74.921 37.992-102.423l11.144 11.144c-20.85 24.63-33.428 56.481-33.428 91.279z"/>
        <path fill="${CustomColors()["accent"]}" class="outer" d="M157.793 15.708c34.798 0 66.648 12.58 91.28 33.427l11.143-11.144c-27.502-23.676-63.29-37.991-102.423-37.991-39.132 0-74.919 14.315-102.422 37.991l11.148 11.144c24.627-20.847 56.477-33.427 91.274-33.427"/>
        <path fill="${CustomColors()["accent"]}" class="outer" d="M299.159 157.072c0 34.797-12.578 66.644-33.43 91.277l11.145 11.141c23.674-27.496 37.992-63.283 37.992-102.418 0-39.133-14.318-74.921-37.992-102.423l-11.145 11.144c20.852 24.63 33.43 56.481 33.43 91.279"/>
        <path fill="${CustomColors()["accent"]}" class="outer" d="M157.793 298.432c-34.797 0-66.647-12.574-91.274-33.424l-11.148 11.138c27.503 23.682 63.29 37.997 102.422 37.997 39.133 0 74.921-14.315 102.423-37.997l-11.143-11.138c-24.632 20.85-56.482 33.424-91.28 33.424"/>
        <path fill="${CustomColors()["accent"]}" class="middle" d="M226.59 61.474l-7.889 13.659c24.997 18.61 41.184 48.382 41.184 81.94 0 33.555-16.187 63.329-41.184 81.936l7.889 13.664c29.674-21.394 49.004-56.23 49.004-95.6 0-39.373-19.33-74.21-49.004-95.599"/>
        <path fill="${CustomColors()["accent"]}" class="middle" d="M157.793 259.169c-52.398 0-95.553-39.485-101.399-90.317h-15.814c5.912 59.524 56.131 106.018 117.213 106.018 17.26 0 33.633-3.742 48.404-10.406l-7.893-13.672c-12.425 5.38-26.114 8.377-40.511 8.377"/>
        <path fill="${CustomColors()["accent"]}" class="middle" d="M157.793 54.976c14.397 0 28.086 2.993 40.511 8.371l7.893-13.667c-14.771-6.669-31.144-10.412-48.404-10.412-61.082 0-111.301 46.493-117.213 106.021h15.814c5.846-50.831 49.001-90.313 101.399-90.313"/>
        <path fill="${CustomColors()["accent"]}" class="inner" d="M95.371 164.193c-3.476-30.475 15.471-58.324 43.723-67.097l-1.804-15.842c-36.899 9.931-61.986 45.602-57.524 84.719 4.461 39.115 36.934 68.219 75.122 69.584l-1.806-15.838c-29.504-2.186-54.235-25.054-57.711-55.526"/>
        <path fill="${CustomColors()["accent"]}" class="inner" d="M162.504 94.425c29.508 2.185 54.235 25.053 57.711 55.529 3.476 30.469-15.466 58.319-43.724 67.096l1.806 15.834c36.898-9.927 61.986-45.598 57.525-84.712-4.461-39.117-36.936-68.223-75.125-69.588l1.807 15.841z"/>
      </svg>
      <br/>
      <strong>Cargando...</strong>
    </div>`,
    legendTooltip: {
      // title: legendTooltipTitle
    },
    ocean: false,
    projection: "geoMiller",
    tiles: false,
    titleConfig: {
      fontFamily: () => Heebo.style.fontFamily,
      fontSize: () => 16,
      fontColor: () => CustomColors().white,
      fontWeight: () => 500,
    },
    subtitleConfig: {
      fontFamily: () => Heebo.style.fontFamily,
      fontSize: () => 14,
      fontWeight: () => 400,
      fontColor: () => CustomColors()["accent"],
    },
    totalConfig: {
      fontFamily: () => Heebo.style.fontFamily,
      fontSize: () => 14,
      fontWeight: () => 400,
      fontColor: () => CustomColors().white,
    },
    tooltipConfig: {
      // title: tooltipConfigTitle,
      // tbody: tooltipConfigTbody,
      footerStyle: {
        "fontFamily": () => Heebo.style.fontFamily,
        "font-size": "12px",
        "font-weight": "600",
        "padding-bottom": "5px",
        "padding-top": "0",
        "text-align": "center"
      },
      padding: "0px",
      titleStyle: {
        "padding": "5px",
        "fontFamily": () => Heebo.style.fontFamily,
        "font-size": "16px",
        "font-weight": "600",
        "max-height": "100px",
        "overflow": "hidden",
        "text-overflow": "ellipsis",
        "display": "-webkit-box",
        "-webkit-box-orient": "vertical",
        "-webkit-line-clamp": "4",
      }
    },
    topojsonFilter: d => d.id !== "ata",
    total: "Trade Value",
    totalFormat(d) {
      return `Total: ${formatAbbreviate(d)}`;
    },
    linkSize: d => d.strength + 1,
    linkSizeMin: 0,
    linkSizeScale: "identity",
    shapeConfig: {
      Area: {
      },
      Bar: {
        labelConfig: {
          fontSize: () => 13
        },
        strokeWidth: () => 1,
      },
      // fill: findColor,
      labelConfig: {
        fontFamily: () => Heebo.style.fontFamily,
        padding: 5
      },
      Circle: {
        // fill: d => d["Trade Value RCA"] >= -1 ? d["Trade Value RCA"] > 1 ? findColor(d) : CustomColors().gray : findColor(d),
        stroke: "#212831",
        strokeWidth: () => 1,
        labelConfig: {
          fontFamily: Chaney.style.fontFamily,
        },
        label: false
      },
      Line: {
        curve: "monotoneX",
        /* stroke(d) {
          return findColor(d);
        },*/
        strokeWidth: 3,
        strokeLinecap: "round"
      },
      Path: {
        fillOpacity: 1,
        stroke: "#585D6B",
        strokeOpacity: 1
      },
      Rect: {
        labelConfig: {
          fontMin: 6,
          padding: 4,
        }
      }
    },
    timelineConfig: axisStyles,
    zoomScroll: false,
    translate: (key, locale) => d3plusTranslation[key] || key
  }
  ), []);

  return config;
}
