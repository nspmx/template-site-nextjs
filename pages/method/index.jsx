import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {Container, Title, Text} from "@mantine/core";
import {useTranslation} from "next-i18next";

function MethodPage() {
  
  const {t} = useTranslation("method");

  return (
    <Container pt="3rem" pb={0} mih="90vh">
      <Title>{t("title")}</Title>
      <Text>{t("desc")}</Text>
    </Container>
  );
}

export const getStaticProps = async ({locale = "en"}) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "method"])),
  },
});

export default MethodPage;
