import styled from "styled-components";

export const ProfileWrapper = styled.div`
    width: 240px;
    height: 100%;
    text-align: center;
    overflow: hidden;
    border: ${p => p.theme.border.borderTableRow};
    border-radius: ${p => p.theme.borderRadius};
    box-shadow: ${p => p.theme.boxShadow};
`;

export const UserInfo = styled.div`
margin: 0;
background-color: ${p => p.theme.colors.title};
`
export const UserImage = styled.img`
padding: 20px 0;
`
export const UserData = styled.div`
margin: 0;
padding-bottom: 20px;
`
export const DataItem = styled.p`
:first-child {
    font-weight: bold;
    font-size: 20px;
}
:not(:last-child) {
    padding-bottom: 10px;
}
`

export const StatsList = styled.ul`
width: 100%;
display: flex;
justify-content: center;
`