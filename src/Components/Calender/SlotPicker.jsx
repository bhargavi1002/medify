import { Chip, Stack, Typography, Divider } from "@mui/material";

const SlotPicker = ({
  availableSlots,
  details,
  handleBooking,
  selectedDate,
}) => {
  const CustomChip = (props) => (
    <Chip
      label={props.label}
      color="primary"
      variant="outlined"
      sx={{
        borderRadius: "5px",
        fontSize: { xs: 10, md: 14 },
        cursor: "pointer",
        "&:nth-of-type(1)": {
          ml: 0,
        },
        mr: { xs: 1, md: 3 },
        mt: { xs: 1, md: 1.5 },
        mb: { xs: 1, md: 1.5 },
      }}
      onClick={props.handleClick}
    />
  );

  const handleClick = (slot) => {
    handleBooking({ ...details, bookingDate: selectedDate, bookingTime: slot });
  };

  return (
    <Stack
      pt={3}
      spacing={{ xs: 2, md: 3 }}
      divider={<Divider orientation="horizontal" flexItem />}
    >
      {availableSlots.morning.length > 0 && (
        <Stack
          direction="row"
          alignItems="center"
          px={{ xs: 0, md: 6 }}
          flexWrap={"wrap"}
        >
          <Typography
            flexBasis="15%" // Fixed width for text to align chips
            fontSize={{ xs: 14, md: 16 }}
          >
            Morning
          </Typography>
          <Stack direction="row" flexWrap="wrap" flexGrow={1}>
            {availableSlots.morning.map((slot) => (
              <CustomChip
                key={slot}
                label={slot}
                handleClick={() => handleClick(slot)}
              />
            ))}
          </Stack>
        </Stack>
      )}
      {availableSlots.afternoon.length > 0 && (
        <Stack
          direction="row"
          alignItems="center"
          px={{ xs: 0, md: 6 }}
          flexWrap={"wrap"}
        >
          <Typography
            flexBasis="15%" // Fixed width for text to align chips
            fontSize={{ xs: 14, md: 16 }}
          >
            Afternoon
          </Typography>
          <Stack direction="row" flexWrap="wrap" flexGrow={1}>
            {availableSlots.afternoon.map((slot) => (
              <CustomChip
                key={slot}
                label={slot}
                handleClick={() => handleClick(slot)}
              />
            ))}
          </Stack>
        </Stack>
      )}
      {availableSlots.evening.length > 0 && (
        <Stack
          direction="row"
          alignItems="center"
          px={{ xs: 0, md: 6 }}
          flexWrap={"wrap"}
        >
          <Typography
            flexBasis="15%" // Fixed width for text to align chips
            fontSize={{ xs: 14, md: 16 }}
          >
            Evening
          </Typography>
          <Stack direction="row" flexWrap="wrap" flexGrow={1}>
            {availableSlots.evening.map((slot) => (
              <CustomChip
                key={slot}
                label={slot}
                handleClick={() => handleClick(slot)}
              />
            ))}
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};

export default SlotPicker;
