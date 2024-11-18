import { forwardRef, useEffect } from "react";
import Icon from "@ant-design/icons";

type IconSvgType = {
  src: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  className?: string;
  style?: React.CSSProperties;
  fontSize?: number;
  onClick?: () => void;
  fill?: string;
};

const IconSvg = forwardRef<SVGSVGElement, IconSvgType>(
  (
    {
      src: CustomSvgComponent,
      className,
      style,
      fontSize,
      onClick,
      fill,
      ...props
    },
    ref
  ) => {
    useEffect(() => {
      if (ref && typeof ref !== "function" && ref.current && fill) {
        ref.current.setAttribute("fill", fill);
      }
    }, [fill, ref]);

    return (
      <Icon
        component={() => (
          <CustomSvgComponent
            ref={ref}
            style={{ fontSize: fontSize || 20 }}
          />
        )}
        className={className}
        style={style}
        onClick={onClick}
        {...props}
      />
    );
  }
);

IconSvg.displayName = "IconSvg";

export default IconSvg;
