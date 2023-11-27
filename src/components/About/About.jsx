import AboutImg from '../../assets/AboutImg.jpg';

import sprite from '../../assets/sprite.svg';

// import './HomePage.css';

import {
  About,
  AboutInfoWrapper,
  Parallax,
  AboutTitle,
  AboutText,
  AboutInfo,
  AboutInfoList,
  AboutInfoItem,
  AboutInfoIcon,
  AboutInfoTitle,
  ParallaxInfo,
  AboutInfoText,
} from './About.styled';

function AboutSection() {
  return (
    <>
      <About>
        <img src={AboutImg} alt="tractor" />
        <AboutInfoWrapper>
          <Parallax>
            <AboutTitle>
              СТВОРЕННЯ НАПРЯМКУ В СІЛЬСЬКОГОСПОДАРСЬКИХ ТЕХНОЛОГІЯХ
            </AboutTitle>
          </Parallax>
          <AboutInfo>
            <AboutText>
              Маючи багаторічний досвід, компанія Гайовик-агро володіє та
              управляє мережею дистрибуції обладнання та послуг у
              сільськогосподарській галузі. Основними партнерами Гайовик-агро є
              відомі бренди, серед яких Claas, Lemken, Kuhn, INA, Timken, SKF,
              Avia, Gates.
            </AboutText>
            <AboutInfoList>
              <AboutInfoItem>
                <ParallaxInfo>
                  <AboutInfoIcon width="24" height="24">
                    <use href={`${sprite}#icon-truck`} />
                  </AboutInfoIcon>
                  <AboutInfoTitle>ШВИДКА ДОСТАВКА</AboutInfoTitle>
                </ParallaxInfo>
                <AboutInfoText>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </AboutInfoText>
              </AboutInfoItem>

              <AboutInfoItem>
                <ParallaxInfo>
                  <AboutInfoIcon width="24" height="24">
                    <use href={`${sprite}#icon-truck`} />
                  </AboutInfoIcon>
                  <AboutInfoTitle>ПЕРСОНАЛЬНІ ЗНИЖКИ</AboutInfoTitle>
                </ParallaxInfo>
                <AboutInfoText>
                  Lorem Ipsum has been the industry`s standard dummy text ever
                  since the 1500s.
                </AboutInfoText>
              </AboutInfoItem>

              <AboutInfoItem>
                <ParallaxInfo>
                  <AboutInfoIcon width="24" height="24">
                    <use href={`${sprite}#icon-truck`} />
                  </AboutInfoIcon>
                  <AboutInfoTitle>НАЙКРАЩА ПІДТРИМКА КЛІЄНТІВ</AboutInfoTitle>
                </ParallaxInfo>
                <AboutInfoText>
                  When an unknown printer took a galley of type and scrambled it
                  to make a type specimen book.
                </AboutInfoText>
              </AboutInfoItem>
            </AboutInfoList>
          </AboutInfo>
        </AboutInfoWrapper>
      </About>
    </>
  );
}

export default AboutSection;
