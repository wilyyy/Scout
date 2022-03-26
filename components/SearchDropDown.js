import styled from "styled-components";

const DropdownCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    position: absolute;
    right: 0;
    top: 105%;
    width: 250px;
    height: auto;
    background-color: #000;
    padding: 10px;
    z-index: 2;
`;

const SearchDropDown = () => {
    return (
        <DropdownCont>
        </DropdownCont>
    )
}

export default SearchDropDown;
