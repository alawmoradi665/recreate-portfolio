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
        Previous Teacher - Current Fullstack developer <br />Driven by problem solving, learning and educating.   
      </SectionText>
      <a href='resume.pdf' download='resume.pdf'>
        <Button>Resume</Button>
      </a>
    </LeftSection>
  </Section>
);

export default Hero;