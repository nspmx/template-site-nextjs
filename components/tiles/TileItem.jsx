import {useMemo} from "react";
import {
  BackgroundImage, Flex, Paper, Stack, Text, Image, Badge,
  Box,
} from "@mantine/core";
import Link from "next/link";

function getSectionFromHSCode(hsCode, level) {
  // Ensure the HS code is a positive integer
  hsCode = Math.abs(parseInt(hsCode));

  // Determine the divisor based on the specified level
  let divisor;
  switch (level) {
      case 'HS2':
          divisor = Math.pow(10, 2);
          break;
      case 'HS4':
          divisor = Math.pow(10, 4);
          break;
      case 'HS6':
          divisor = Math.pow(10, 6);
          break;
      default:
          console.error('Invalid level. Supported values are "hs2", "hs4", or "hs6".');
          return null;
  }

  // Extract the first two digits of the HS code to determine the section
  const section = Math.floor(hsCode / divisor);

  // Return the section ID
  return section;
}

function TileItem(props) {
  const {
    background, isLarge = false, isRect = false, link = "#", title, id, subtitle, onClick = () => false,
  } = props;

  const isHS = useMemo(() => link.indexOf("/informe/producto") === 0, [link]);

  const iconUrl = useMemo(() => {
    let iconPath = "/images/icons/"
    switch(subtitle) {
      case "Comunidad Autónoma":
        iconPath += `subnational/communities/${id}.webp`;
        break;
      case "Provincia":
        iconPath += `subnational/provinces/${id}.webp`;
        break;
      case "País":
        iconPath += `country/country_${id.slice(2,5)}_circle.png`;
        break;
      case "Sección":
        iconPath += `hs/hs_${id}_black.svg`;
        break;
      case "HS2":
      case "HS4":
      case "HS6":
        const sectionId = getSectionFromHSCode(id, subtitle);
        iconPath += `hs/hs_${sectionId}_black.svg`;
        break;
      default:
        iconPath += "hs/hs_20_black.svg";
        break;
    }

    return iconPath;
  }, [subtitle, id]);

  const finalSubtitle = useMemo(() => {
    let finalText = subtitle;
    switch(subtitle) {
      case "Comercio":
        finalText = "Datos de comercio";
        break;
      case "País":
        finalText = "Ficha de país";
        break;
    }

    return finalText;
  }, [subtitle]);

  return (
    <Link
      prefetch={false}
      href={link}
      style={{textDecoration: "none"}}
      onClick={onClick}
    >
      <Paper
        miw={200}
        radius={isRect ? 0 : "md"}
        sx={(theme) => ({
          textDecoration: "none",
          boxShadow: "0px 2px 5px 0px rgba(0, 0, 0, 0.3)",
          textDecoration: "none",
          "&:hover": {
            textDecoration: "none",
          },
          [theme.fn.smallerThan("md")]: {
            width: "100%",
          },
        })}
      >
        <BackgroundImage
          pos="relative"
          radius={isRect ? 0 : "md"}
          src={background}
          sx={{
            // filter: "grayscale(100%)",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            backgroundSize: isLarge ? "cover" : "100%",
            transition: "all 1s",
            zIndex: 2,
            "&::before": {
              borderRadius: isRect ? 0 : 4,
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "block",
              content: "\"\"",
              zIndex: "-1",
              backgroundImage: `
              linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.8) 20%, rgba(0, 0, 0, 0.1) 100%);
            `,
            },
            "&:hover": {
              backgroundSize: isLarge ? "cover" : "110%",
            },
          }}
        >
          <Flex
            justify="center"
            align="flex-end"
            h={200}
            p={20}
            sx={{
              // filter: "grayscale(0%)",
            }} 
          >
            <Stack noWrap align="center" spacing={5}>
              {id
                && 
                <Box
                  h={40}
                  w={40}
                  p={isHS ? 3 : 0}
                  sx={(theme) => ({
                    borderRadius: "50%",
                    backgroundColor: theme.colors["accent-shade"][6],
                  })}
                >
                  <Image
                    src={iconUrl}
                    width="100%"
                    height="100%"
                    alt={`${title} icon`}
                    imageProps={{
                      loading: "lazy"
                    }}
                  />
                </Box>
              }
              <Text
                c="white"
                fw={700}
                fz={24}
                lh={1.2}
                lineClamp={2}
                mb={0}
                align="center"
              >
                {title}
              </Text>
              <Badge variant="filled" c={"black"}>{finalSubtitle}</Badge>
            </Stack>
          </Flex>
        </BackgroundImage>
      </Paper>
    </Link>
  );
}

export default TileItem;
