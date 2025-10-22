import { Input, Button, Group, Flex, List, ListItem } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { autocomplete } from "../../utils";
import { useState } from "react";

const Plan = () => {
    const [locations, setLocations] = useState([]);
    const [dropDownOpen, setDropdownOpen] = useState(false);
    const [searchInput, setSearchInput] = useState('');

   const handleSearch = (e) => {
  const input = e.target.value;
  setSearchInput(input);

  if (input.length > 2) {
    autocomplete(input)
      .then((data) => {
        setLocations(data);
        setDropdownOpen(true);
      })
      .catch((err) => {
        console.error(err);
        setDropdownOpen(false);
      });
  } else {
    setDropdownOpen(false);
    setLocations([]);  // Clear results when input too short
  }
}


    const handleSelect = (location) => {
        setSearchInput(location);
        setDropdownOpen(false);
        console.log("Selected location:", location);
    }
      
    return (
        <Flex justify='center'>
        <Group attached w='full' maxW='sm'>
            <Input color='#0000009b' onChange={handleSearch} border='1px solid rgba(255, 255, 255, 0.2)' boxShadow='inset 0 0 10px rgba(0, 0, 0, 0.1)' placeholder="Search destinations..." />
            <Button textShadow='1px 1px 5px #0000009b' color='#fffad6' variant='plain' border='1px solid rgba(255, 255, 255, 0.2)' boxShadow='0 0 10px rgba(0, 0, 0, 0.1)' _hover={{bg: 'rgba(255, 255, 255, 0.2)'}}><LuSearch/></Button>
        </Group>
        
        </Flex>
    )
}

export default Plan;