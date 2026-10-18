export const addressColorMapping = {
  home: "success",
  apartment: "warning",
  office: "info",
  other: "danger",
} as const;

export const addressIcon = {
  home: "home",
  apartment: "building",
  office: "brief-case",
  other: "map-pin",
} as const;

export const addressLabel = {
  home: "common_addressHome",
  office: "common_addressOffice",
  apartment: "common_addressApartment",
  other: "common_addressOther",
} as const;
