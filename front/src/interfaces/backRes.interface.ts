export interface IBackendResponse {
    from: string,
    translated: string
    error?: string
}

export interface AudioResponse {
    success: boolean,
    audioUrl: string
}
