// import  { useState } from 'react';
// import styled, { ThemeProvider } from 'styled-components';
// import { lightTheme, darkTheme } from '../themes';
// import { GlobalStyles } from '../globalStyles';
// import { FaSun, FaMoon } from 'react-icons/fa';
// import { BsLinkedin, BsGithub, BsTwitter, BsInstagram } from 'react-icons/bs';

// const LeftSide = () => {
//   const [theme, setTheme] = useState('light');

//   const themeToggler = () => {
//     theme === 'light' ? setTheme('dark') : setTheme('light');
//   };

//   return (
//     <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
//       <GlobalStyles />
//       <Container>
//         <Header>
//           <ProfileImage src="./assets/profile.jpg" alt="Monalisa Ashley" />
//           <Name>Monalisa Ashley</Name>
//           <Title>UI/UX Designer</Title>
//           <SocialIcons>
//             <a href="#"><BsLinkedin /></a>
//             <a href="#"><BsGithub /></a>
//             <a href="#"><BsTwitter /></a>
//             <a href="#"><BsInstagram /></a>
//           </SocialIcons>
//           <ContactInfo>
//             <ContactItem>📞 +123 456 7890</ContactItem>
//             <ContactItem>✉️ Example@Mail.Com</ContactItem>
//             <ContactItem>📍 Hong Kong, China</ContactItem>
//             <ContactItem>🎂 May 27, 1990</ContactItem>
//           </ContactInfo>
//           <ThemeToggle onClick={themeToggler}>
//             {theme === 'light' ? <FaMoon /> : <FaSun />}
//           </ThemeToggle>
//         </Header>
//         <Portfolio>
//           <PortfolioItem>
//             <img src="./assets/project1.jpg" alt="Project" />
//             <ProjectTitle>Travel Landing, UX/UI</ProjectTitle>
//             <ProjectName>Chul Urina</ProjectName>
//           </PortfolioItem>
//           {/* Add more PortfolioItem components as needed */}
//         </Portfolio>
//       </Container>
//     </ThemeProvider>
//   );
// };

// const Container = styled.div`
//   padding: 2rem;
//   max-width: 900px;
//   margin: 0 auto;
// `;

// const Header = styled.header`
//   text-align: center;
// `;

// const ProfileImage = styled.img`
//   border-radius: 50%;
//   width: 150px;
//   height: 150px;
// `;

// const Name = styled.h1`
//   margin: 0.5rem 0;
// `;

// const Title = styled.h2`
//   margin: 0.5rem 0;
//   font-weight: 400;
// `;

// const SocialIcons = styled.div`
//   display: flex;
//   justify-content: center;
//   margin: 1rem 0;

//   a {
//     margin: 0 0.5rem;
//     color: inherit;
//     text-decoration: none;
//     font-size: 1.5rem;
//   }
// `;

// const ContactInfo = styled.div`
//   margin: 1rem 0;
// `;

// const ContactItem = styled.p`
//   margin: 0.25rem 0;
// `;

// const ThemeToggle = styled.button`
//   background: none;
//   border: none;
//   cursor: pointer;
//   font-size: 1.5rem;
//   margin-top: 1rem;
// `;

// const Portfolio = styled.div`
//   margin-top: 2rem;
// `;

// const PortfolioItem = styled.div`
//   background: #f5f5f5;
//   border-radius: 5px;
//   padding: 1rem;
//   margin-bottom: 1rem;

//   img {
//     width: 100%;
//     border-radius: 5px;
//   }
// `;

// const ProjectTitle = styled.h3`
//   margin: 0.5rem 0;
// `;

// const ProjectName = styled.p`
//   margin: 0;
// `;

// export default LeftSide;
