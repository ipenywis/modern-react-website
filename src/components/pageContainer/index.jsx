import React, { useEffect } from "react";
import styled from "styles/styled-components";
import { scrollToTop } from "utils/page";

const PageWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export function PageContainer(props) {
  //Make sure always to scroll to top of the page on every page
  useEffect(() => {
    scrollToTop();
  }, []);

  return <PageWrapper>{props.children}</PageWrapper>;
}

export const InnerPageContainer = styled.div`
  flex: 1;
  width: 100%;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  /*min-height Need more testing*/
  min-height: 70vh;
  padding: 1em;
  display: flex;
  flex-direction: column;
`;
