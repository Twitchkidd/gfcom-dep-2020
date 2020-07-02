import React from "react";

export const Running = () => {
  return (
    <>
      <iframe
        id="mapmyfitness_route"
        src="//snippets.mapmycdn.com/routes/view/embedded/3228946183?width=600&height=400&elevation=true&info=true&line_color=E6006600&rgbhex=006600&distance_markers=0&unit_type=imperial&map_mode=HYBRID&last_updated=2020-06-26T14:03:20-04:00"
        height="570px"
        width="100%"
        frameborder="0"
        title="mapmyruniframe"
      ></iframe>
      <div style={{ textAlign: "right", paddingRight: "20px" }}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.mapmyrun.com/routes/create/"
        >
          Create Routes
        </a>
        or <a href="http://www.mapmyrun.com/routes/">Search for a route</a>
        from millions at <a href="http://www.mapmyrun.com">MapMyRun</a>
      </div>
    </>
  );
};
