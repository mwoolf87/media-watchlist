import React from "react";
import Container from "react-bootstrap/Container";

function Contact() {
  return (
    <div>
      <Container className="ContactUsForm">
        {/* Name, Email, Send to [Julia, Mike, Scott], Message Body, Sent to */}
        <form
          id="contact-form"
          method="POST"
          action="send"
          enctype="multipart/form-data"
        >
          <div class="form-group">
            <div class="row">
              <div class="col-md-6">
                <input
                  placeholder="Name"
                  id="name"
                  name="name"
                  type="text"
                  class="form-control"
                  required
                />
              </div>
              <div class="col-md-6">
                <input
                  placeholder="Email"
                  id="email"
                  type="email"
                  name="email"
                  class="form-control"
                  aria-describedby="emailHelp"
                  required
                />
              </div>
              <div class="col-md-4">
                Send To:
                <select
                  placeholder="Send To"
                  id="teamContanct"
                  type="teamContanct"
                  name="teamContanct"
                  class="form-control"
                  aria-describedby="emailHelp"
                  required
                >
                  <option value="Julia">Julia Szymanski</option>
                  <option value="Mike">Mike Woolf</option>
                  <option value="Scott">Scott Henderson</option>
                </select>
              </div>
            </div>
          </div>
          <div class="form-group">
            <input
              placeholder="Subject"
              id="subject"
              name="subject"
              type="text"
              class="form-control"
              required
            />
          </div>
          <div class="form-group">
            <textarea
              placeholder="Message"
              id="message"
              name="message"
              class="form-control"
              rows="3"
              required
            ></textarea>
          </div>
          <button type="submit" value="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </Container>
    </div>
  );
}

export default Contact;
