interface TypographyItem {
  size: string;
  weight: number;
}

export interface TypographyTheme {
  h1: TypographyItem;
  h2: TypographyItem;
  h3: TypographyItem;
  s1: TypographyItem;
  b1: TypographyItem;
  b2: TypographyItem;
  caption: TypographyItem;
}
