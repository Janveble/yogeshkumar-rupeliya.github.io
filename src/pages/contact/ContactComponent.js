import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";

const ContactData = contactPageData.contactSection;
const addressSection = contactPageData.addressSection;
const phoneSection = contactPageData.phoneSection;
const emailSection = contactPageData.emailSection;

class Contact extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="contact-main">
        <Header theme={theme} />
        <div className="basic-contact">
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                <img
                  src={require(`../../assets/images/${ContactData["profile_image_path"]}`)}
                  alt="Profile"
                />
              </div>
              <div className="contact-heading-text-div">
                <h1 className="contact-heading-text" style={{ color: theme.text }}>
                  {ContactData["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {ContactData["description"]}
                </p>
                <SocialMedia theme={theme} />
                <div className="resume-btn-div">
                  <Button
                    text="My Resume"
                    newTab={true}
                    href={greeting.resumeLink}
                    theme={theme}
                  />
                </div>
              </div>
            </div>
          </Fade>

          {/* Contact Info Section (Phone, Email, Address) */}
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-info-container">
              
              {/* Phone Section (Left) */}
              <div className="contact-info-section phone-section">
                <h1 className="contact-info-heading" style={{ color: theme.text }}>
                  {phoneSection["title"]}
                </h1>
                <p className="contact-info-detail" style={{ color: theme.secondaryText }}>
                  {phoneSection["subtitle"]}
                </p>
              </div>

              {/* Email Section (Middle) */}
              <div className="contact-info-section email-section">
                <h1 className="contact-info-heading" style={{ color: theme.text }}>
                  {emailSection["title"]}
                </h1>
                <p className="contact-info-detail" style={{ color: theme.secondaryText }}>
                  <a
                    href={`mailto:${emailSection["email"]}`}
                    style={{ color: theme.text, textDecoration: "none", fontWeight: "bold" }}
                  >
                    {emailSection["email"]}
                  </a>
                </p>
              </div>

              {/* Address Section (Right, Clickable Link) */}
              <div className="contact-info-section address-section">
                <h1 className="contact-info-heading" style={{ color: theme.text }}>
                  {addressSection["title"]}
                </h1>
                <p className="contact-info-detail" style={{ color: theme.secondaryText }}>
                  <a
                    href={addressSection.location_map_link} // Clickable address
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: theme.text, textDecoration: "none", fontWeight: "bold" }}
                  >
                    {addressSection["subtitle"]}
                  </a>
                </p>
              </div>

            </div>
          </Fade>

        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Contact;
