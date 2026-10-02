const snm_story_view_ext = {
  log: (msg) => console.log("[snm-story-ext] " + msg),
  error: (msg) => console.error("[snm-story-ext] " + msg)
}

const removeAllClassInstances = (className) => {
  for (const e of document.getElementsByClassName(className)) {
    e.classList.remove(className)
  }
};

const getChildByClassName = (ele, eleDesc, childDesc, classNames) => {
  let childrenWithClass = ele.getElementsByClassName(classNames)
  if (childrenWithClass.length === 0) { 
    snm_story_view_ext.error(`Could not find '${childDesc}' in '${eleDesc}' with classes ${classNames}`)
    return null;
  } else if (childrenWithClass.length !== 1) { 
    snm_story_view_ext.error(`Found multiple '${childDesc}' in '${eleDesc}' with classes ${classNames}`)
    return null;
  }
  return childrenWithClass[0];
};

const getChildByTag = (ele, eleDesc, childDesc, tagName) => {
  let childrenWithTag = ele.querySelectorAll(':scope > ' + tagName);
  if (childrenWithTag.length === 0) { 
    snm_story_view_ext.error(`Could not find '${childDesc}' in '${eleDesc}' with tag ${tagName}`)
    return null;
  } else if (childrenWithTag.length !== 1) { 
    snm_story_view_ext.error(`Found multiple '${childDesc}' in '${eleDesc}' with tag ${tagName}! ${childrenWithTag}`)
    return null;
  }
  return childrenWithTag[0];
};

snm_story_view_ext.log("loaded extension script");

// move the in-progress reads ahead of the other items in the DOM
let inprogressReadsSect = getChildByClassName(
  document,
  "DOM",
  "in-progress reads section",
  "p-5 pt-6 col-span-1 border-[1px] border-midGrey dark:border-darkerGrey rounded-lg h-fit");
let readsSections = inprogressReadsSect.parentNode
readsSections.removeChild(inprogressReadsSect)
readsSections.prepend(inprogressReadsSect)

// fix "in-progress section" to flow horizontally
let mt5Child = getChildByClassName(
  inprogressReadsSect,
  "in-progress reads section",
  "mt-5 child",
  "mt-5");
let mt5ChildDiv = getChildByTag(
  mt5Child,
  "mt-5 child",
  "mt-5 child child div",
  "div");
mt5ChildDiv.classList += "flex"

// move the in-progress reads above the other items
removeAllClassInstances("grid-cols-[auto_1fr]");

// expand the lower panels to full width
removeAllClassInstances("w-min");
snm_story_view_ext.log("fixt")