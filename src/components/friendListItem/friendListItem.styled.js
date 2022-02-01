import styled from 'styled-components';

export const FriendsStatus = styled.span`
  background-color: ${props => (props.isOnline ? 'Green' : 'DarkRed')};
`;
