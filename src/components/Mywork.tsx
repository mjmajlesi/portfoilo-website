import styled from "styled-components";
import imgwork from "../assets/download.svg";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import { StyleSvg } from "./About";
import Container from "./Container";

const Mywork = () => {
  return (
    <div id="work">
      <Container>
        <div className="title-work relative flex flex-col items-center justify-center">
          <h2 className="text-4xl z-10 font-medium">My Work</h2>
          <StyleSvg>
            <image height={150} width={130} href={imgwork} />
          </StyleSvg>
        </div>
        <div className="work my-24 flex items-center justify-around">
          <div className="flex flex-col items-center justify-center w-[600px]">
            <ImgHover src={image1} alt="project1" />
            <h3 className="text-2xl font-semibold my-7">Store Website</h3>
            <p className="text-xl font-medium">
              I tried to complete this project by using the popular JavaScript
              framework , Reactjs and by using the TypeScript language, Tailwind
              framework, and Material UI.
            </p>
            <a
              className=" text-center my-3 text-xl font-medium bg-gradient-to-r from-[#1d1d9a] to-[#1e98d5] bg-clip-text text-transparent"
              href="https://github.com/mjmajlesi/storeWebsite"
              target="_blank"
            >
              info more
            </a>
          </div>
          <div className="w-[600px] flex flex-col items-center justify-center">
            <ImgHover src={image2} alt="project2" />
            <h3 className="text-2xl font-semibold my-7">Recipe Website</h3>
            <p className="text-xl font-medium">
              I tried to complete this project by using the popular JavaScript
              framework , Reactjs and by using the TypeScript language, Tailwind
              framework and Lottiefiles animations. <br />
            </p>
            <a
              className=" text-center my-3 text-xl font-medium bg-gradient-to-r from-[#1d1d9a] to-[#1e98d5] bg-clip-text text-transparent"
              href="https://github.com/mjmajlesi/resipe-website"
              target="_blank"
            >
              info more
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

const ImgHover = styled.img`
  border-radius: 10px;
  box-sizing: border-box;
  transition: 0.3s;
  &:hover {
    transform: scale(1.05);
    transition: 0.3s;
    border: 4px solid #1e98d5;
  }

`

export default Mywork;
