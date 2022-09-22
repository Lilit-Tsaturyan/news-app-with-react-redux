import React from "react";
import ContactSubmit from "../../Components/ContactSubmit/ContactSubmit";

export default function Contact() {
  return (
    <div className="top">
      <section id="content-wrap" className="site-page">
        <div className="row">
          <div className="col-twelve">
            <section>
              <div className="primary-content">
                <h1 className="entry-title add-bottom">
                  Get In Touch With Us.
                </h1>

                <p className="lead">
                  Lorem ipsum Deserunt est dolore Ut Excepteur nulla occaecat
                  magna occaecat Excepteur nisi esse veniam dolor consectetur
                  minim qui nisi esse deserunt commodo ea enim ullamco non
                  voluptate consectetur minim aliquip Ut incididunt amet ut
                  cupidatat.
                </p>

                <p>
                  Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat
                  nostrud cupidatat dolor sunt sint sit nisi est eu exercitation
                  incididunt adipisicing veniam velit id fugiat enim mollit amet
                  anim veniam dolor dolor irure velit commodo cillum sit nulla
                  ullamco magna amet magna cupidatat qui labore cillum sit in
                  tempor veniam consequat non laborum adipisicing aliqua ea nisi
                  sint ut quis proident ullamco ut dolore culpa occaecat ut
                  laboris in sit minim cupidatat ut dolor voluptate enim veniam
                  consequat occaecat fugiat in adipisicing in amet Ut nulla nisi
                  non ut enim aliqua laborum mollit quis nostrud sed sed.
                </p>

                <div className="row">
                  <div className="col-six tab-full">
                    <h4>Where to Find Us</h4>

                    <p>
                      1600 Amphitheatre Parkway
                      <br />
                      Mountain View, CA
                      <br />
                      94043 US
                    </p>
                  </div>

                  <div className="col-six tab-full">
                    <h4>Contact Info</h4>

                    <p>
                      someone@abstractwebsite.com
                      <br />
                      info@abstractwebsite.com <br />
                      Phone: (+63) 555 1212
                    </p>
                  </div>
                </div>

                <ContactSubmit />
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
