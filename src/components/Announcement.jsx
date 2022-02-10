import styled from "styled-components";

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display:flex;
    align-item: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;

`

const Announcement = () => {
  return (
  <Container>
    Super Deal! Free shipping on order of $50
  </Container>
  )
};

export default Announcement;