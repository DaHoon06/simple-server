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

  async updateSystemDate(): Promise<number> {
    const timestamp = new Date().getTime();
    await this.supabaseClient
      .from(this.table)
      .update({
        system_date: timestamp,
      })
      .eq("id", 1);
    return timestamp;
  }
}
