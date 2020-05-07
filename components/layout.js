import styled from "@emotion/styled";
import {Box} from "@chakra-ui/core";

import Header from "./header";

export default function Layout({ children }) {
  return <Container>
    <Header />
    {children}
  </Container>
}

const Container = styled(Box)``;

Container.defaultProps = {
  mx: "auto",
  mt: 8,
  p: 8,
  maxW: "4xl",
  bg: "white",
  borderRadius: 16,
}
