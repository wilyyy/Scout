import styled from 'styled-components';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import FavCard from '@/components/FavCard';

const Cont = styled.div`
    box-sizing: border-box;
    width: 800px;
    height: 190px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const FavSection = ({

}) => {
    return (
        <Cont>
            <BsChevronLeft />
            <FavCard />
            <FavCard />
            <FavCard />
            <FavCard />
            <FavCard />
            <BsChevronRight />
        </Cont>
    )
}

export default FavSection;