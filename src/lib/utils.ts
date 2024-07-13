export const convertDate = (dateString: string): string => {
  const date = new Date(dateString + "-01"); // Adding '-01' to ensure it's treated as the 1st day of the month
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    year: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
};