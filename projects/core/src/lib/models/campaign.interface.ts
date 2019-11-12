export interface ICampaign {
  current_campaign: string;
  previous_campaign: string;
  current_campaign_short: string;
  phase: string;
  campaign_start_date: string;
  campaign_end_date: Date;
  billing_start_date: Date;
  billing_start_flag: boolean;
  billing_days: number;
  billing_day: number;
  last_billed_campaign: string;
}
