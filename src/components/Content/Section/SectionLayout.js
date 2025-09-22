import styled from "@emotion/styled";

const SectionLayout = styled.section`
  display: flex;
  flex-direction: ${({ flexDirection = "column" }) => flexDirection};
  justify-content: ${({ justifyContent = "flex-start" }) => justifyContent};
  align-items: ${({ alignItems = "center" }) => alignItems};
  width: ${({ width = "100%" }) => width};
  box-sizing: border-box;
  flex: none;
  align-self: ${({ alignSelf = "stretch" }) => alignSelf};
  flex-grow: ${({ flexGrow = 0 }) => flexGrow};
  margin: ${({ margin = "0px" }) => margin};
  ${({ marginBottom }) =>
    marginBottom !== undefined
      ? `margin-bottom: ${marginBottom};`
      : "margin-bottom: 200px;"}
  padding: ${({ padding = "0px" }) => padding};
`;

export default SectionLayout;
