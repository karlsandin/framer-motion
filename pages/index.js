import Header from "components/Header/Header";
import { motion } from "framer-motion";
import styled from "styled-components";
import Layout from "components/Layout/Layout";

const Container = styled.div`
  background: #7e9a9a;
  height: 100%;
`;

export default function Home() {
  return (
    <Layout>
      <Container>
        <h1>Index</h1>
      </Container>
    </Layout>
  );
}
