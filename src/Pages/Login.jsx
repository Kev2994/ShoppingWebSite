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
width: 25%;
padding: 20px;
border-color: white;
`;

const Form = styled.form`
display: flex;
flex-direction: column;
`;

const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`;

const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 10px 0px;
padding: 10px;
`;

const Button = styled.button`
border: none;
width: 40%;
margin: 15px ;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
margin-bottom: 5px;
`;

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;

export const Login = () => {
return (
<Container>
<Wrapper>
        <Title> SIGN IN</Title>
        <Form>
            <Input placeholder="User name" /> 
            <Input placeholder="Password" />       
           
            <Button> LOGIN</Button>
            <Link> DO YOU REMEMBER THE PASSWORD? </Link>
            <Link> CREATE A NEW ACCOUNT </Link>
        </Form>
    </Wrapper>
</Container>
);
};

export default Login;