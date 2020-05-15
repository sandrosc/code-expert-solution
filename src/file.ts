export interface File {
  _id: string;
  originKey?: string;
  originVersion?: number;
  userId: string;
  projectId: string;
  version: number;
  key: string;
  current: boolean;
  createdAt: string;
  type: string;
  name: string;
  permissions: {
    phase: Phase[];
    read: Role[];
    write: Role[];
  };
  replacedAt?: string;
  fileId?: string;
  size?: number;
}

export interface Directory extends File {
  type: 'inode/directory';
  children: string[];
}

enum Phase {
  Interactive = 'interactive',
  Submission = 'submission'
}

export enum Role {
  Admin = 'admin',
  Assistant = 'assistant',
  Everyone = 'everyone',
  Student = 'student'
}
