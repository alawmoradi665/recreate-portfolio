import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

// import resume from '../../../public/resume.pdf';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome <br />
        I am Alaw [all · love], nice to meet you!
      </SectionTitle>
      <SectionText>
        Current career changer with an endless drive for learning and solving. With a background in diverse roles and environments the keys to success has been my ability to analyse, adapt and engage. 
      </SectionText>
      <a href='resume.pdf' download='resume.pdf'>
        <Button>Resume</Button>
      </a>
    </LeftSection>
  </Section>
);

export default Hero;