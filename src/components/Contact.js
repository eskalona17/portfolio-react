import React from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends React.Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Fernando</h2>
            <img
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              hola esto es un texto de prueba
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "arial" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    666666666
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "arial" }}
                  >
                    <i className="fa fa-fax" aria-hidden="true" />
                    666666666
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "arial" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    someone@example.com
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
