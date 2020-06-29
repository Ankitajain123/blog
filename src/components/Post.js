import React, { PureComponent } from "react";
import './post.scss';

class Post extends PureComponent {
  // constructor(props) {
  //     super(props);
  // }

  render() {
    return (
      <div className="wrapper">
        <header className="header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1>
            10 Awesome Github Repos Every Web Developer Should Know
              </h1>
          <div className="subheading">From giant repos of resources to interview prep, there’s a lot of great stuff here </div>
        </header>
        <div className="content">
          <p>Cool! Now that you've done this, you can see that React isn't so insanely scary to get started with. It's just some JavaScript helper libraries that we can load into our HTML. We've done this for demonstration purposes,
                but from here out we're going to use another method: Create React App. here you go. Chanege the length</p>
          <p>Cool! Now that you've done this, you can see that React isn't so insanely scary to get started with. It's just some JavaScript helper libraries that we can load into our HTML. We've done this for demonstration purposes,
                but from here out we're going to use another method: Create React App. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.</p>
          <p>Cool! Now that you've done this, you can see that React isn't so insanely scary to get started with. It's just some JavaScript helper libraries that we can load into our HTML. We've done this for demonstration purposes,
                but from here out we're going to use another method: Create React App.</p>
          <p>Cool! Now that you've done this, you can see that React isn't so insanely scary to get started with. It's just some JavaScript helper libraries that we can load into our HTML. We've done this for demonstration purposes,
                but from here out we're going to use another method: Create React App.</p>
          <p>Cool! Now that you've done this, you can see that React isn't so insanely scary to get started with. It's just some JavaScript helper libraries that we can load into our HTML. We've done this for demonstration purposes,
                but from here out we're going to use another method: Create React App. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM. </p>
        </div>
        {/* <div className="userinfo">
              <div className="name">Ankita Jain </div>
              <div className="date">29-06-2020</div>
            </div> */}
        <div className="commentsection">
            <div className="heading"> Comment :</div>
            <textarea className="comment"> </textarea>
            <div className="post"> Post</div>
        </div>
      </div>
    );
  }
}
export default Post;