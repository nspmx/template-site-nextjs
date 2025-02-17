import {BespokeExplore} from "@datawheel/bespoke/explore";
import {useRouter} from "next/router";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {Container} from "@mantine/core";
import TileWrapper from "../../components/tiles/TileWrapper";
import {exploreTranslations} from "../../helpers/translations";

function ExplorePage() {
  const {locale, query} = useRouter();

  const initialReportId = !isNaN(query.report) ? parseInt(query.report) : undefined;

  return (
    <Container fluid pt="3rem" pb={0}>
      <BespokeExplore
        profilePrefix="/informe"
        locale={locale}
        translations={exploreTranslations}
        reportTile={TileWrapper}
        initialReportId={initialReportId}
        />
    </Container>
  );
}

export const getStaticProps = async ({locale = "es"}) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

ExplorePage.hideFooter = true;

export default ExplorePage;
