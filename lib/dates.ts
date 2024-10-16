import { fromZonedTime } from 'date-fns-tz';

export function convertToUTC(dateTimeStr: string, timezone: string): Date {

    const [date, time] = dateTimeStr.split(' - ');
    const [timeValue, meridiem, timeAbbreviation] = time.split(' ');
  
    if (!date || !timeValue || !meridiem || !timeAbbreviation) {
      throw new Error('Invalid date/time format');
    }
    // Check if the meridiem is AM or PM
    const isPM = meridiem === 'PM';
  
    // if the meridiem is pm then add 12 hours to the time value
    const [hours, minutes] = timeValue.split(':').map(Number);
    let hours24 = hours;
    if (isPM && hours !== 12) {
      hours24 = hours + 12;
    } else if (!isPM && hours === 12) {
      hours24 = 0;
    }
  
    // Put the date and time together in the format "YYYY-MM-DDTHH:MM:SS"
    const [month, day, year] = date.split('/');
    const formattedDate = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const formattedTime = `${String(hours24).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:00`;
    const dateTime = `${formattedDate}T${formattedTime}`;
  
    // use date-fns-tz to convert the date/time to UTC
    const zonedDate = fromZonedTime(dateTime, timezone);
    return zonedDate;
  }

  export function createDateTime(hours : string, minutes : string, meridiem : string) : Date {
    // Create a new Date object representing "today"
    const date = new Date();
  
    // Convert the hours to 24-hour format based on AM/PM
    let convertedHours = parseInt(hours, 10); // Convert hours to integer
    if (meridiem === 'PM' && convertedHours !== 12) {
      convertedHours += 12; // Convert PM hours, except for 12 PM
    } else if (meridiem === 'AM' && convertedHours === 12) {
      convertedHours = 0; // Convert 12 AM to 0 (midnight)
    }
  
    // Set the hours and minutes on the Date object
    date.setHours(convertedHours);
    date.setMinutes(parseInt(minutes,10));
    date.setSeconds(0);
    date.setMilliseconds(0);
  
  
    return date; // Return the modified Date object
  }
  