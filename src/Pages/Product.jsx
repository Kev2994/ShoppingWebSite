import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Container = styled.div`

`;

const Wrapper = styled.div`
    padding: 20px;
    display: flex;
`;

const ImgContainer = styled.div`
    flex:1;
`;

const Image = styled.img`
    width:100%;
    height: 90vh;
    object-fit: cover;
`;

const InfoContainer = styled.div`
    flex:1;
    padding: 0px 50px;
`;

const Title = styled.h1`
    font-weight: 200;

`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    display:flex;
    align-items: center;
`;

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #${props => props.color};
    margin: 0px 5px;
    cursor: pointer;
`;

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;

`;

const FilterSizeOption = styled.option`
    
`;

const AddContainer = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: space-between;
`;

const AmountContainer = styled.div`
    display:flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

const Button = styled.button`
    padding: 15px;
    border: 1px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: teal ;
    }
`;
export const Product = () => {
    return (
    <Container>
       <Navbar />
       <Announcement />
       <Wrapper>
           <ImgContainer>
               <Image src="https://t3.ftcdn.net/jpg/03/26/77/12/360_F_326771205_9vwwoe2c4Lobu4IQVLfE2LFoUFZ7UgxU.jpg" />
           </ImgContainer>
           <InfoContainer>
               <Title> Denim Jumpsuit </Title>
               <Desc> This one is highest selling brand</Desc>
               <Price> $ 200</Price>
               <FilterContainer>
                   <Filter>
                       <FilterTitle> Color</FilterTitle> 
                       <FilterColor color="black" />
                       <FilterColor color="darkblue" />
                       <FilterColor color="gray" />
                    </Filter>
                    <Filter>
                       <FilterTitle> Size</FilterTitle> 
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
               </FilterContainer>
               <AddContainer>
                   <AmountContainer>
                       <Remove />
                       <Amount> 1 </Amount>
                       <Add />
                   </AmountContainer>
                   <Button> ADD TO CART </Button>
               </AddContainer>
           </InfoContainer>
       </Wrapper>
       <Newsletter />
       <Footer />
    </Container>
    );
  };

  export default Product; 