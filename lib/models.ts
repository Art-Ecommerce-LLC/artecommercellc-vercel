import type { ControllerRenderProps, FieldPath, FieldValues } from "react-hook-form";

// Define the Event type based on the API response structure
export interface Event {
    id: string;
    summary: string;
    start: string; // UTC date string
}

export interface AppointmentFormValues {
    guestEmail: string;
    description: string;
    timeslot: string;
}



export interface SelectScrollableProps {
    selectedDate: Date | undefined; // The date selected by the user in the calendar
    availableEvents: Event[]; // Array of available events from the parent component
    field: ControllerRenderProps<{ guestEmail: string; description: string; timeslot: string; }, "timeslot"> // React Hook Form field props
    disabled: boolean;
  }

export interface EventType {
    id: number;
    title: string;
    description: string;
    date: Date;
    isBooked: boolean;
    guestEmail: string | null;
    googleEventId: string | null;
    serviceToken: string;
}