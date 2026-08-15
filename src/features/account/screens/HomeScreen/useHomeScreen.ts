import { PageNavigationList } from "./types";

const useHomeScreen = () => {
  const pageNavigationList: PageNavigationList = [
    {
      title: "Account",
      rows: [
        {
          variant: "default",
          icon: "user",
          title: "edit profile",
          trailing: "chevron",
          onPress: () => {},
        },
        {
          variant: "default",
          icon: "lock",
          title: "change password",
          trailing: "chevron",
          onPress: () => {},
        },
      ],
    },
    {
      title: "Shopping",
      rows: [
        {
          variant: "default",
          icon: "map-pin",
          title: "adress",
          trailing: "chevron",
          onPress: () => {},
        },
        {
          variant: "default",
          icon: "truck",
          title: "my orders",
          trailing: "chevron",
          onPress: () => {},
        },
      ],
    },
    {
      title: "preferences",
      rows: [
        {
          variant: "default",
          icon: "bell",
          title: "notifications",
          trailing: "chevron",
          onPress: () => {},
        },

        {
          variant: "default",
          icon: "world",
          title: "language",
          trailing: "chevronWithValue",
          trailingValue: "english",
          onPress: () => {},
        },
        {
          variant: "default",
          icon: "palette",
          title: "theme",
          trailing: "chevronWithValue",
          trailingValue: "light",
          onPress: () => {},
        },
      ],
    },
    {
      title: "support",
      rows: [
        {
          variant: "default",
          icon: "help",
          title: "help and Policies",
          trailing: "chevron",
          onPress: () => {},
        },
        {
          variant: "default",
          icon: "file-text",
          title: "legal and Policies",
          trailing: "chevron",
          onPress: () => {},
        },
        {
          variant: "danger",
          icon: "logout",
          title: "logout",
          trailing: "chevron",
          onPress: () => {},
        },
      ],
    },
  ] as const;

  return { pageNavigationList };
};

export default useHomeScreen;
