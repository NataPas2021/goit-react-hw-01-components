import styled from 'styled-components';

export const TableGrid = styled.div`
display: grid;
text-align: center;
grid-template-columns: repeat(auto-fit, minmax(240px auto));
overflow: hidden;
border: ${p => p.theme.border.main};
box-shadow: ${p => p.theme.boxShadow};
border-radius: ${p => p.theme.borderRadius};

`
export const Table = styled.table`
border-spacing: 0;
`

export const TableHeadTitles = styled.th`
width: ${p => p.theme.weight};
height: ${p => p.theme.height};
color: ${p => p.theme.colors.title};
background-color: #45d9cf; 
border: ${p => p.theme.border.borderTableRow};
text-transform: ${p => p.theme.textTransform.uppercase};
`
export const TableRow = styled.tr`
:nth-of-type(2n){
    background-color: ${p => p.theme.backgroundColors.main};
}
`

export const TableItem = styled.td`
weight: ${p => p.theme.weight};
height: ${p => p.theme.height};
border: ${p => p.theme.border.borderTableRow};
text-transform: ${p => p.theme.textTransform.capitalize};
`

