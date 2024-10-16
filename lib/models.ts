import type { ControllerRenderProps} from "react-hook-form";

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
    selectedDate: Date | undefined; 
    availableEvents: Event[]; 
    field: ControllerRenderProps<AppointmentFormValues, "timeslot"> 
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
