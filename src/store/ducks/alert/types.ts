export enum AlertTypes {
  DISPLAY_ALERT = "@alert/DISPLAY_ALERT"
}

export interface AlertReduceState {
  readonly text: string;
  readonly count: number;
}
