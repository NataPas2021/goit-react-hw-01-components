import styled from 'styled-components';

export const ListWrapper = styled.ul `
display: flex;
width: 150px;
height: 60px; 
margin: 0 auto;
margin-bottom: 10px;
padding: 10px;
align-items: center;
gap: 10px;
border: 2px solid grey;
background-color: ${p => p.theme.colors.title};
border-radius: 5px;
box-shadow: ${p => p.theme.boxShadow};
`