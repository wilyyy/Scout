import styled from "styled-components";
import { BsBookmarkCheckFill, BsBookmark } from 'react-icons/bs';
import { Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { useTheme } from "@/utils/ScoutThemeProvider";
import Button from "./Button";
import { ThemeConfig } from "@/utils/ThemeConfig";
import { useState } from 'react';

const Container = styled.div`
    width: 80%;
    height: 494px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-family: "Poppins";
    font-weight: 400;
    padding: 0 5%;
    margin-bottom: 100px;
`;

const ImgCont = styled.div`
    width: 100%;
    height: 494px;
    overflow: hidden;
    background-image: url(${props=>props.bgimage});
    background-position: top center;
    background-repeat: no-repeat;
    border-radius: 16px;
    padding: 25px;
    display: flex;
    align-items: flex-end;
`;

const BlurCont = styled.div`
    height: 200px;
    width: 100%;
    backdrop-filter: blur(89.4px);
    background: rgba(196, 196, 196, 0.1);
    border-radius: 16px;
    padding: 18px 39px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Title = styled.div`
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 24px;
    line-height: 31px;
    color: white;
    margin-bottom: 16px;
`

const BottomText = styled.div`
    font-family: 'Poppins';

    font-size: 21px;
    line-height: 31px;
    color: ${props=>props.textcolor};
`

const Description = styled.div`
    font-family: 'Poppins';
    font-size: 21px;
    font-weight: 300;
    line-height: 28px;
    color: white;
`

const Bookmark = styled.div`
    position: absolute;
    right: 25px;
`

const Row = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
align-items: flex-end;
`

const MySlide = ({
    bgimage = "test_demonslayer.jpg",
    titletext1 = "Default",
    desctext1 = "Default",
    bottext = "Default",
    curEp = "##",
    totEp = "##",
    slideIndex = 1
}) => {

  const [favourite, setFavourite] = useState(false);

  return(
    <Slide index={slideIndex} className="slide">
      <ImgCont bgimage={bgimage}>
          <BlurCont>
              <Title>{titletext1}</Title>
              <Description>{desctext1}</Description>
              <Bookmark>
                  {favourite === true ? (<BsBookmarkCheckFill size="45px"  />) : (<BsBookmark size="45px"/>) }
              </Bookmark>
              <Row>
                  <BottomText textcolor="white">
                      {bottext} | Episode {curEp}/{totEp}
                  </BottomText>
                  <Button btnText="Continue" />
              </Row>
          </BlurCont>
      </ImgCont>
  </Slide>
  )
}

export default MySlide;

//Original Template
                    {/* <Slide index={0} className="slide">
                        <ImgCont bgimage={bgimage}>
                            <BlurCont>
                                <Title>{titletext1}</Title>
                                <Description>{desctext1}</Description>
                                <Bookmark>
                                    {favourite === true ? (<BsBookmarkCheckFill size="45px"  />) : (<BsBookmark size="45px"/>) }
                                </Bookmark>
                                <Row>
                                    <BottomText textcolor="white">
                                        {bottext} | Episode {curEp}/{totEp}
                                    </BottomText>
                                    <Button btnText="Continue" />
                                </Row>
                            </BlurCont>
                        </ImgCont>
                    </Slide>
                    <Slide index={1} className="slide">
                        <ImgCont bgimage={bgimage}>
                            <BlurCont>
                                <Title>{titletext1}</Title>
                                <Description>{desctext1}</Description>
                                <Bookmark>
                                    {favourite === true ? (<BsBookmarkCheckFill size="45px"  />) : (<BsBookmark size="45px"/>) }
                                </Bookmark>
                                <Row>
                                    <BottomText textcolor="white">
                                        {bottext} | Episode {curEp}/{totEp}
                                    </BottomText>
                                    <Button btnText="Continue" />
                                </Row>
                            </BlurCont>
                        </ImgCont>
                    </Slide>
                    <Slide index={2} className="slide">
                        <ImgCont bgimage={bgimage}>
                            <BlurCont>
                                <Title>{titletext1}</Title>
                                <Description>{desctext1}</Description>
                                <Bookmark>
                                    {favourite === true ? (<BsBookmarkCheckFill size="45px"  />) : (<BsBookmark size="45px"/>) }
                                </Bookmark>
                                <Row>
                                    <BottomText textcolor="white">
                                        {bottext} | Episode {curEp}/{totEp}
                                    </BottomText>
                                    <Button btnText="Continue" />
                                </Row>
                            </BlurCont>
                        </ImgCont>
                    </Slide> */}