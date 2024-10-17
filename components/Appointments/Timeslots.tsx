import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  FormControl
} from "../ui/form";
import { SelectScrollableProps } from "@/lib/models"; // Import Event and SelectScrollableProps



export function SelectScrollable({ field, selectedDate, availableEvents=[], disabled }: SelectScrollableProps) {
  // Filter available events based on the selected date
  const filteredEvents = availableEvents.filter((event) => {
    if (!selectedDate) return false;
    const eventDate = new Date(event.start).toDateString();
    return eventDate === selectedDate.toDateString(); // Compare dates
  });
  
  // Function to format date and time
  const formatDateTime = (dateTime: string) => {
    const date = new Date(dateTime);
    const formattedTime = date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZoneName: 'short',
    });
    return `${formattedTime}`;
  };

  let currentSelectedDate = "Select a time slot";
  if (selectedDate) {
    currentSelectedDate = formatDateTime(selectedDate.toISOString());
  }


  return (
    <Select onValueChange={field.onChange} value={currentSelectedDate} disabled={disabled}>
      <FormControl>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select a time slot" />
      </SelectTrigger>
      </FormControl>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Available Time Slots</SelectLabel>
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <SelectItem key={event.id} value={formatDateTime(event.start)} >
                {formatDateTime(event.start)}
              </SelectItem>
            ))
          ) : (
            <SelectItem value="no-events" disabled>
              No available events
            </SelectItem>
          )}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
