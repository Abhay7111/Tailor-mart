export const getFeedData = async () => {
  try {
    const response = await fetch('http://localhost:5175/mock-api/portfolio-69ce9443108264b7be92d824');
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
