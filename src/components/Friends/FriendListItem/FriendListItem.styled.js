import styled from 'styled-components';

export const IconStatus = styled.span`
color: ${(p => {
    return p.isOnline ? p.theme.colors.online : p.theme.colors.offline
})}
`