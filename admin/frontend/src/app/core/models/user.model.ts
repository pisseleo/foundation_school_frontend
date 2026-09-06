export interface User {
  id?: string;
  email?: string;
  password?: string;
  photoUrl?: string;
  lastLoginAt?: string;
  isSuperUser?: boolean;
  isStaff?: boolean;
  isActive?: boolean;
  twoFactorEnabled?: boolean;
  roles?: string[];
  dateOfBirth?: string;
  address?: string;
  primaryPhone?: string;
  department?: string;
  alternativePhone?: string;
  currentChurchId?: string;
  createdAt?: string;
  updatedAt?: string;
  first_name?: string;
  last_name?: string;
}
