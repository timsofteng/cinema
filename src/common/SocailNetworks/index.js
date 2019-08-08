import React from "react";
import SocialNetworksSC from "./styles";

const icons = [
  { type: "fab fa-facebook-f", link: "facebook.com/" },
  { type: "fab fa-twitter", link: "twitter.com/" },
  { type: "fab fa-pinterest-p", link: "pinterest.com" },
  { type: "fab fa-instagram", link: "instagram.com" },
  { type: "fab fa-youtube-square", link: "youtube.com" }
];

class SocialNetworks extends React.Component {
  renderIcons(icons) {
    return icons.map(item => {
      return (
        <i
          className={item.type}
          onClick={() => window.open(`https://${item.link}`, "_blank")}
          key={item.type}
        />
      );
    });
  }

  render() {
    return <SocialNetworksSC>{this.renderIcons(icons)}</SocialNetworksSC>;
  }
}
export default SocialNetworks;
