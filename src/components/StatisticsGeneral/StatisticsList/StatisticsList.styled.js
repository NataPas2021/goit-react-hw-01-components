import styled from 'styled-components';

export const InfoBlock = styled.ul`
display: flex;
border-radius: ${p => p.theme.borderRadius};
`

export const ListItem = styled.li`
width: 100%;
height: 100%;
padding: 15px 0px;
border: ${p => p.theme.border.borderList};
`

export const ItemInfo = styled.span `
display: block;
`