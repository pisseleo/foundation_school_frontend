import { CellGroupDTO } from "./cell-group.model";
import { User } from "./user.model";

export type RegistrationStatus =
  | 'PENDING'
  | 'APPROVED'
  | 'REJECTED';

export interface StudentDTO {
  id?: string;
  userId?: string;
  email?: string;
  verified?: boolean;
  phoneNumber?: string;
  dateOrBirth?: string;
  photoUrl?: string;
  cellGroupId?: string;
  courseStatus?: string;
  address?: string;
  primaryPhone?: string;
  isActive?: boolean;
  user?: User;
  church?: string;
  cellGroup?: CellGroupDTO;
  enrollmentDate?: string;
  createdAt?: string;
  updatedAt?: string;
  registrationStatus?: string;
  first_name?: string;
  last_name?: string;
}

export interface CreateStudentRequest {
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  password?: string;
  cellGroupId?: string;
  confirmPassword?: string;
  roleNames?: string[];
  dateOrBirth?: string;
  photoUrl?: string;
  classmateId?: string;
}

export interface UpdateStudentRequest {
  cellGroupId?: string;
  courseStatus?: string;
  isActive?: boolean;
}

export interface RejectStudentRequest {
  reason?: string;
}
