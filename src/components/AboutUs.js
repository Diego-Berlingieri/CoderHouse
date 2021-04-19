import { Container } from 'react-bootstrap'
import '../styles/aboutUs.css';

import {useContext} from 'react';
import {LangContext} from './Context/LangContext';

function AboutUs () {
  const {lang} = useContext(LangContext);
  
  return(
    <Container>
      <h2>{lang.aboutus_text}</h2>
    </Container>
  );
}
export default AboutUs;
