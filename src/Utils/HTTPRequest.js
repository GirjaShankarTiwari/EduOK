import apiClient from './ApiClient';
import ApiUrls from './ApiUrls';

export default {
  staffLogin(queryParams) {
    return apiClient.get(ApiUrls.staffLogin + queryParams);
  },
  getAdminMainDashboard(queryParams) {
    return apiClient.get(ApiUrls.getAdminMainDashboard + queryParams);
  },
  getCurrentAppVersion(formData) {
    return apiClient.post(ApiUrls.getCurrentAppVersion, formData);
  },
  registerStudent(formData) {
    return apiClient.post(ApiUrls.registerStudent, formData);
  },
  getLastAdmissionNo(queryParams) {
    return apiClient.post(ApiUrls.getLastAdmissionNo + queryParams);
  },
  getClass(queryParams) {
    return apiClient.post(ApiUrls.getClass + queryParams);
  },
  getClassWithStudentCount(queryParams) {
    return apiClient.post(ApiUrls.getClassWithStudentCount + queryParams);
  },
  updateClassName(queryParams) {
    return apiClient.post(ApiUrls.updateClassName + queryParams);
  },
  getClassTeacherList(queryParams) {
    return apiClient.post(ApiUrls.getClassTeacherList + queryParams);
  },
};
