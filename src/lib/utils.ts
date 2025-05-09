export const convertDate = (dateString: string): string => {
  const date = new Date(dateString + "-01");

  // Check if date is valid
  if (isNaN(date.getTime())) {
    throw new Error(`Invalid date: ${dateString}`);
  }

  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    year: "numeric",
  };

  return date.toLocaleDateString("en-US", options);
};

export const getExternalLinkProps = (isExternal: boolean) => {
  return isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {};
};
