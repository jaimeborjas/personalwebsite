import React from 'react'
import { MaincontentContainer,
     ImageContainter,
     TextContainer,
     SubTitle,
     MainTitle,
     TitleContainer,
     MainImage
} from './MaincontentElements'


const Maincontent = ({image}) => {
    return (
        <>
            <MaincontentContainer>
                <TextContainer>
                    <TitleContainer>
                        <MainTitle>Hello World</MainTitle>
                        <SubTitle> I am jaime</SubTitle>
                    </TitleContainer>    
                </TextContainer>
                <ImageContainter>
                    <TitleContainer>
                    <MainImage />
                    </TitleContainer>
                </ImageContainter>
            </MaincontentContainer>
        </>
    )
}

export default Maincontent
