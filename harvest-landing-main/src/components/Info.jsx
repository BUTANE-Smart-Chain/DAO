import {Column, FarmImage, HarvestProjects, InfoText, InfoContainer, Button, HarvestCircle, HarvestProject, Icon, Money, MoneyImg, Vector, Arrows} from '../styles/infoStyles'
import projects from '../consts/projects'
import {startEarning} from '../consts/links'
import MyImg, {LazyImg} from './MyImg'

export default function Info(){
    return(
        <InfoContainer>
            <Column>
                <h1>
                Empowering Decentralized Governance with $GAS
                </h1>
                <InfoText>The $GAS DAO token is a cornerstone of our decentralized ecosystem.</InfoText>
                <Button href={startEarning}>
                    Buy $GAS
                    <MyImg src="/arrow_right.png" width={13} height={13} alt="Arrow right"/>
                </Button>
            </Column>
            <Column>
                <div className='relativeContainer centerFlex'>
                    <HarvestProjects>
                        <div className='relativeContainer'>
                            <HarvestCircle>
                                <MyImg src="/Bicon.png" width={50} height={50} alt="harvest growth" preload/>
                                <span>GAS</span>
                            </HarvestCircle>
                            {
                                projects.map(({name, imgUrl, dimensions, background, position}) =>
                                    <div key={name} style={{...position[0], position: 'absolute'}}>
                                        <div className='relativeContainer'>
                                            <HarvestProject>
                                                <Icon className='centerFlex' style={background}>
                                                    <LazyImg src={`/projects/${imgUrl}.svg`} {...dimensions.img} alt={name}/>
                                                </Icon>
                                                {name}
                                            </HarvestProject>
                                            <Vector style={{...position[1], ...dimensions.vector}}>
                                                <LazyImg src={`/projects/${imgUrl}-vector.svg`} {...dimensions.vector} alt="vector"/>
                                            </Vector>
                                        </div>
                                    </div>
                                )
                            }
                            <Arrows>
                                <MyImg src="/down_arrow.svg" alt="arrow down"/>
                                <MyImg src="/down_arrow.svg" style={{opacity: 0.7}} alt="arrow down"/>
                                <MyImg src="/down_arrow.svg" style={{opacity: 0.4}} alt="arrow down"/>
                            </Arrows>
                            <Money className='centerFlex'>
                                <MoneyImg className='centerFlex'>
                                    <MyImg src="/money.svg" width={47} height={43} alt="money" />
                                </MoneyImg>
                            </Money>
                        </div>
                    </HarvestProjects>
                </div>
                <FarmImage>
                    <MyImg src="/field.webp" layout="fill" preload/>
                </FarmImage>
            </Column>
        </InfoContainer>
    )
}