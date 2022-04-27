import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { mount } from "marketing/MarketingApp";

// this way we can render any other framework as
// microfrontend app which can attach self to the html element
export default () => {
  const ref = useRef(null);
  const history = useHistory(); // copy of borwser hisory from our container

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathName }) => {
        if (history.location.pathname !== nextPathName) {
          history.push(nextPathName);
        }
      },
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
