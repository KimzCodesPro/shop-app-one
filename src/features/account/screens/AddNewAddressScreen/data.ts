// Egypt's governorates. Labels are data rather than UI copy, so they stay here
// instead of the translation file until a localised source replaces them.
const GOVERNORATES = [
  "Cairo",
  "Giza",
  "Alexandria",
  "Dakahlia",
  "Red Sea",
  "Beheira",
  "Fayoum",
  "Gharbia",
  "Ismailia",
  "Menofia",
  "Minya",
  "Qalyubia",
  "New Valley",
  "Suez",
  "Aswan",
  "Assiut",
  "Beni Suef",
  "Port Said",
  "Damietta",
  "Sharkia",
  "South Sinai",
  "Kafr El Sheikh",
  "Matrouh",
  "Luxor",
  "Qena",
  "North Sinai",
  "Sohag",
];

export const GOVERNORATE_OPTIONS = GOVERNORATES.map((name) => ({
  label: name,
  value: name.toLowerCase().replace(/\s+/g, "-"),
}));
