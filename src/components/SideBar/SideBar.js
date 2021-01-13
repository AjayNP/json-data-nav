// import { Button } from "bootstrap";
import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";
// import './../css/App.css';
import dataJson from "../../data/top.json";
import UserScreen from "./UserScreen";

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      postDiv: [],
      author: "",
      erasePost: "",
      posts: dataJson.data.children,
      // firstPost: dataJson.data.children[0],
      firstPost: dataJson.data.children[0].data.sections[0],
      singlePost: {
        id: "",
        title: "",
        authorPost: "",
      },
    };
  }

  componentDidMount() {
    //load Last
    this.loadFirstPost();
  }

  /* [Load first Post in div ==========================================  */

  loadFirstPost() {
    // let author = this.state.firstPost.fieldResponses[0].inputVale;
    let author = this.state.firstPost.fieldResponses.map((e, key) => {
      return <h3>{e.fieldName}</h3>;
    });

    let title = this.state.firstPost.fieldResponses.map((e, key) => {
      return <h3>{e.inputVale}</h3>;
    });

    this.setState({
      singlePost: {
        id: "",
        title: title,
        authorPost: author,
      },
    });
  }

  /* [Click for load post inother div ==================================  */

  handleClick(e, t, a, divId) {
    this.setState({
      singlePost: {
        id: divId,
        title: t,
        authorPost: e,
      },
    });
    console.log(" [----- POST -----] ", this.state.singlePost);
  }

  /* [OPEN SIDE BAR  ==================================================  */

  render() {
    return (
      <div id="container">
        <div id="mySidenav" className="sidenav">
          <div id="allContent">
            <Accordion defaultActiveKey={1}>
              {this.state.posts.map((item, i) => (
                <Card  key={i}>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey={i+1}>
                      {item.data.name}
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey={i+1}>
                    <Card.Body>
                      {item.data.sections.map((secname, ky) => {
                        return (
                          <h2
                            key={ky}
                            id={"post" + ky}
                            className="Post"
                            onClick={this.handleClick.bind(
                              this,
                              secname.fieldResponses.map((a1, k1) => {
                                return <h3>{a1.fieldName}</h3>;
                              }),
                              secname.fieldResponses.map((a1, k1) => {
                                return <h3>{a1.inputVale}</h3>;
                              })
                            )}
                          >
                            {secname.sectionName}
                          </h2>
                        );
                      })}
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              ))}
            </Accordion>

            {/* {this.state.posts.map((item, i) => (
              // <div className="collapsed">
              //   <h3
              //     style={{ paddingTop: "20px", clear: "both", marginBottom: 0 }}
              //   >
              //     {item.data.name}
              //   </h3>
              //   <div>
              //     {item.data.sections.map((secname, ky) => {
              //       return (
              //         <h2
              //           key={ky}
              //           id={"post" + ky}
              //           className="Post"
              //           onClick={this.handleClick.bind(
              //             this,
              //             secname.fieldResponses.map((a1, k1) => {
              //               return <h3>{a1.fieldName}</h3>;
              //             }),
              //             secname.fieldResponses.map((a1, k1) => {
              //               return <h3>{a1.inputVale}</h3>;
              //             })
              //           )}
              //         >
              //           {secname.sectionName}
              //         </h2>
              //       );
              //     })}
              //   </div>
              // </div>
              // <div>

              //     {item.data.sections.map((secname, ky)=>{
              //       return (<h2 key={ky}
              //         id={"post" + ky}
              //         className="Post"
              //         onClick={this.handleClick.bind(
              //           this,
              //           secname.fieldResponses.map((a1,k1)=>{ return (<h3>{a1.fieldName}</h3>)}),
              //           secname.fieldResponses.map((a1,k1)=>{ return (<h3>{a1.inputVale}</h3>)}),

              //         )}>{secname.sectionName}</h2>);
              //     })}

              // </div>
            ))} */}
          </div>
        </div>
        <UserScreen
          authorPost={this.state.singlePost.authorPost}
          title={this.state.singlePost.title}
        />
      </div>
    );
  }
}

export default SideBar;
