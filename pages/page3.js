import Header from "components/Header/Header";
import Layout from "components/Layout/Layout";
import styled from "styled-components";

const Container = styled.div`
  background: #db9833;
  height: 100%;
`;

const Page3 = () => {
  return (
    <Layout>
      <Container>
        <h1>Page 3</h1>
      </Container>
    </Layout>
  );
};

export default Page3;
