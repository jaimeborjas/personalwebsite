import styled from 'styled-components'
import { ReactComponent as SVGImage} from '../../pictures/svg-1.svg'

export const MaincontentContainer = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    position: absolute;
    grid-template-columns: 10% 40% 40% 10% ;
    grid-template-rows: 100% ;
    @media screen and (max-width: 768px){
        display: flex;
        flex-wrap: wrap;
        transition: all 0.4s ease-in-out;
    }
`
export const MainImage = styled(SVGImage)`
    width: 100%;
`
export const ImageContainter = styled.div`
    grid-column-start: 3;
    grid-column-end: 4;

    @media screen and (max-width: 768px){
        width: 100%;
    }
`

export const TextContainer = styled.div`
    width: 100%;
    grid-column-start: 2 ;
    grid-column-end: 3 ;
    @media screen and (max-width: 768px){
        height: 40%;
    }
`
export const TitleContainer = styled.div`
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 80%;
    padding: 50px;
    flex-wrap: wrap;
    @media screen and (max-width: 768px){
        height: 100%;
        padding: 0px 50px;
    }
`
export const MainTitle = styled.h1`
    text-align: center;
`

export const SubTitle = styled.h4`
text-align: center;
`
