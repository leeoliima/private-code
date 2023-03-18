import ReactModal from "react-modal";
import styled from "styled-components";

export const ContainerBody = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 1636px;
  height: 1042px;
  left: 45px;
  top: 38px;
  background: #F0F4F5;
  border: 1px solid #ffffff;
  box-shadow: 0px 2.88px 8px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
`;

export const ContainerInput = styled.section`
  box-sizing: border-box;
  position: absolute;
  width: 1213px;
  height: 127px;
  left: 45px;
  top: 38px;

  background: #ffffff;
  border: 0.906103px solid #ffffff;
  box-shadow: 0px 2.60958px 7.24883px rgba(0, 0, 0, 0.08);
`;

export const SearchButton = styled.button`
  img {
    position: absolute;
    width: 63.01px;
    height: 52.14px;
    left: 498px;
    top: 34px;
    cursor: pointer;
    border-radius: 0px 4px 4px 0px;
  }
`;
export const Search = styled.img`
  position: absolute;
  left: 29.14%;
  right: 69.29%;
  top: 7.78%;
  bottom: 89.78%;
  background: #ffffff;
`;

export const Cards = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 00px 0px 0px 20px;
  width: 200.61px;
  height: 225.24px;
  background: #ffffff;
  border: 0.895602px solid #ffffff;
  box-shadow: 0px 2.57933px 7.16482px rgba(0, 0, 0, 0.08);
  border-radius: 5.37361px;
  text-align: center;
`;

export const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 290px 49px 540px 49px;
  width: 100%;
  height: 195.24px;
  padding: 50px;
`;

export const ImgCards = styled.img`
  position: absolute;
  margin: 290px 49px 540px 49px;
  height: 295.24px;
  padding: 50px;
`;

export const LegendProduct = styled.div`
  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 16.5384px;
  line-height: 150%;
  align-items: center;
  text-align: center;
  color: #515151;
`;

export const ArrowLeft = styled.img`
  position: absolute;
  left: 2.5%;
  right: -12.5%;
  top: 25%;
  bottom: 50%;
  transform: rotate(360deg);
`;

export const ArrowRight = styled.img`
  box-sizing: border-box;
  position: absolute;
  right: 2.5%;
  top: 25%;
  bottom: 50%;
`;

export const ContainerCategories = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 1073px;
  height: 105px;
  left: 94px;
  top: 196px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border: 0.906103px solid #ffffff;
  box-shadow: 0px 2.60958px 7.24883px rgba(0, 0, 0, 0.08);
  border-radius: 5.43662px;
`;

export const Categories = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  align-items: center;
  color: #696969;
  margin: 20 20px 0 20px;
  span {    
    width: 34px;
    height: 0px;
    left: 265px;
    top: 266px;
    border: 0.530753px solid #ececec;
    transform: rotate(90deg);
  }
`;

export const CardTitle = styled.h5`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  background-color: #ddd;
  padding: 20px;
`;

export const CardDescription = styled.p`
  padding: 10px;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const CardPrice = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

export const CustomModal = styled(ReactModal)`
  box-sizing: border-box;
  font-size: 16px;
  position: absolute;
  width: 1111px;
  height: 630px;
  left: 275px;
  top: 199px;  
  background-color:#fff;
  border: 1px solid #ffffff;
  box-shadow: 0px 2.88px 8px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
`;

export const ImgPopUp = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const DivInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CategoryMenu = styled.div`
  display: flex;
  overflow: hidden;
  flex-wrap: nowrap;  
  transition: transform 0.3s ease;
  transform: translateX(${props => props.position}px);
 
`;

export const ArrowButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 0 10px;
`;

export const User = styled.div`
  box-sizing: border-box;
  /* position: absolute; */
  width: 1213px;
  height: 122px;
  left: 45px;
  top: 958px;
  background: #FFFFFF;
  border: 0.906103px solid #FFFFFF;
  box-shadow: 0px 2.60958px 7.24883px rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const UserImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 30px;
`;

export const UserName = styled.p`
  width: 161px;
  height: 22px;
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 110.9%;
  display: flex;
  align-items: center;
  text-align: center;
  color: #696969;
`;
