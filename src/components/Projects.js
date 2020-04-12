import React from "react";

import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  CardText,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";

class Projects extends React.Component {
  state = {
    activeTab: 0,
  };

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
          <div className="projects-grid">
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background:
                "url(https://lh3.googleusercontent.com/proxy/5S3laQA9s_8Lj8QMXQXm7j1zXMf8Ih-9oEwo2CaE9wlki9NMlzc62btiGQeCHGJLcuW7zqyEAplvmAOFYyfDoUftmqq1sEXCt8nO2BmsPKdpHXvP2F6IV3ppSHI9kM8lOmkFEUZeow_ko6FJK1zs2MMKwTfhau4wRrVTFef4H3fx19vObYPV) center/cover",
            }}
          >React project 1</CardTitle>
          <CardText>Lorem ipsum askdjajfasjdaldhaljsd</CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>Github</Button>
            <Button colored>Github</Button>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share"></IconButton>
            </CardMenu>
          </CardActions>
        </Card>
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background:
                "url(https://lh3.googleusercontent.com/proxy/5S3laQA9s_8Lj8QMXQXm7j1zXMf8Ih-9oEwo2CaE9wlki9NMlzc62btiGQeCHGJLcuW7zqyEAplvmAOFYyfDoUftmqq1sEXCt8nO2BmsPKdpHXvP2F6IV3ppSHI9kM8lOmkFEUZeow_ko6FJK1zs2MMKwTfhau4wRrVTFef4H3fx19vObYPV) center/cover",
            }}
          >React project 2</CardTitle>
          <CardText>Lorem ipsum askdjajfasjdaldhaljsd</CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>Github</Button>
            <Button colored>Github</Button>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share"></IconButton>
            </CardMenu>
          </CardActions>
        </Card>
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background:
                "url(https://lh3.googleusercontent.com/proxy/5S3laQA9s_8Lj8QMXQXm7j1zXMf8Ih-9oEwo2CaE9wlki9NMlzc62btiGQeCHGJLcuW7zqyEAplvmAOFYyfDoUftmqq1sEXCt8nO2BmsPKdpHXvP2F6IV3ppSHI9kM8lOmkFEUZeow_ko6FJK1zs2MMKwTfhau4wRrVTFef4H3fx19vObYPV) center/cover",
            }}
          >React project 3</CardTitle>
          <CardText>Lorem ipsum askdjajfasjdaldhaljsd</CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>Github</Button>
            <Button colored>Github</Button>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share"></IconButton>
            </CardMenu>
          </CardActions>
        </Card>
        </div>
        
      );
    } else if (this.state.activeTab === 1) {
      return (
        <>
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background:
                "url(https://lh3.googleusercontent.com/proxy/5S3laQA9s_8Lj8QMXQXm7j1zXMf8Ih-9oEwo2CaE9wlki9NMlzc62btiGQeCHGJLcuW7zqyEAplvmAOFYyfDoUftmqq1sEXCt8nO2BmsPKdpHXvP2F6IV3ppSHI9kM8lOmkFEUZeow_ko6FJK1zs2MMKwTfhau4wRrVTFef4H3fx19vObYPV) center/cover",
            }}
          >React project 2</CardTitle>
          <CardText>Lorem ipsum askdjajfasjdaldhaljsd</CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>Github</Button>
            <Button colored>Github</Button>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share"></IconButton>
            </CardMenu>
          </CardActions>
        </Card>
        </>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <>
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background:
                "url(https://lh3.googleusercontent.com/proxy/5S3laQA9s_8Lj8QMXQXm7j1zXMf8Ih-9oEwo2CaE9wlki9NMlzc62btiGQeCHGJLcuW7zqyEAplvmAOFYyfDoUftmqq1sEXCt8nO2BmsPKdpHXvP2F6IV3ppSHI9kM8lOmkFEUZeow_ko6FJK1zs2MMKwTfhau4wRrVTFef4H3fx19vObYPV) center/cover",
            }}
          >React project 3</CardTitle>
          <CardText>Lorem ipsum askdjajfasjdaldhaljsd</CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>Github</Button>
            <Button colored>Github</Button>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share"></IconButton>
            </CardMenu>
          </CardActions>
        </Card>
        </>
      );
    }
  }

  render() {
    return (
      <>
        <div className="category-tabs">
          <Tabs
            activeTab={this.state.activeTab}
            onChange={(tabId) => this.setState({ activeTab: tabId })}
            ripple
          >
            <Tab>React</Tab>
            <Tab>VueJS</Tab>
            <Tab>MongoDB</Tab>
          </Tabs>
          <section className="project-grid">
            <Grid>
              <Cell col={12}>
                <div className="">{this.toggleCategories()}</div>
              </Cell>
            </Grid>
            {/* {this.toggleCategories()} */}
          </section>
        </div>
      </>
    );
  }
}

export default Projects;
