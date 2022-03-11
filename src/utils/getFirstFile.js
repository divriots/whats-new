export const getFirstFile = (groupedObj) => {
  const [, files] = Object.entries(groupedObj)[0];
  return files[0];
};
