import React, { Fragment } from "react";
import data from "./modalData";
import styled from "styled-components";
import LogoCircle from "../logoCircle";

export default function LangModal({ id, attachRef }) {
  return (
    <Fragment>
      <LangModalWrapper ref={attachRef} />
    </Fragment>
  );
}

const LangModalWrapper = styled.div`
  height: 100vh;
  background: linear-gradient(#7d1867, black);
`;
