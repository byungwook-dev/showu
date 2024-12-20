import styled from 'styled-components'

const S = {};

  S.RightSection = styled.div`
    width: 800px;

    & .infoTitle {
      font-size: 30px;
      margin: 120px 0 10px 0;
    }
  `

  S.Profile = styled.div`
    display: flex;
    align-items: center;
    gap : 50px;

    margin: 40px 0 50px 0;

    position: relative;

    & img {
          width: 148px;
          height: 148px ;
          border-radius: 50%;
        }

    & p {
      font-size: 23px;
    }

    & .change {
      position: absolute;
      top: 110px;
      left: 110px;

      & .fileInput {
        font-size: 30px;
        line-height: 1;
        text-align: center;

        width: 30px;
        height: 30px;
        border-radius: 50%;

        background-color: #ffd400;
      }
    }
  `

  S.fileInputButton = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    padding: 10px;
    
    position: relative;
    background-color: #ffd400;
    border: none;

    position: absolute;
    top: 100px;
    left: 115px;

    & label {
      display: inline-block;
      cursor: pointer;
    }
    
    & label::after {
      position: absolute;
      content: '+';
      font-size: 24px;
      top: -1px;
      left: 7px;
    }

    & input {
      display: none;      
    }
  `
  
  S.UserChangeWapper = styled.ul`
    display: flex;
    flex-direction: column;
    /* gap: 10px; */

    border-bottom: 0.5px solid #ffd400;

    & li {
      display: grid;
      grid-template-columns: 270px 400px 29px 100px;
      border-top: 0.5px solid #ffd400;
      padding: 25px 0;

      & span{
        font-size: 17px;
        font-weight: 400;
      }
    }

    & li:nth-child(2) {
      justify-content: flex-start;
    }
  `

  S.Input = styled.input`
    width: 400px;
    height: 28px;
    margin-left: auto;

    background-color: #000;
    border-color: #ffd400;
    color: #fff;
    border: none;

    &::placeholder{
      color: #fff;
      font-size: 17px;
      text-align: right;

      padding: 15px;
    }
  `

  S.Button = styled.button`
    background-color: #ffd400;
    color: #000;
    font-size: 15px;
    font-weight: 500;
    border: none;
    border-radius: 50px;
    cursor: pointer;
  `
  S.DelteButton = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 190px;

    & button {
      border: none;
      width: 150px;
      height: 55px;
      border-radius: 50px;
      padding: 10px;
      text-align: center;
      line-height: 2.2;
      background-color: #797979;
      font-size: 17px;
      color: #000;
      cursor: pointer;

      &:hover{
        background-color: #ffd400 !important;
        color: #000;
      }
    }
  `

  S.ChangeButton = styled.div`
    width: 150px;
    height: 55px;
    border-radius: 50px;
    padding: 10px;
    text-align: center;
    line-height: 2.2;
    background-color: #ffd400;
    font-size: 17px;
    color: #000;
    cursor: pointer;
  `


export default S;