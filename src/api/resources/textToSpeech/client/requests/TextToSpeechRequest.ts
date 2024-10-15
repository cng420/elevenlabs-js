/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ElevenLabs from "../../../../index";

/**
 * @example
 *     {
 *         optimize_streaming_latency: "0",
 *         output_format: "mp3_22050_32",
 *         text: "It sure does, Jackie\u2026 My mama always said: \u201CIn Carolina, the air's so thick you can wear it!\u201D",
 *         voice_settings: {
 *             stability: 0.5,
 *             similarity_boost: 0.75,
 *             style: 0
 *         }
 *     }
 */
export interface TextToSpeechRequest {
    /**
     * When enable_logging is set to false full privacy mode will be used for the request. This will mean history features are unavailable for this request, including request stitching. Full privacy mode may only be used by enterprise customers.
     */
    enable_logging?: boolean;
    /**
     * You can turn on latency optimizations at some cost of quality. The best possible final latency varies by model.
     */
    optimize_streaming_latency?: ElevenLabs.OptimizeStreamingLatency;
    /**
     * The output format of the generated audio.
     */
    output_format?: ElevenLabs.OutputFormat;
    /** The text that will get converted into speech. */
    text: string;
    /** Identifier of the model that will be used, you can query them using GET /v1/models. The model needs to have support for text to speech, you can check this using the can_do_text_to_speech property. */
    model_id?: string;
    /** Language code (ISO 639-1) used to enforce a language for the model. Currently only Turbo v2.5 supports language enforcement. For other models, an error will be returned if language code is provided. */
    language_code?: string;
    /** Voice settings overriding stored setttings for the given voice. They are applied only on the given request. */
    voice_settings?: ElevenLabs.VoiceSettings;
    /** A list of pronunciation dictionary locators (id, version_id) to be applied to the text. They will be applied in order. You may have up to 3 locators per request */
    pronunciation_dictionary_locators?: ElevenLabs.PronunciationDictionaryVersionLocator[];
    /** If specified, our system will make a best effort to sample deterministically, such that repeated requests with the same seed and parameters should return the same result. Determinism is not guaranteed. */
    seed?: number;
    /** The text that came before the text of the current request. Can be used to improve the flow of prosody when concatenating together multiple generations or to influence the prosody in the current generation. */
    previous_text?: string;
    /** The text that comes after the text of the current request. Can be used to improve the flow of prosody when concatenating together multiple generations or to influence the prosody in the current generation. */
    next_text?: string;
    /** A list of request_id of the samples that were generated before this generation. Can be used to improve the flow of prosody when splitting up a large task into multiple requests. The results will be best when the same model is used across the generations. In case both previous_text and previous_request_ids is send, previous_text will be ignored. A maximum of 3 request_ids can be send. */
    previous_request_ids?: string[];
    /** A list of request_id of the samples that were generated before this generation. Can be used to improve the flow of prosody when splitting up a large task into multiple requests. The results will be best when the same model is used across the generations. In case both next_text and next_request_ids is send, next_text will be ignored. A maximum of 3 request_ids can be send. */
    next_request_ids?: string[];
}
