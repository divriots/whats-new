import path from "node:path";

const getGroupedObj = (sortedFiles, withoutNext = false) => {
  const groupedObj = {};
  sortedFiles.forEach((file) => {
    const groupKey = path.dirname(file.url).replace(/^\//, "");
    if (withoutNext && groupKey === "next") return;
    if (!Array.isArray(groupedObj[groupKey])) {
      groupedObj[groupKey] = [file];
    } else {
      groupedObj[groupKey].push(file);
    }
  });
  return groupedObj;
};

export const sortGroupContent = (markdownFiles) => {
  // Order primary by folder alphabetically (lowest = latest date, first)
  // Order secondary by "order" prop inside the folder
  const sortedFiles = markdownFiles.sort((a, b) => {
    if (path.dirname(a.url) !== path.dirname(b.url)) {
      return path.dirname(a.url) < path.dirname(b.url) ? 1 : -1;
    }
    if (a.order != null && b.order != null) {
      return a.order < b.order ? -1 : 1;
    }
    return 0;
  });

  return {
    groupedObj: getGroupedObj(sortedFiles),
    groupedObjWithoutNext: getGroupedObj(sortedFiles, true),
  };
};
