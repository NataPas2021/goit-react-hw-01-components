import styled from 'styled-components';

export const StatsInfo = styled.li`
display: block;
width: 100%;
padding: 20px 0px;
justify-content: center;
align-items: center;
background-color: #befaf6;
border: ${p => p.theme.border.borderList};
`
export const StatsItem = styled.span`
display: block;
:last-child {
    font-weight: bold;
}
`