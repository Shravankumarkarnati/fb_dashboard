export interface LegendProps {
  labels: string[];
  colors: string[];
  height?: number;
  width?: number;
  horizontal?: Boolean;
  theme?: 'dark' | 'light';
  shape?: 'square' | 'triangle' | 'circle' | 'diamond';
}

export interface LegendContainerProps {
  horizontal: Boolean;
}

export interface SingleLegendContainerProps {
  horizontal?: Boolean;
  theme?: 'dark' | 'light';
}

export interface SingleLegendProps {
  color: string;
  shape?: 'square' | 'triangle' | 'circle' | 'diamond';
  height: number;
  width: number;
  text: string;
  horizontal?: Boolean;
  theme?: 'dark' | 'light';
}
