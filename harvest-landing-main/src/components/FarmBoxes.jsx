import {Container, Box, Icon, Background, Title, Text, Button} from '../styles/farmBoxesStyles'
import {LazyImg} from './MyImg'
import {exploreFarm, exploreOpportunites} from '../consts/links'

export default function FarmBoxes(){
    return(
        <Container>
            <Box>
                <Background>
                    <LazyImg src="/farm_token.svg" layout='fill' alt="farm background"/>
                </Background>
                <Icon className='centerFlex'>
                    <LazyImg src="/Bicon.png" width={30} height={30} alt="tractor"/>
                </Icon>
                <Title>
                    $GAS TOKEN
                </Title>
                <Text>
                    $GAS is the heart of Butane. It allows you to capitalize on the growth and success of our platform.
                </Text>
                <Button href={exploreFarm}>Explore $GAS</Button>
            </Box>
            <Box>
                <Background>
                    <LazyImg src="/Bicon.png" layout='fill' alt="farm background"/>
                </Background>
                <Icon className='centerFlex'>
                    <LazyImg src="/vegetables.svg" width={30} height={30} alt="vegetables in the box"/>
                </Icon>
                <Title> 
                    CONTRIBUTE AND EARN
                </Title>
                <Text>
                    Butane is platform made for and run by the community. Join us on this adventure and find your place!
                </Text>
                <Button href={exploreOpportunites}>Explore Opportunites</Button>
            </Box>
        </Container>
    )
}