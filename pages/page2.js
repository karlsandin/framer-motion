import Header from "components/Header/Header";
import Layout from "components/Layout/Layout";
import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled.div`
  background: #f6d8ac;
  height: 100%;
`;

const Cubes = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
`;

const Cube = styled(motion.div)`
  height: 200px;
  width: 20%;
  background: red;
  &:nth-child(odd) {
    background: blue;
  }
`;

const Page2 = () => {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { x: -100, opacity: 0 },
    show: { x: 0, opacity: 1 },
  };
  return (
    <Layout>
      <Container>
        <h1>Page 2</h1>
        <Cubes variants={container} initial="hidden" animate="show">
          {[...Array(10).keys()].map((n) => (
            <Cube
              variants={item}
              key={n}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
            >
              {n}
            </Cube>
          ))}
        </Cubes>
      </Container>
    </Layout>
  );
};

export default Page2;
