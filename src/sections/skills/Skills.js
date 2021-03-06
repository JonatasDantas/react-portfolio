import Slider from 'react-slick';
import { isMobile } from 'react-device-detect';

import JavascriptLogo from '../../assets/img/javascript.png';
import AngularLogo from '../../assets/img/angular.png';
import ReactLogo from '../../assets/img/react.png';
import VueLogo from '../../assets/img/vue.png';
import NodeLogo from '../../assets/img/nodejs.png';
import JavaLogo from '../../assets/img/java.png';
import SpringBootLogo from '../../assets/img/spring-boot.png';
import IonicLogo from '../../assets/img/ionic.png';
import FlutterLogo from '../../assets/img/flutter.png';
import SQLLogo from '../../assets/img/sql.jpg';
import DockerLogo from '../../assets/img/docker.png';
import LinuxLogo from '../../assets/img/linux.jpg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Skill.scss';

function Skills() {
  const settings = {
    dots: true,
    infinite: true,
    speed: !isMobile ? 2500 : 1500,
    arrows: true,
    slidesToShow: !isMobile ? 6 : 3,
    slidesToScroll: !isMobile ? 6 : 3,
    autoplay: true,
    autoplaySpeed: !isMobile ? 5000 : 2000,
    draggable: false,
  };

  const skills = [
    {
      name: 'Javascript',
      logo: JavascriptLogo,
    },
    {
      name: 'Angular',
      logo: AngularLogo,
    },
    {
      name: 'React & React Native',
      logo: ReactLogo,
    },
    {
      name: 'Vue.js',
      logo: VueLogo,
    },
    {
      name: 'Node.js',
      logo: NodeLogo,
    },
    {
      name: 'Java',
      logo: JavaLogo,
    },
    {
      name: 'Spring Boot',
      logo: SpringBootLogo,
    },
    {
      name: 'Ionic',
      logo: IonicLogo,
    },
    {
      name: 'Flutter',
      logo: FlutterLogo,
    },
    {
      name: 'SQL',
      logo: SQLLogo,
    },
    {
      name: 'Linux',
      logo: LinuxLogo,
    },
    {
      name: 'Docker',
      logo: DockerLogo,
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="welcoming">Habilidades</div>
      <hr className="divider" />

      <div className="text">
        Tenho um conjunto de habilidades muito diverso,
        variando de tecnologias para desenvolvimento web,
        mobile multiplataforma, design, infraestrutura e habilidades intrapessoais.
        <br />
        <br />
        Estas são algumas tecnologias que venho trabalhando recentemente:
      </div>

      <Slider {...settings}>
        {
                    skills.map((skill) => (
                      <div className="skill" key={skill.name}>
                        <img alt={skill.name} src={skill.logo} />
                        <span className="skill-name">{skill.name}</span>
                      </div>
                    ))
                }
      </Slider>

    </section>
  );
}

export default Skills;
