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


export type User = {
    id: string;
    username: string;
    emailVerified: boolean;
    image: string | null;
    role: string;
}

export type RenderProject = {
    name: string;
    commit: string;  // Allow commit to be undefined
    status: "created" | "build_in_progress" | "update_in_progress" | "live" | "deactivated" | "build_failed" | "update_failed" | "canceled" | "pre_deploy_in_progress" | "pre_deploy_failed";  // Allow status to be undefined
    updatedAt: string;
}

 export type RenderProjects = RenderProject[];
