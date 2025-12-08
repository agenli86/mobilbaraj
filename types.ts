export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  details: string;
}

export interface ChecklistItem {
  id: string;
  text: string;
  isCompleted: boolean;
}

export interface QuoteFormState {
  id?: string;
  fromAddress: string;
  toAddress: string;
  date: string;
  phone: string;
  timestamp?: string;
  images?: string[]; // stored as base64 or blob urls
}

export interface Campaign {
  id: string;
  title: string;
  description: string;
  colorFrom: string;
  colorTo: string;
  buttonText: string;
}