import React from "react";
import BrowseContainer from "../containers/browse";
import { useContent } from "../hooks";
import selectionFilter from "../utils/selection-filter";

export default function Browse() {
  // Get series and films
  const { series } = useContent("series");
  const { films } = useContent("films");
  // console.log(series, films);

  // Get series, films data with genre titles to use for slides
  const slides = selectionFilter({ series, films });
  // console.log(slides);

  return <BrowseContainer slides={slides} />;
}
