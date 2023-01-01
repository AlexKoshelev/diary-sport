import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as InstLogo } from "../../assets/svg/instagram.svg";
import { ReactComponent as TelegramLogo } from "../../assets/svg/telegram.svg";
import { ReactComponent as WhatsLogo } from "../../assets/svg/whatsapp.svg";
const SocialMedia = ({ instLink, telegramLink, whatsLink }) => {
  return (
    <>
      <a
        href={`https://www.instagram.com/${instLink}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="icon">
          <InstLogo />
        </span>
      </a>
      <a
        href={`https://t.me/${telegramLink}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="icon">
          <TelegramLogo />
        </span>
      </a>
      <a
        href={`https://wa.me/${whatsLink}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="icon">
          <WhatsLogo />
        </span>
      </a>
    </>
  );
};
SocialMedia.propTypes = {
  instLink: PropTypes.string.isRequired,
  telegramLink: PropTypes.string.isRequired,
  whatsLink: PropTypes.string.isRequired,
};
export default SocialMedia;
