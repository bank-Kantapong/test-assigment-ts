export enum TEXT_TYPE {
  MINI = "text-[12px]", // 12px
  SMALL = "text-sm", // 14px
  BASE = "text-base", // 16px
  LARGE = "text-lg", // 18px
  HEADER = "text-2xl", // 24px
}

export enum TEXT_WEIGHT {
  NORMAL = "font-normal", // 400px
  SEMI_BOLD = "font-semibold", // 600px
  BOLD = "font-bold", // 700px
}

type TextType = {
  type?: TEXT_TYPE;
  label: string;
  weight?: TEXT_WEIGHT;
  color?: string;
};

export const Text = ({
  type = TEXT_TYPE.SMALL,
  label,
  weight,
  color,
}: TextType) => {
  switch (type) {
    case TEXT_TYPE.MINI:
      return (
        <p
          className={`${TEXT_TYPE.MINI} ${
            weight ? weight : TEXT_WEIGHT.NORMAL
          } ${color}`}
        >
          {label}
        </p>
      );
    case TEXT_TYPE.BASE:
      return (
        <p
          className={`${TEXT_TYPE.BASE} ${
            weight ? weight : TEXT_WEIGHT.NORMAL
          } ${color}`}
        >
          {label}
        </p>
      );
    case TEXT_TYPE.LARGE:
      return (
        <p
          className={`${TEXT_TYPE.LARGE} ${
            weight ? weight : TEXT_WEIGHT.NORMAL
          } ${color}`}
        >
          {label}
        </p>
      );
    case TEXT_TYPE.HEADER:
      return (
        <p
          className={`${TEXT_TYPE.HEADER} ${
            weight ? weight : TEXT_WEIGHT.NORMAL
          } ${color}`}
        >
          {label}
        </p>
      );
    default:
      return (
        <p
          className={`${TEXT_TYPE.SMALL} ${
            weight ? weight : TEXT_WEIGHT.NORMAL
          } ${color}`}
        >
          {label}
        </p>
      );
  }
};
