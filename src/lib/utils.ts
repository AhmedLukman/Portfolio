export const convertDate = (date: Date): string => {
  // Check if date is valid
  if (isNaN(date.getTime())) {
    throw new Error(`Invalid date: ${date}`)
  }

  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    year: "numeric",
  }

  return date.toLocaleDateString("en-US", options)
}

export const getExternalLinkProps = (isExternal: boolean) => {
  return isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {}
}
