import Header from "components/Header/Header";
import Layout from "components/Layout/Layout";
import styled from "styled-components";

const Container = styled.div`
  background: #f6d8ac;
  height: 100%;
`;

const Page2 = () => {
  return (
    <Layout>
      <Container>
        <h1>Page 2</h1>
      </Container>
    </Layout>
  );
};

export default Page2;
