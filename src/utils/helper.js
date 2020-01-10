export default {
  
  // a and b are javascript Date objects
  getDateDiff(unit, date1, date2) {
    var diffMs = (date2 - date1); // milliseconds between now & Christmas
    var diffDays = Math.floor(diffMs / 86400000); // days
    var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
    var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
    switch(unit) {
      case 'days':
        return diffDays;
      case 'hours':
        return diffHrs;
      case 'minutes':
        return diffMins;
      default:
        return diffMins;
    }
  },

  getShortenedPostContent(content) {
    const maxCharCount = 100;
    return content.subString(0, maxCharCount);
  },

  getFormattedPostedTime(ISOPostedTime) {
    var now = Date.now();
    var postedTime = Date.parse(ISOPostedTime);
    if (this.getDateDiff('days', postedTime, now) !== 0) {
      return (this.getDateDiff('days', postedTime, now)).toString() + ' ngày trước';
    }
    if (this.getDateDiff('hours', postedTime, now) !== 0) {
      return (this.getDateDiff('hours', postedTime, now)).toString() + ' giờ trước';
    }
    return (this.getDateDiff('minutes', postedTime, now)).toString() + ' phút trước';
  }
}