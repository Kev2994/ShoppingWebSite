import styled from "styled-components";



const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: url("https://c8.alamy.com/comp/K28BAN/fashion-shopping-background-clothes-and-accessories-doodle-hand-drawnvector-K28BAN.jpg") ;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    border-color: white;
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;

const Agreement = styled.span`
    font-size: 20px;
    margin: 20px 0px;
`;

const Button = styled.button`
    border: none;
    width: 40%;
    margin: 15px ;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;

export const Register = () => {
return (
<Container>
    <Wrapper>
        <Title> CREATE AN ACCOUNT</Title>
        <Form>
            <Input placeholder="name" /> 
            <Input placeholder="last name" /> 
            <Input placeholder="email" /> 
            <Input placeholder="username" /> 
            <Input placeholder="password" /> 
            <Input placeholder="confirm password" /> 
            <Agreement> Please read it carefully and sign it to approve all the terms and conditions.</Agreement>
            <Button> CREATE ACCOUNT</Button>
        </Form>
    </Wrapper>
</Container>
);
};

export default Register;