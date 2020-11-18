import React from 'react';

import { Container, Wrapper, BannerText, BannerImage } from './styles';
import bannerImage from 'assets/images/devices-home.png';

function Banner() {
  return (
    <Container>
      <Wrapper>
        <BannerText>
          <h1>Internet Estável e Veloz de Altíssima Qualidade</h1>
          <p>Conheça nossos planos</p>
        </BannerText>

        <BannerImage src={bannerImage} />
      </Wrapper>
    </Container>
  );
}

export default Banner;
