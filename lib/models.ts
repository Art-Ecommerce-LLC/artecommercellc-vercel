import type { ControllerRenderProps } from "react-hook-form";

// Define the Event type based on the API response structure
export interface Event {
    id: string;
    summary: string;
    start: string; // UTC date string
    end: string;   // UTC date string
  }
  // Props for SelectScrollable component
// Props for SelectScrollable component

export interface SelectProps { 
    guestEmail: string; 
    description: string; 
    timeslot: string; 
}

export interface SelectScrollableProps {
    selectedDate: Date | undefined; // The date selected by the user in the calendar
    availableEvents: Event[]; // Array of available events from the parent component
    field: ControllerRenderProps<SelectProps>; // React Hook Form field props
  }