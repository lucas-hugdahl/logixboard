export default (status) => {
  let statusColors = {
    "Arrived" : "--success",
    "In Transit" : "--alert",
    "Roll-Over" : "--warning",
    "Cancelled" : "--warning",
    "Customs Hold" : "--warning",
    "TransportError" : "--error"
  }

  return typeof statusColors[status] !== "undefined" 
  ? getComputedStyle(document.documentElement).getPropertyValue(statusColors[status])
  : "#888"
};