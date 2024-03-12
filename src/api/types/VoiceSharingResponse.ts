/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ElevenLabs from "..";

export interface VoiceSharingResponse {
    status: ElevenLabs.VoiceSharingState;
    history_item_sample_id: string;
    date_unix: number;
    whitelisted_emails: string[];
    public_owner_id: string;
    original_voice_id: string;
    financial_rewards_enabled: boolean;
    free_users_allowed: boolean;
    live_moderation_enabled: boolean;
    rate: number;
    notice_period: number;
    disable_at_unix: number;
    voice_mixing_allowed: boolean;
    instagram_username: string;
    twitter_username: string;
    youtube_username: string;
    tiktok_username: string;
    featured: boolean;
    ban_reason: string;
    liked_by_count: number;
    cloned_by_count: number;
    name: string;
    description: string;
    labels: Record<string, string>;
    review_status: ElevenLabs.ReviewStatus;
    review_message: string;
    enabled_in_library: boolean;
}