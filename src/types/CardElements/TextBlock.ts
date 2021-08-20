import { Colors } from "../Types/Colors";
import { FontSize } from "../Types/FontSize";
import { FontType } from "../Types/FontType";
import { FontWeight } from "../Types/FontWeight";
import { HorizontalAlignment } from "../Types/HorizontalAlignment";

export type TextBlock = Element & {
  type: "TextBlock";
  text: string;
  color?: Colors;
  fontType?: FontType;
  horizontalAlignment?: HorizontalAlignment;
  isSublt?: boolean;
  maxLines?: number;
  size?: FontSize;
  weight?: FontWeight;
  wrap?: boolean;
};
