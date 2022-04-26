import React, { useRef, useEffect } from "react";
import { mount } from "marketing/MarketingApp";

// this way we can render any other framework as
// microfrontend app which can attach self to the html element
export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  });

  return <div ref={ref} />;
};
