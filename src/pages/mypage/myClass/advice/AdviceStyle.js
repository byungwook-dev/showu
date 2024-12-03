import styled from 'styled-components';

const S = {};

  S.Table = styled.table`
    margin-top: 40px;
    width: 800px;
    height: auto;
    
  `

  S.Thead = styled.thead`
    font-size: 17px;
    background-color: #ffd400;
    font-weight: 700;
  `

  S.Tr = styled.tr`
    & th {
      color: #333;
      padding: 10px;
    }
  `

  S.Tbody = styled.tbody`
    & td {
      padding: 20px 10px;
    }
  `


export default S;