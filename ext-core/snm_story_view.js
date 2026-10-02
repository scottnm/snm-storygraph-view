const snm_story_view_ext = {
  log: (msg) => console.log("[snm-story-ext] " + msg),
  error: (msg) => console.error("[snm-story-ext] " + msg)
}

snm_story_view_ext.log("loaded extension script");

let exerciseDiv = document.getElementById("exercise-div");
exerciseDiv.classList.remove("visible-479");
snm_story_view_ext.log("removed visibility restriction on exercise list");

snm_story_view_ext.log("Hiding 'Landscape Mode Only' alerts");
let alerts = exerciseDiv.getElementsByClassName("alert");
for (alert of alerts) {
  if (alert.innerText.includes("Landscape Mode Only")) {
    alert.hidden = true;
    snm_story_view_ext.log(`Hid 'Landscape Mode Only' alert for ${alert.innerText}`);
  }
}

// Hide the sidebar and make the sheet music viewer take up the full screen
let assignmentRowWithSidebarSearch = document.getElementsByClassName("row assignments sidenav")
if (assignmentRowWithSidebarSearch.length == 1) {
  let assignmentRowWithSidebar = assignmentRowWithSidebarSearch[0];
  let sidebarSearch = assignmentRowWithSidebar.getElementsByClassName("col-12 col-lg-2");
  let assignmentAreaSearch = assignmentRowWithSidebar.getElementsByClassName("col-12 col-lg-10");
  if (assignmentAreaSearch.length != 1) {
    snm_story_view_ext.error("assignment pane did not have expected children")
  } else if (sidebarSearch.length != 1) {
    snm_story_view_ext.error("sidebar did not have expected children")
  } else {
    let sidebar = sidebarSearch[0];
    let assignment = assignmentAreaSearch[0];
    // make the assignment full width and hide the sidebar
    sidebar.hidden = true;
    assignment.classList.remove("col-lg-10");
    assignment.classList.add("col-lg-12");
    snm_story_view_ext.log("Expanding exercise window and hiding sidebar");
  }
} else {
  snm_story_view_ext.error("could not find assignment pane+sidebar")
}