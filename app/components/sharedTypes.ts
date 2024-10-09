// sharedTypes.ts

// Define the AppointmentEvent type based on the API response structure
export interface AppointmentEvent {
    id: string;
    summary: string;
    start: {
      dateTime: string; // The start time in UTC from the API (in ISO string format)
    };
    end: {
      dateTime: string; // The end time in UTC from the API (in ISO string format)
    };
  }
  