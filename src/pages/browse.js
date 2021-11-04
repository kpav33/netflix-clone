import React from "react";
import BrowseContainer from "../containers/browse";
import { useContent } from "../hooks";
import selectionFilter from "../utils/selection-filter";

export default function Browse() {
  // Get series and films by using the custom hook
  const { series } = useContent("series");
  const { films } = useContent("films");

  // Get series, films data with genre titles to use for slides
  const slides = selectionFilter({ series, films });

  return <BrowseContainer slides={slides} />;
}
