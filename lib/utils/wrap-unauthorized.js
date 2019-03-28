// catches errors for api results and returns undefined instead
const wrapUnauthorized = async promise => {
  try {
    return await promise;
  } catch (err) {
    return undefined;
  }
};

export default wrapUnauthorized;
