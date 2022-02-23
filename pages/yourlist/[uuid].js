//use uuid to generate user personal list?

import axios from "axios";
import styled from "styled-components";
import {useRouter} from 'next/router';

const YourList = () => {
    const router = useRouter();
    const {uuid} = router.query;
    
    return (
        <>
        </>
    )
}

export default YourList;