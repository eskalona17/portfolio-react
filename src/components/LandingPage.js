import React from "react";
import { Grid, Cell } from "react-mdl";

class LandingPage extends React.Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
          <img src="https://img2.freepng.es/20180626/fhs/kisspng-avatar-user-computer-icons-software-developer-5b327cc98b5780.5684824215300354015708.jpg" 
          alt="avatar"
          className="avatar-img"
          />
          <div className="banner-text">
              <h1>Full stack web developer</h1>
              <hr />
            <p>HTM/CSS | JavaScript | React | NodeJS | MongoDB</p>
            <div className="social-links">
                {/* linkedin */}
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-linkedin-square"  aria-hidden="true" />
                </a>
                {/* github */}
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-github-square"  aria-hidden="true" />
                </a>
            </div>
          </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
