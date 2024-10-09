import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FormControl
} from "@/components/ui/form";
import { SelectScrollableProps } from "@/lib/models"; // Import Event and SelectScrollableProps



export function SelectScrollable({ field, selectedDate, availableEvents=[] }: SelectScrollableProps) {
  // Filter available events based on the selected date
  const filteredEvents = availableEvents.filter((event) => {
    if (!selectedDate) return false;
    const eventDate = new Date(event.start).toDateString();
    return eventDate === selectedDate.toDateString(); // Compare dates
  });

  // Function to format date and time
  const formatDateTime = (dateTime: string) => {
    const date = new Date(dateTime);
    const formattedDate = date.toLocaleDateString(); // Format date as "MM/DD/YYYY"
    const formattedTime = date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZoneName: 'short',
    });
    return `${formattedDate} - ${formattedTime}`;
  };

  return (
    <Select onValueChange={field.onChange} defaultValue={field.value}>
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
              <SelectItem key={event.id} value={formatDateTime(event.start)}>
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
