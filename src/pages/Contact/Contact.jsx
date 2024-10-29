import React from "react";
import { Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <h2>Contact Us</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore optio
        praesentium veniam. Totam doloribus temporibus pariatur dolore labore
        quibusdam rerum ipsum alias asperiores! Architecto ullam sequi magnam
        molestias ab non laboriosam explicabo nisi, facilis error blanditiis,
        similique culpa provident optio quo. Deleniti, repudiandae quae? Alias
        debitis esse eveniet consequuntur ex!
      </p>

      <Outlet />
    </div>
  );
};

export default Contact;
