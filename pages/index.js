import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
// import BoxWithStyledComponents from "@/components/BoxWithStyledComponents/BoxWithStyledComponents.js";
import StyledBox from "@/components/BoxWithStyledComponents/BoxWithStyledComponents.js";
import styled from "styled-components";

export default function HomePage() {
  return (
    <StyledLayout>
      <div>
        <BoxWithClassName />
        <BoxWithClassName isBlack />
      </div>
      <div>
        <StyledBox $isBlack />
        <StyledBox />
      </div>
    </StyledLayout>
  );
}

const StyledLayout = styled.div`
  display: flex;
`;
