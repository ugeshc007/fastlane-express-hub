import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// Countries grouped by region with flags
const COUNTRY_REGIONS = {
  "GCC": [
    { name: "UAE", flag: "🇦🇪" },
    { name: "Saudi Arabia", flag: "🇸🇦" },
    { name: "Qatar", flag: "🇶🇦" },
    { name: "Kuwait", flag: "🇰🇼" },
    { name: "Bahrain", flag: "🇧🇭" },
    { name: "Oman", flag: "🇴🇲" },
  ],
  "South Asia": [
    { name: "India", flag: "🇮🇳" },
    { name: "Pakistan", flag: "🇵🇰" },
    { name: "Bangladesh", flag: "🇧🇩" },
    { name: "Sri Lanka", flag: "🇱🇰" },
    { name: "Nepal", flag: "🇳🇵" },
    { name: "Bhutan", flag: "🇧🇹" },
    { name: "Maldives", flag: "🇲🇻" },
    { name: "Afghanistan", flag: "🇦🇫" },
  ],
  "Middle East": [
    { name: "Iraq", flag: "🇮🇶" },
    { name: "Iran", flag: "🇮🇷" },
    { name: "Jordan", flag: "🇯🇴" },
    { name: "Lebanon", flag: "🇱🇧" },
    { name: "Syria", flag: "🇸🇾" },
    { name: "Yemen", flag: "🇾🇪" },
    { name: "Israel", flag: "🇮🇱" },
  ],
  "East & Southeast Asia": [
    { name: "China", flag: "🇨🇳" },
    { name: "Japan", flag: "🇯🇵" },
    { name: "South Korea", flag: "🇰🇷" },
    { name: "Hong Kong", flag: "🇭🇰" },
    { name: "Taiwan", flag: "🇹🇼" },
    { name: "Macau", flag: "🇲🇴" },
    { name: "Singapore", flag: "🇸🇬" },
    { name: "Malaysia", flag: "🇲🇾" },
    { name: "Thailand", flag: "🇹🇭" },
    { name: "Indonesia", flag: "🇮🇩" },
    { name: "Philippines", flag: "🇵🇭" },
    { name: "Vietnam", flag: "🇻🇳" },
    { name: "Cambodia", flag: "🇰🇭" },
    { name: "Myanmar", flag: "🇲🇲" },
    { name: "Laos", flag: "🇱🇦" },
    { name: "Brunei", flag: "🇧🇳" },
    { name: "Mongolia", flag: "🇲🇳" },
  ],
  "Central Asia": [
    { name: "Kazakhstan", flag: "🇰🇿" },
    { name: "Uzbekistan", flag: "🇺🇿" },
    { name: "Turkmenistan", flag: "🇹🇲" },
    { name: "Kyrgyzstan", flag: "🇰🇬" },
    { name: "Tajikistan", flag: "🇹🇯" },
  ],
  "Europe": [
    { name: "United Kingdom", flag: "🇬🇧" },
    { name: "Germany", flag: "🇩🇪" },
    { name: "France", flag: "🇫🇷" },
    { name: "Italy", flag: "🇮🇹" },
    { name: "Spain", flag: "🇪🇸" },
    { name: "Netherlands", flag: "🇳🇱" },
    { name: "Belgium", flag: "🇧🇪" },
    { name: "Switzerland", flag: "🇨🇭" },
    { name: "Austria", flag: "🇦🇹" },
    { name: "Sweden", flag: "🇸🇪" },
    { name: "Norway", flag: "🇳🇴" },
    { name: "Denmark", flag: "🇩🇰" },
    { name: "Finland", flag: "🇫🇮" },
    { name: "Iceland", flag: "🇮🇸" },
    { name: "Ireland", flag: "🇮🇪" },
    { name: "Portugal", flag: "🇵🇹" },
    { name: "Greece", flag: "🇬🇷" },
    { name: "Poland", flag: "🇵🇱" },
    { name: "Czech Republic", flag: "🇨🇿" },
    { name: "Hungary", flag: "🇭🇺" },
    { name: "Romania", flag: "🇷🇴" },
    { name: "Bulgaria", flag: "🇧🇬" },
    { name: "Croatia", flag: "🇭🇷" },
    { name: "Serbia", flag: "🇷🇸" },
    { name: "Slovenia", flag: "🇸🇮" },
    { name: "Slovakia", flag: "🇸🇰" },
    { name: "Bosnia and Herzegovina", flag: "🇧🇦" },
    { name: "Montenegro", flag: "🇲🇪" },
    { name: "North Macedonia", flag: "🇲🇰" },
    { name: "Albania", flag: "🇦🇱" },
    { name: "Estonia", flag: "🇪🇪" },
    { name: "Latvia", flag: "🇱🇻" },
    { name: "Lithuania", flag: "🇱🇹" },
    { name: "Ukraine", flag: "🇺🇦" },
    { name: "Belarus", flag: "🇧🇾" },
    { name: "Moldova", flag: "🇲🇩" },
    { name: "Russia", flag: "🇷🇺" },
    { name: "Georgia", flag: "🇬🇪" },
    { name: "Armenia", flag: "🇦🇲" },
    { name: "Azerbaijan", flag: "🇦🇿" },
    { name: "Cyprus", flag: "🇨🇾" },
    { name: "Malta", flag: "🇲🇹" },
    { name: "Luxembourg", flag: "🇱🇺" },
    { name: "Andorra", flag: "🇦🇩" },
    { name: "Turkey", flag: "🇹🇷" },
  ],
  "North America": [
    { name: "United States", flag: "🇺🇸" },
    { name: "Canada", flag: "🇨🇦" },
    { name: "Mexico", flag: "🇲🇽" },
  ],
  "Central America & Caribbean": [
    { name: "Guatemala", flag: "🇬🇹" },
    { name: "Honduras", flag: "🇭🇳" },
    { name: "El Salvador", flag: "🇸🇻" },
    { name: "Nicaragua", flag: "🇳🇮" },
    { name: "Costa Rica", flag: "🇨🇷" },
    { name: "Panama", flag: "🇵🇦" },
    { name: "Dominican Republic", flag: "🇩🇴" },
    { name: "Jamaica", flag: "🇯🇲" },
  ],
  "South America": [
    { name: "Brazil", flag: "🇧🇷" },
    { name: "Argentina", flag: "🇦🇷" },
    { name: "Colombia", flag: "🇨🇴" },
    { name: "Chile", flag: "🇨🇱" },
    { name: "Peru", flag: "🇵🇪" },
    { name: "Venezuela", flag: "🇻🇪" },
    { name: "Ecuador", flag: "🇪🇨" },
    { name: "Bolivia", flag: "🇧🇴" },
    { name: "Paraguay", flag: "🇵🇾" },
    { name: "Uruguay", flag: "🇺🇾" },
  ],
  "Africa": [
    { name: "Egypt", flag: "🇪🇬" },
    { name: "Morocco", flag: "🇲🇦" },
    { name: "Algeria", flag: "🇩🇿" },
    { name: "Tunisia", flag: "🇹🇳" },
    { name: "Libya", flag: "🇱🇾" },
    { name: "Sudan", flag: "🇸🇩" },
    { name: "Ethiopia", flag: "🇪🇹" },
    { name: "Kenya", flag: "🇰🇪" },
    { name: "Tanzania", flag: "🇹🇿" },
    { name: "Uganda", flag: "🇺🇬" },
    { name: "Rwanda", flag: "🇷🇼" },
    { name: "Nigeria", flag: "🇳🇬" },
    { name: "Ghana", flag: "🇬🇭" },
    { name: "Senegal", flag: "🇸🇳" },
    { name: "Cameroon", flag: "🇨🇲" },
    { name: "South Africa", flag: "🇿🇦" },
    { name: "Namibia", flag: "🇳🇦" },
    { name: "Botswana", flag: "🇧🇼" },
    { name: "Zimbabwe", flag: "🇿🇼" },
    { name: "Zambia", flag: "🇿🇲" },
    { name: "Mozambique", flag: "🇲🇿" },
    { name: "Madagascar", flag: "🇲🇬" },
    { name: "Mauritius", flag: "🇲🇺" },
    { name: "Seychelles", flag: "🇸🇨" },
    { name: "Djibouti", flag: "🇩🇯" },
    { name: "Somalia", flag: "🇸🇴" },
    { name: "Chad", flag: "🇹🇩" },
    { name: "Angola", flag: "🇦🇴" },
  ],
  "Oceania": [
    { name: "Australia", flag: "🇦🇺" },
    { name: "New Zealand", flag: "🇳🇿" },
    { name: "Fiji", flag: "🇫🇯" },
  ],
};

// Flatten all countries for search and lookup
const ALL_COUNTRIES = Object.values(COUNTRY_REGIONS).flat();
const countryFlagMap = new Map(ALL_COUNTRIES.map(c => [c.name.toLowerCase(), c.flag]));

interface CountryComboboxProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function CountryCombobox({ value, onChange, placeholder = "Select Country" }: CountryComboboxProps) {
  const [open, setOpen] = React.useState(false);

  const selectedCountry = ALL_COUNTRIES.find(c => c.name.toLowerCase() === value?.toLowerCase());

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between font-normal"
        >
          {selectedCountry ? (
            <span className="flex items-center gap-2">
              <span>{selectedCountry.flag}</span>
              <span>{selectedCountry.name}</span>
            </span>
          ) : (
            placeholder
          )}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0 z-50" align="start">
        <Command>
          <CommandInput placeholder="Search country..." />
          <CommandList>
            <CommandEmpty>No country found.</CommandEmpty>
            {Object.entries(COUNTRY_REGIONS).map(([region, countries]) => (
              <CommandGroup key={region} heading={region}>
                {countries.map((country) => (
                  <CommandItem
                    key={country.name}
                    value={country.name}
                    onSelect={(currentValue) => {
                      const selected = ALL_COUNTRIES.find(
                        c => c.name.toLowerCase() === currentValue.toLowerCase()
                      );
                      onChange(selected?.name === value ? "" : selected?.name || "");
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value?.toLowerCase() === country.name.toLowerCase() ? "opacity-100" : "opacity-0"
                      )}
                    />
                    <span className="mr-2">{country.flag}</span>
                    {country.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
