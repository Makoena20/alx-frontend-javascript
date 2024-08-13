import { reduce } from 'lodash';

export default function getStudentIdsSum(students) {
  return students.reduce((sum, student) => sum + student.id, 0);
}

