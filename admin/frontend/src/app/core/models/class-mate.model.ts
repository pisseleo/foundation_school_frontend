export interface ClassMateDTO {
  id?: string;
  className?: string;
  instructorId?: string;
  startDate?: string;
  endDate?: string;
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface ClassmateRequest {
  className: string;
  instructorId: string;
  startDate: string;
  endDate?: string;
}

export interface UpdateClassRequest {
  className?: string;
  instructorId?: string;
  startDate?: string;
  endDate?: string;
  isActive?: boolean;
}

export interface AddStudentsRequest {
  studentIds: string[];
}
