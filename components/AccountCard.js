import styled from 'styled-components';
import { useTheme } from '../utils/ScoutThemeProvider';
import { ThemeConfig } from '../utils/ThemeConfig';

import { Twitter } from '@styled-icons/boxicons-logos/Twitter';
import { RedditAlien } from '@styled-icons/fa-brands/RedditAlien';
import { DiscordAlt } from '@styled-icons/boxicons-logos/DiscordAlt';
import { InstagramAlt } from '@styled-icons/boxicons-logos/InstagramAlt';


const AccountCont = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 600px;
    width: 350px;
    border-radius: 15px;
    background-color: ${props=>props.backgroundColor};
    font-family: ${props=>props.fontFamily};
`;

const UserImage = styled.img`
    height: 155px;
    width: 155px;
    margin-top: 63px;
    margin-bottom: 7px;
    border-radius: 50%;
`;

const NameCont = styled.div`
    width: 285px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const Header = styled.h4`
    font-size: 24px;
    color: ${props=>props.textColor};
    font-weight: 300;
    font-family: ${props=>props.headerFont};
    margin: 0;
`
const InfoCont = styled.div`
    display: flex;
    margin-top: 30px;
    width: 285px;
`;

const InfoText = styled.div`
    font-size: 12px;
    color: ${props=>props.textColor};
    font-weight: 400;
    font-family: ${props=>props.infoFont};
`;

const MemConst = styled.div`
    display: flex;
    margin-top: 48px;
`;

const Member = styled.div`
    font-size: 12px;
    color: ${props=>props.textColor};
    font-weight: 300;
    font-family: ${props=>props.headerFont};
`

const MediaBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    background: rgba(196, 196, 196, 0.1);
    box-shadow: inset 0.8px -0.8px 0.8px rgba(165, 165, 165, 0.4), inset -0.8px 0.8px 0.8px rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(8px);
    border-radius: 10px;
    flex-direction: row;
    display: flex;
    justify-content: space-around;
`;

const MediaCont = styled.div`
    flex-direction: row;
    display: flex;
    justify-content: space-around;
    width: 350px;
    margin-top: 38px;
    margin-bottom: 20px;
`;

const AccountCard = ({

    src= "/anime.png",
    cardName = "STEVEN WANG",
    cardInfo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus ornare feugiat dolor elit felis, ultrices. Sed lectus magna morbi gravida nunc, praesent. Mattis molestie pharetra aliquam morbi. Commodo fames id morbi semper vitae morbi accumsan. Rhoncus lorem sed turpis lorem enim, lorem augue scelerisque. Pulvinar sit nunc, arcu, at eu fames eleifend. Diam viverra pellentesque aliquet in id sit donec viverra. Ullamcorper in velit magna id odio amet, id duis. Lacus viverra egestas quisque mauris sollicitudin.",
    infoFont = "Roboto",
    memberYear = "2016",
    width = "40px",
    height = "40px",
    fontFamily = "Poppins-Regular"
    
    // memberInfo = "Member since 2018",
}) => {

    const { theme } = useTheme();

    return (
        <AccountCont backgroundColor={ThemeConfig[theme].cardBackground} fontFamily={fontFamily} >
            <UserImage src={src}/>
            <NameCont>
                <Header  fontFamily={fontFamily} textColor={ThemeConfig[theme].cardHeader} > {cardName} </Header>
            </NameCont>
            <InfoCont>
                <InfoText fontFamily={infoFont} textColor={ThemeConfig[theme].cardHeader} > {cardInfo} </InfoText>
            </InfoCont>
            <MemConst>
                <Member fontFamily={fontFamily} textColor={ThemeConfig[theme].text} > Member since {memberYear} </Member>
            </MemConst>
            <MediaCont>
                <MediaBox>
                    <RedditAlien width={width} height={height} />
                </MediaBox>
                <MediaBox>
                    <Twitter width={width} height={height}/>
                </MediaBox>
                <MediaBox>
                    <DiscordAlt width={width} height={height}/>
                </MediaBox>
                <MediaBox>
                    <InstagramAlt width={width} height={height}/>
                </MediaBox>
            </MediaCont>
        </AccountCont>
    )
}

export default AccountCard;