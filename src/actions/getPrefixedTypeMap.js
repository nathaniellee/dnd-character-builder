export default (prefix, types) => types.reduce((typeMap, type) => ({
  ...typeMap,
  [type]: `${prefix} - ${type}`,
}), {});
