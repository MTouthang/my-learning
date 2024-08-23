const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 2000); // Simulate a 2-second delay
  });
};

export default fetchData;
