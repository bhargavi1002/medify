import DaySelector from '../Calender/DaySelector';
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import moment from "moment";
import { startOfDay } from "date-fns";
import SlotPicker from '../Calender/SlotPicker';

const Calender = ({ details,availableSlots, handleBooking }) =>{
  const [selectedDate, setSelectedDate] = useState(startOfDay(new Date()));

  const totalSlots =
    availableSlots.morning.length +
    availableSlots.afternoon.length +
    availableSlots.evening.length;

  return (
    <Box>
      <DaySelector
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        totalSlots={totalSlots}
      />
      <SlotPicker
        availableSlots={availableSlots}
        selectedDate={selectedDate}
        details={details}
        handleBooking={handleBooking}
      />
    </Box>
  );
}
export default Calender;
