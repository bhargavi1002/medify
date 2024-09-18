import { Stack, TextField, Button } from "@mui/material";
import { useState, useMemo, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ list, filterList }) => {
  const [inputText, setInputText] = useState("");

  const filteredList = useMemo(() => {
    if (!inputText.trim()) return list;
    return list.filter((item) =>
      item["Hospital Name"]
        .toLowerCase()
        .includes(inputText.trim().toLowerCase())
    );
  }, [inputText, list]);

 
  useEffect(() => {
    filterList(filteredList);
  }, [filteredList, filterList]);

  const handleSubmit = (e) => {
    e.preventDefault();
    filterList(filteredList);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="row" spacing={2}>
        <TextField
          type="text"
          label="Search By Hospital"
          variant="outlined"
          fullWidth
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          inputProps={{ maxLength: 100 }}
          sx={{
            '& .MuiOutlinedInput-root': {
              color: 'blue', 
              '& fieldset': {
                borderColor: 'none', 
            },
          },
            '& .MuiInputLabel-root': {
              color: '#ABB6C7',
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
          startIcon={<SearchIcon />}
          sx={{ py: "15px", px: 8, flexShrink: 0,bgcolor: "#2AA7FF", '&:hover': { bgcolor: '#1A8FEF' }, textTransform: 'none' }}
          disableElevation
        >
          Search
        </Button>
      </Stack>
    </form>
  );
};

export default SearchBar;
