import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState } from 'react';

import { BsBookmarkCheckFill, BsBookmark } from 'react-icons/bs';
import { useTheme } from '../utils/ScoutThemeProvider';
import { ThemeConfig } from '../utils/ThemeConfig';
import { HoverZoom } from "../utils/Animations";

const CardCont = styled(motion.div)`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 125px;
  height: 150px;
  border-radius: 16px;
  padding: 10px;
  cursor: pointer;
  border: 1px solid #6D7992;
  background: ${props=>props.bgcolor};
  backdrop-filter: blur(5px) saturate(164%);
  -webkit-backdrop-filter: blur(5px) saturate(164%);
  font-family: ${props=>props.fontFamily};
`

const CardImage = styled.img`
  width: 100%;
  height: 280px;
  border-radius: 16px;
  margin-bottom: 10px;
  object-fit: cover;
  object-position: top center;

`

const DetailCont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: #FFFFFF;
  font-size: 12px;
`

const TextCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`

function truncateString(string, limit) {
  if (string.length > limit) {
    return string.substring(0, limit) + "..."
  } else {
    return string
  }
}

const FavCard = ({
  img_url = "/anime.png",
  fontFamily = "Poppins",
  onButtonClick,
}) => {

  const { theme } = useTheme();
  return (
    <CardCont 
      fontFamily={fontFamily}
      onClick={onButtonClick}
      whileHover={{scale: 1.1}}
      whileTap={{scale: 0.96}}
      transition={HoverZoom.spring}
      bgcolor={ThemeConfig[theme].cardBackground}
    >
      <CardImage src={img_url} alt="anime image"/>
      <TextCont>
        <DetailCont>
          Tokyo Ghoul
        </DetailCont>
      </TextCont>
    </CardCont>
  )
}

export default FavCard;