import {
  Flex, Stack, Text, Group, Loader,
} from "@mantine/core";
import Image from "next/image";
import dwLogo from "../logos/dw.svg";

export default function CustomLoader({duration = 2.8, block = false, height = undefined}) {
  return (
    <Flex
      inset={0}
      pos={!block ? "absolute" : "relative"}
      align="center"
      justify="center"
      sx={{
        zIndex: 100,
      }}
      w={!block ? "100vw" : "100%"}
      h={!block ? "100vh" : height || "100%"}
    >
      <Stack spacing="xs" justify="center">
        <Group spacing="xs">
          <Loader size="sm" />
          <Text c="white" lts={1.2} fw={700} size="xl">Cargando...</Text>
        </Group>
        <Group spacing="xl">
          <Text fw={400}>Desarrollado por</Text>
          <Image alt="Datawheel logo" src={dwLogo} width={30} />
        </Group>
      </Stack>
    </Flex>
  );
}
