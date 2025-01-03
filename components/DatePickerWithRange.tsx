"use client"

import * as React from "react"
import { addDays, format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { Calendar } from "./ui/create-appointment-calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover"

interface DatePickerWithRangeProps {
  selectedDateRange: DateRange | undefined;
  onDateChange: (dateRange: DateRange | undefined) => void;
  date: DateRange | undefined;
  setDate: (date: DateRange | undefined) => void;
}

export function DatePickerWithRange({
  selectedDateRange,
  onDateChange,
  date,
  setDate,
}: DatePickerWithRangeProps) {
  
  const handleSelect = (selected: DateRange | undefined) => {
    setDate(selected) // Update local state
    onDateChange(selected) // Update form state
  }

  return (
    <div className={cn("grid gap-2")}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !selectedDateRange && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={handleSelect} // Calls both setDate and onDateChange
            numberOfMonths={2}
            disabled={(date) =>
                date < new Date() || date > new Date(addDays(new Date(), 90))
            }
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}