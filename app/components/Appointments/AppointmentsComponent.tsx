import * as React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { motion, useInView } from "framer-motion";
import { SelectScrollable } from "@/app/components/Timeslots";
import { Button } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Event } from "@/lib/models"; // Import Event from models
import { useToast } from "@/hooks/use-toast";
import { Spinner } from "@nextui-org/spinner";


// Schema for form validation
const formSchema = z.object({
  guestEmail: z.string().email(),
  description: z.string().min(5, "Description should be at least 5 characters long."),
  timeslot: z.string().min(1, "Please select a time slot."),
});

export function AppointmentsComponent() {
  const [loading, setLoading] = React.useState(false);
  const [availableEvents, setAvailableEvents] = React.useState<Event[]>([]);
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(new Date());
  const isAppointmentRef = React.useRef(null);
  const isAppointmentInView = useInView(isAppointmentRef, { once: true });
  const { toast } = useToast()  
  // Fetch available events on mount
  React.useEffect(() => {
    setLoading(true); // Set loading to true while fetching
    const fetchAvailableEvents = async () => {
      try {
        const response = await fetch("/api/getEvents", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }

        const data: { events: Event[] } = await response.json();
        setAvailableEvents(data.events); // Store the events as is 
        setLoading(false); // Set loading to false after events are fetched(strings for start/end)
      } catch (error) {
        console.error("Error fetching available events:");
        setLoading(false); // Set loading to false after events are fetched
      }
    };

    fetchAvailableEvents();
  }, []);

  // Form setup
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      guestEmail: "",
      description: "",
      timeslot: "",
    },
  });

  

  // Handle form submission
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // Prepare the request body with form values and the service token
      const requestBody = {
        dateTime: values.timeslot, // Assuming the timeslot is the formatted date/time
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone, 
        guestEmail: values.guestEmail,
        description: values.description,
      };
      // Send POST request to your API
      const response = await fetch("/api/addGuest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const result = await response.json();
      if (result.error) {
        throw new Error();
      } else {
        toast({
            title: "Meeting Scheduled!",
            description: `${requestBody.dateTime}`,

          })
        form.reset();
      }


    } catch (error) {
        toast({
            variant: "destructive",
            title: "Error scheduling appointment",
        })
        
    }
  }

  return (
    <div className="w-full min-h-[90vh] flex flex-col justify-center items-center min-w-[320px]">
      {/* Main container for the Calendar and Form */}
      <div className="w-full lg:max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Calendar Section */}
        <motion.div
          ref={isAppointmentRef}
          className="p-8 bg-[rgba(255,255,255,0.05)] border-l-4 border-indigo-600 rounded-lg shadow-lg flex justify-center"
          initial={{ opacity: 0, x: -100 }}
          animate={isAppointmentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-center w-full">
            <h2 className="text-xl font-bold text-white mb-4">Choose Your Appointment Date</h2>
            <p className="text-gray-400 mb-6">Select an available date from the calendar</p>
            <div className="flex justify-center">
            {loading ? (
                <Spinner /> // Show spinner while loading
              ) : (
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                availableEvents={availableEvents} // Pass available events as strings to Calendar
                className="rounded-md border border-gray-600"
                fromDate={new Date()}
                toDate={new Date(new Date().setMonth(new Date().getMonth() + 1))} // Limit to next month
              />
            )}
            </div>
          </div>
        </motion.div>

        {/* Form Section */}
        <motion.div
          className="p-8 bg-[rgba(255,255,255,0.1)] border-l-4 border-indigo-600 rounded-lg shadow-lg"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mb-4 text-center">
            <h2 className="text-xl font-bold text-white">Book an Appointment</h2>
            <p className="text-gray-400">Fill out the form to confirm your appointment</p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
                control={form.control}
                name="timeslot"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Timeslot</FormLabel>
                    <SelectScrollable
                        field={field}
                        selectedDate={selectedDate}
                        availableEvents={availableEvents} // Pass availableEvents to SelectScrollable
                    />
              <FormMessage />
            </FormItem>
            )}
            />
              {/* Email Field */}
              <FormField
                control={form.control}
                name="guestEmail"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-gray-300">Email</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-[rgba(255,255,255,0.1)] text-white border border-gray-600"
                        placeholder="your-email@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Description Field */}
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-gray-300">Description</FormLabel>
                    <FormControl>
                      <Textarea
                        className="bg-[rgba(255,255,255,0.1)] text-white border border-gray-600"
                        placeholder="Describe your appointment"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <div className="flex justify-center">
                <Button type="submit" className="w-full lg:w-auto bg-indigo-600 text-white">
                  Book Appointment
                </Button>
              </div>
            </form>
          </Form>
        </motion.div>
      </div>
    </div>
  );
}
