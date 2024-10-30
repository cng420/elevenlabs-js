/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as ElevenLabs from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace AudioNative {
    interface Options {
        environment?: core.Supplier<environments.ElevenLabsEnvironment | string>;
        /** Override the xi-api-key header */
        apiKey?: core.Supplier<string | undefined>;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Override the xi-api-key header */
        apiKey?: string | undefined;
    }
}

export class AudioNative {
    constructor(protected readonly _options: AudioNative.Options = {}) {}

    /**
     * Creates AudioNative enabled project, optionally starts conversion and returns project id and embeddable html snippet.
     *
     * @param {ElevenLabs.BodyCreatesAudioNativeEnabledProjectV1AudioNativePost} request
     * @param {AudioNative.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.audioNative.create({
     *         name: "name"
     *     })
     */
    public async create(
        request: ElevenLabs.BodyCreatesAudioNativeEnabledProjectV1AudioNativePost,
        requestOptions?: AudioNative.RequestOptions
    ): Promise<ElevenLabs.AudioNativeCreateProjectResponseModel> {
        const _request = await core.newFormData();
        await _request.append("name", request.name);
        if (request.image != null) {
            await _request.append("image", request.image);
        }

        if (request.author != null) {
            await _request.append("author", request.author);
        }

        if (request.title != null) {
            await _request.append("title", request.title);
        }

        if (request.small != null) {
            await _request.append("small", request.small.toString());
        }

        if (request.text_color != null) {
            await _request.append("text_color", request.text_color);
        }

        if (request.background_color != null) {
            await _request.append("background_color", request.background_color);
        }

        if (request.sessionization != null) {
            await _request.append("sessionization", request.sessionization.toString());
        }

        if (request.voice_id != null) {
            await _request.append("voice_id", request.voice_id);
        }

        if (request.model_id != null) {
            await _request.append("model_id", request.model_id);
        }

        if (request.file != null) {
            await _request.appendFile("file", request.file);
        }

        if (request.auto_convert != null) {
            await _request.append("auto_convert", request.auto_convert.toString());
        }

        const _maybeEncodedRequest = await _request.getRequest();
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ElevenLabsEnvironment.Production,
                "v1/audio-native"
            ),
            method: "POST",
            headers: {
                "xi-api-key":
                    (await core.Supplier.get(this._options.apiKey)) != null
                        ? await core.Supplier.get(this._options.apiKey)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "elevenlabs",
                "X-Fern-SDK-Version": "0.18.0",
                "User-Agent": "elevenlabs/0.18.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ..._maybeEncodedRequest.headers,
            },
            requestType: "file",
            duplex: _maybeEncodedRequest.duplex,
            body: _maybeEncodedRequest.body,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as ElevenLabs.AudioNativeCreateProjectResponseModel;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new ElevenLabs.UnprocessableEntityError(
                        _response.error.body as ElevenLabs.HttpValidationError
                    );
                default:
                    throw new errors.ElevenLabsError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ElevenLabsError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ElevenLabsTimeoutError();
            case "unknown":
                throw new errors.ElevenLabsError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
