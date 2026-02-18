
export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface Program {
  title: string;
  level: string;
  description: string;
  tags: string[];
}

export interface NavItem {
  label: string;
  path: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
