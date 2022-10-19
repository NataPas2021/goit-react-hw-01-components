import styled from "styled-components";

export const WrapperStatistics = styled.section`
margin: 0 auto;
width: 400px;
height: 100%;
justify-content: center;
text-align: center;
overflow: hidden;
border-radius: ${p => p.theme.borderRadius};
box-shadow: ${p => p.theme.boxShadow};
border: ${p => p.theme.border.borderTableRow};
`
export const TitleContainer = styled.div`
margin: 0;
background-color: ${p => p.theme.colors.title};
`

export const Title = styled.h2`
padding: 30px;
text-transform: ${p => p.theme.textTransform.uppercase};
border: ${p => p.theme.border.borderList};
`