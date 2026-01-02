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

// Countries grouped by region with ISO codes for flags
const COUNTRY_REGIONS = {
  "GCC": [
    { name: "UAE", code: "ae" },
    { name: "Saudi Arabia", code: "sa" },
    { name: "Qatar", code: "qa" },
    { name: "Kuwait", code: "kw" },
    { name: "Bahrain", code: "bh" },
    { name: "Oman", code: "om" },
  ],
  "South Asia": [
    { name: "India", code: "in" },
    { name: "Pakistan", code: "pk" },
    { name: "Bangladesh", code: "bd" },
    { name: "Sri Lanka", code: "lk" },
    { name: "Nepal", code: "np" },
    { name: "Bhutan", code: "bt" },
    { name: "Maldives", code: "mv" },
    { name: "Afghanistan", code: "af" },
  ],
  "Middle East": [
    { name: "Iraq", code: "iq" },
    { name: "Iran", code: "ir" },
    { name: "Jordan", code: "jo" },
    { name: "Lebanon", code: "lb" },
    { name: "Syria", code: "sy" },
    { name: "Yemen", code: "ye" },
    { name: "Israel", code: "il" },
  ],
  "East & Southeast Asia": [
    { name: "China", code: "cn" },
    { name: "Japan", code: "jp" },
    { name: "South Korea", code: "kr" },
    { name: "Hong Kong", code: "hk" },
    { name: "Taiwan", code: "tw" },
    { name: "Macau", code: "mo" },
    { name: "Singapore", code: "sg" },
    { name: "Malaysia", code: "my" },
    { name: "Thailand", code: "th" },
    { name: "Indonesia", code: "id" },
    { name: "Philippines", code: "ph" },
    { name: "Vietnam", code: "vn" },
    { name: "Cambodia", code: "kh" },
    { name: "Myanmar", code: "mm" },
    { name: "Laos", code: "la" },
    { name: "Brunei", code: "bn" },
    { name: "Mongolia", code: "mn" },
  ],
  "Central Asia": [
    { name: "Kazakhstan", code: "kz" },
    { name: "Uzbekistan", code: "uz" },
    { name: "Turkmenistan", code: "tm" },
    { name: "Kyrgyzstan", code: "kg" },
    { name: "Tajikistan", code: "tj" },
  ],
  "Europe": [
    { name: "United Kingdom", code: "gb" },
    { name: "Germany", code: "de" },
    { name: "France", code: "fr" },
    { name: "Italy", code: "it" },
    { name: "Spain", code: "es" },
    { name: "Netherlands", code: "nl" },
    { name: "Belgium", code: "be" },
    { name: "Switzerland", code: "ch" },
    { name: "Austria", code: "at" },
    { name: "Sweden", code: "se" },
    { name: "Norway", code: "no" },
    { name: "Denmark", code: "dk" },
    { name: "Finland", code: "fi" },
    { name: "Iceland", code: "is" },
    { name: "Ireland", code: "ie" },
    { name: "Portugal", code: "pt" },
    { name: "Greece", code: "gr" },
    { name: "Poland", code: "pl" },
    { name: "Czech Republic", code: "cz" },
    { name: "Hungary", code: "hu" },
    { name: "Romania", code: "ro" },
    { name: "Bulgaria", code: "bg" },
    { name: "Croatia", code: "hr" },
    { name: "Serbia", code: "rs" },
    { name: "Slovenia", code: "si" },
    { name: "Slovakia", code: "sk" },
    { name: "Bosnia and Herzegovina", code: "ba" },
    { name: "Montenegro", code: "me" },
    { name: "North Macedonia", code: "mk" },
    { name: "Albania", code: "al" },
    { name: "Estonia", code: "ee" },
    { name: "Latvia", code: "lv" },
    { name: "Lithuania", code: "lt" },
    { name: "Ukraine", code: "ua" },
    { name: "Belarus", code: "by" },
    { name: "Moldova", code: "md" },
    { name: "Russia", code: "ru" },
    { name: "Georgia", code: "ge" },
    { name: "Armenia", code: "am" },
    { name: "Azerbaijan", code: "az" },
    { name: "Cyprus", code: "cy" },
    { name: "Malta", code: "mt" },
    { name: "Luxembourg", code: "lu" },
    { name: "Andorra", code: "ad" },
    { name: "Turkey", code: "tr" },
  ],
  "North America": [
    { name: "United States", code: "us" },
    { name: "Canada", code: "ca" },
    { name: "Mexico", code: "mx" },
  ],
  "Central America & Caribbean": [
    { name: "Guatemala", code: "gt" },
    { name: "Honduras", code: "hn" },
    { name: "El Salvador", code: "sv" },
    { name: "Nicaragua", code: "ni" },
    { name: "Costa Rica", code: "cr" },
    { name: "Panama", code: "pa" },
    { name: "Dominican Republic", code: "do" },
    { name: "Jamaica", code: "jm" },
  ],
  "South America": [
    { name: "Brazil", code: "br" },
    { name: "Argentina", code: "ar" },
    { name: "Colombia", code: "co" },
    { name: "Chile", code: "cl" },
    { name: "Peru", code: "pe" },
    { name: "Venezuela", code: "ve" },
    { name: "Ecuador", code: "ec" },
    { name: "Bolivia", code: "bo" },
    { name: "Paraguay", code: "py" },
    { name: "Uruguay", code: "uy" },
  ],
  "Africa": [
    { name: "Egypt", code: "eg" },
    { name: "Morocco", code: "ma" },
    { name: "Algeria", code: "dz" },
    { name: "Tunisia", code: "tn" },
    { name: "Libya", code: "ly" },
    { name: "Sudan", code: "sd" },
    { name: "Ethiopia", code: "et" },
    { name: "Kenya", code: "ke" },
    { name: "Tanzania", code: "tz" },
    { name: "Uganda", code: "ug" },
    { name: "Rwanda", code: "rw" },
    { name: "Nigeria", code: "ng" },
    { name: "Ghana", code: "gh" },
    { name: "Senegal", code: "sn" },
    { name: "Cameroon", code: "cm" },
    { name: "South Africa", code: "za" },
    { name: "Namibia", code: "na" },
    { name: "Botswana", code: "bw" },
    { name: "Zimbabwe", code: "zw" },
    { name: "Zambia", code: "zm" },
    { name: "Mozambique", code: "mz" },
    { name: "Madagascar", code: "mg" },
    { name: "Mauritius", code: "mu" },
    { name: "Seychelles", code: "sc" },
    { name: "Djibouti", code: "dj" },
    { name: "Somalia", code: "so" },
    { name: "Chad", code: "td" },
    { name: "Angola", code: "ao" },
  ],
  "Oceania": [
    { name: "Australia", code: "au" },
    { name: "New Zealand", code: "nz" },
    { name: "Fiji", code: "fj" },
  ],
};

// Flatten all countries for search and lookup
const ALL_COUNTRIES = Object.values(COUNTRY_REGIONS).flat();

// Flag image component using flagcdn.com
const FlagImage = ({ code, className }: { code: string; className?: string }) => (
  <img
    src={`https://flagcdn.com/w20/${code}.png`}
    srcSet={`https://flagcdn.com/w40/${code}.png 2x`}
    width="20"
    height="15"
    alt=""
    className={cn("inline-block rounded-sm object-cover", className)}
    loading="lazy"
  />
);

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
              <FlagImage code={selectedCountry.code} />
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
                        "mr-2 h-4 w-4 flex-shrink-0",
                        value?.toLowerCase() === country.name.toLowerCase() ? "opacity-100" : "opacity-0"
                      )}
                    />
                    <FlagImage code={country.code} className="mr-2 flex-shrink-0" />
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
