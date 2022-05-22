import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "black", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
Aravind Photography      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>Contact</Heading>
            <FooterLink href="tel:+9032190591"> contact no 9032190591</FooterLink>
            <FooterLink href="mailto:akhilg919@gmail.com?subject=SendMail&body=Description"> Email: akhilgmail.com </FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Photoshoot</FooterLink>
            <FooterLink href="#">Video editings</FooterLink>
            <FooterLink href="#">Birthday Celebrations</FooterLink>
            <FooterLink href="#">Marriages</FooterLink>
          </Column>
          {/* <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Uttar Pradesh</FooterLink>
            <FooterLink href="#">Ahemdabad</FooterLink>
            <FooterLink href="#">Indore</FooterLink>
            <FooterLink href="#">Mumbai</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="https://www.facebook.com/">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column> */}
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;