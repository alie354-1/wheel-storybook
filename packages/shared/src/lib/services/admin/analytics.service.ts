import { api } from "@/lib/utils/api";

export const analyticsAPI = {
  async getDashboardStats() {
    const response = await api.get("/admin/analytics/dashboard");
    return response;
  }
};
