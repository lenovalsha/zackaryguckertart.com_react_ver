import React from "react";

const ContactMe = () => {
  return (
    <div class="container contact">
      <div class="row">
        <div class="col-lg-12">
          <p>
            For business inquiries, questions, and requests, the best places to
            reach me are at my email:
            <span>
              <a href="mailto:zackaryguckert@gmail.com">
                {" zackaryguckert@gmail.com "}
              </a>
            </span>
            or
            <span>
              <a href="https://www.linkedin.com/in/zackary-guckert/">
                {" LinkedIn Messaging"}
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
