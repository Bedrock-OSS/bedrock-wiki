export type AccentColor = "red" | "orange" | "yellow" | "green" | "blue" | "purple";

export interface Example {
  id: string;
  files: string[];
  archive: {
    root: string;
    type: string;
  };
}

export interface License {
  title: string;
  link: string;
}

export interface Tag {
  color: AccentColor;
  text?: string;
  sidebar?: boolean | { text: string };
}
