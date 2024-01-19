/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as fs from "fs";
import * as ElevenLabs from "../../..";
import { default as FormData } from "form-data";
import urlJoin from "url-join";
import * as errors from "../../../../errors";

export declare namespace AudioNative {
    interface Options {
        environment?: core.Supplier<environments.ElevenLabsEnvironment | string>;
        xiApiKey?: core.Supplier<string | undefined>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class AudioNative {
    constructor(protected readonly _options: AudioNative.Options = {}) {}

    /**
     * Creates AudioNative enabled project, optionally starts conversion and returns project id and embeddable html snippet.
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     */
    public async create(
        file: File | fs.ReadStream,
        request: ElevenLabs.BodyCreatesAudioNativeEnabledProjectV1AudioNativePost,
        requestOptions?: AudioNative.RequestOptions
    ): Promise<ElevenLabs.AudioNativeCreateProjectResponseModel> {
        const _request = new FormData();
        _request.append("name", request.name);
        _request.append("image", request.image);
        _request.append("author", request.author);
        _request.append("small", request.small.toString());
        _request.append("text_color", request.text_color);
        _request.append("background_color", request.background_color);
        _request.append("sessionization", request.sessionization.toString());
        _request.append("voice_id", request.voice_id);
        _request.append("model_id", request.model_id);
        _request.append("file", file);
        _request.append("auto_convert", request.auto_convert.toString());
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ElevenLabsEnvironment.Production,
                "v1/audio-native"
            ),
            method: "POST",
            headers: {
                "xi-api-key":
                    (await core.Supplier.get(this._options.xiApiKey)) != null
                        ? await core.Supplier.get(this._options.xiApiKey)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "elevenlabs",
                "X-Fern-SDK-Version": "0.1.1",
            },
            contentType: "multipart/form-data; boundary=" + _request.getBoundary(),
            body: _request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
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

    /**
     * Get the HTML snippet to embed the AudioNative player into a webpage.
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     */
    public async getEmbedCode(
        requestOptions?: AudioNative.RequestOptions
    ): Promise<ElevenLabs.AudioNativeGetEmbedCodeResponseModel> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ElevenLabsEnvironment.Production,
                "v1/audio-native/get-embed-code"
            ),
            method: "GET",
            headers: {
                "xi-api-key":
                    (await core.Supplier.get(this._options.xiApiKey)) != null
                        ? await core.Supplier.get(this._options.xiApiKey)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "elevenlabs",
                "X-Fern-SDK-Version": "0.1.1",
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return _response.body as ElevenLabs.AudioNativeGetEmbedCodeResponseModel;
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

    /**
     * Get the HTML snippet to embed the AudioNative player into a webpage. The embedded player will not convert content from the webpage but instead play the specified project
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     */
    public async getProjectEmbedCode(
        projectId: string,
        requestOptions?: AudioNative.RequestOptions
    ): Promise<ElevenLabs.AudioNativeGetEmbedCodeResponseModel> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ElevenLabsEnvironment.Production,
                `v1/audio-native/${projectId}/get-embed-code`
            ),
            method: "GET",
            headers: {
                "xi-api-key":
                    (await core.Supplier.get(this._options.xiApiKey)) != null
                        ? await core.Supplier.get(this._options.xiApiKey)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "elevenlabs",
                "X-Fern-SDK-Version": "0.1.1",
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return _response.body as ElevenLabs.AudioNativeGetEmbedCodeResponseModel;
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
