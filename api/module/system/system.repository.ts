import { SupabaseClient } from "@supabase/supabase-js";

export class SystemRepository {
  private supabaseClient: SupabaseClient;

  private table = "dahoon06_system";

  constructor(supabaseClient: SupabaseClient) {
    this.supabaseClient = supabaseClient;
  }

  async getSystem() {
    const { data, error } = await this.supabaseClient
      .from(this.table)
      .select("system_date");
    return data;
  }

  async updateSystemDate(): Promise<string> {
    const system_date = new Date().toISOString();
    try {
      await this.supabaseClient
        .from(this.table)
        .update({
          system_date,
        })
        .eq("id", 1);
      return system_date;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
